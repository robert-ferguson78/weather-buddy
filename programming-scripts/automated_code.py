from influxdb_client import InfluxDBClient
from datetime import datetime, timedelta
import os
import requests
from pymongo import MongoClient
import paho.mqtt.client as mqtt
import schedule
import pytz
import time
import logging
import json
from dotenv import load_dotenv
from pymongo import MongoClient, errors

load_dotenv()

# print('Please wait while the program is loading...')

# Get environment variables
openweather_api_key = os.getenv('OPENWEATHER_API_KEY')
mongo_uri = os.getenv('MONGO_URI')
mqtt_broker = os.getenv('MQTT_BROKER')
mqtt_topic = os.getenv('MQTT_TOPIC')
mqtt_username = os.getenv('MQTT_USERNAME')
mqtt_password = os.getenv('MQTT_PASSWORD')

# Global variable
db = None
message_processed = False

# Get the Dublin timezone
dublin_tz = pytz.timezone('Europe/Dublin')

# InfluxDB credentials
token = os.getenv('INFLUX_TOKEN')
org = os.getenv('INFLUX_ORG')
bucket = os.getenv('INFLUX_BUCKET')
client = InfluxDBClient(url="http://192.168.68.115:8086", token=token)

# IFTTT credentials
ifttt_key = os.getenv('IFFTTT_KEY')
ifttt_event = os.getenv('IFTTT_EVENT')

#------------------------------------------------------------------#
#-------------------- checks MongoDB connection -------------------#
#------------------------------------------------------------------#
def get_db():
    while True:
        try:
            client = MongoClient(mongo_uri)
            db = client.WeatherBuddy
            # The ismaster command is cheap and does not require auth.
            # This is a quick way to check if DB is up and running
            db.command('ismaster')
            return db
        except errors.ServerSelectionTimeoutError as err:
            # If connection fails, print the error and try again after 5 seconds
            # print(f"Connection failed with error: {err}. Retrying in 5 seconds...")
            time.sleep(5)

#------------------------------------------------------------------#
#--------------------- checks on InfluxDB data --------------------#
#------------------------------------------------------------------#

def check_conditions():
    # Get the time 4 hours ago
    time_4_hours_ago = datetime.now() - timedelta(hours=4)
    # time_4_hours_ago_str = time_4_hours_ago.strftime('%Y-%m-%dT%H:%M:%SZ')

    # Query for temperature under 15 Celsius in the last 4 hours
    query = f'from(bucket: "{bucket}") |> range(start: -4h) |> filter(fn: (r) => r._measurement == "temperature" and r._field == "value" and r._value < 15)'
    result = client.query_api().query(query, org=org)
    if not result:
        return

    # Query for humidity over 60 in the last 4 hours
    query = f'from(bucket: "{bucket}") |> range(start: -4h) |> filter(fn: (r) => r._measurement == "humidity" and r._field == "value" and r._value > 60)'
    result = client.query_api().query(query, org=org)
    if not result:
        return

    # Query for wind speed under 5 in the last 4 hours
    query = f'from(bucket: "{bucket}") |> range(start: -4h) |> filter(fn: (r) => r._measurement == "wind speed" and r._field == "value" and r._value < 5)'
    result = client.query_api().query(query, org=org)
    if not result:
        return
    
    # Query for minimum temperature in the last 4 hours
    query = f'from(bucket: "{bucket}") |> range(start: -4h) |> filter(fn: (r) => r._measurement == "temperature" and r._field == "value") |> min()'
    result = client.query_api().query(query, org=org)
    min_temp = result[0].records[0].get_value()

    # Query for maximum humidity in the last 4 hours
    query = f'from(bucket: "{bucket}") |> range(start: -4h) |> filter(fn: (r) => r._measurement == "humidity" and r._field == "value") |> max()'
    result = client.query_api().query(query, org=org)
    max_humidity = result[0].records[0].get_value()

    # Send data to IFTTT
    requests.post(f"https://maker.ifttt.com/trigger/{ifttt_event}/with/key/{ifttt_key}", 
                  data={"value1": min_temp, "value2": max_humidity})

    # print("There was probably frost last night, deice car windows before driving")

# Schedule the check_conditions function to run at the specified time from Monday to Friday
time_to_run = "07:00"
schedule.every().monday.at(time_to_run).do(check_conditions)
schedule.every().tuesday.at(time_to_run).do(check_conditions)
schedule.every().wednesday.at(time_to_run).do(check_conditions)
schedule.every().thursday.at(time_to_run).do(check_conditions)
schedule.every().friday.at(time_to_run).do(check_conditions)

#------------------------------------------------------------------#
#-------------------- MQTT data sent to MongoDB -------------------#
#------------------------------------------------------------------#

# MQTT callback function
def on_message(client, userdata, message):
    # os.system('clear') # clearing console screen
    global db, message_processed

    # If a message has already been processed return
    if message_processed:
        return
    
    # Parse MQTT message
    mqtt_data = str(message.payload.decode("utf-8")) # Decode to string format
    mqtt_json = json.loads(mqtt_data)
    readings = mqtt_json['readings']

    # Fetch user's station based on email
    user = db.users.find_one({'email': 'homer@simpson.com'})  # Replace with actual email to make dynamic
    if user is None:
        logging.error('User not found')
        return # Return if no user found
    station = db.stations.find_one({'userid': user['_id']})
    if station is None:
        logging.error('Station not found')
        return # Return if no staion for user is found

    # Fetch data from OpenWeather API
    response = requests.get(f'http://api.openweathermap.org/data/2.5/weather?lat={station["latitude"]}&lon={station["longitude"]}&appid={openweather_api_key}')
    data = response.json()

    # All i need is the werther code to complete readings DB insert
    weather_code = data['weather'][0]['id']

    # Set up the readings to be saved in MongoDB
    reading = {
        'stationid': station['_id'],
        'timeStamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'code': weather_code,
        'temperature': readings.get('temperature'),
        'windSpeed': round(readings.get('wind_speed'), 2),
        'windDirection': readings.get('wind_direction'),
        'pressure': round(readings.get('pressure', 0), 2)
    }

    # Insert reading into database
    db.readings.insert_one(reading)
    # print("reading inserted into DB")

    # Debug reasings in console
    # print("Reading:")
    # for key, value in reading.items():
    #     print(f"{key}: {value}")

def job():
    global db, message_processed
    # Connect to MongoDB Atlas database and make sure connection is up (this is to fix DB time out)
    db = get_db()
    # Reset the flag at the start of each job run
    message_processed = False

    # Connect to MQTT broker
    mqtt_client = mqtt.Client()
    mqtt_client.username_pw_set(mqtt_username, mqtt_password)
    mqtt_client.connect(mqtt_broker)

    # Subscribe to MQTT topic and set callback function
    mqtt_client.subscribe(mqtt_topic)
    mqtt_client.on_message = on_message

    # Start MQTT loop
    mqtt_client.loop_start()
    # give time for MQTT to get a reading
    time.sleep(10)  # Add delay to make sure

    # Stop MQTT loop so no more messages are sent to MongoDb
    mqtt_client.loop_stop()

# Schedule the job to run at 15:00 Dublin time
schedule.every().day.at("15:00").do(job)
# print("Shedulae has run")

while True:  # Start loop to check for scheduled jobs
    current_time = datetime.now(dublin_tz)# Get the current time in Dublin

    # If it's 15:00 in Dublin, run the job
    #if current_time.hour == 12 and current_time.minute == 2:
    #    job()

    schedule.run_pending()
    # print("just before sleep")
    time.sleep(60)  # Sleep to reduce resource usage
    
    # Prinnt time to console to check for scheduled sripts (debugging)
    # print("Current time:", datetime.now())