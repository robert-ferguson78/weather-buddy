from datetime import datetime
import os
import requests
from pymongo import MongoClient
import paho.mqtt.client as mqtt
import schedule
import pytz
import time
import logging
import json

print('Please wait while the program is loading...')

# Get environment variables
openweather_api_key = "API_KEY_HERE"
mongo_uri = "MONOGO_URI_HERE"
mqtt_broker = "MQTT_BROKER_HERE"
mqtt_topic = "enviro/outside-weather-station"
mqtt_username = "MQTT_USERNAME_HERE"
mqtt_password = "MQTT_PASSWORD_HERE"

# Global variable
db = None
message_processed = False

# Get the Dublin timezone
dublin_tz = pytz.timezone('Europe/Dublin')

# MQTT callback function
def on_message(client, userdata, message):
    os.system('clear') # clearing console screen
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

    # Debug reasings in console
    # print("Reading:")
    # for key, value in reading.items():
    #     print(f"{key}: {value}")

def job():
    global db, message_processed
    # Connect to MongoDB Atlas database
    client = MongoClient(mongo_uri)
    db = client.WeatherBuddy
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

# Schedule the job to run at 20:04 Dublin time
schedule.every().day.at("20:04").do(job)

while True:  # Start loop to check for scheduled jobs
    current_time = datetime.now(dublin_tz)# Get the current time in Dublin

    # If it's 20:04 in Dublin, run the job
    if current_time.hour == 20 and current_time.minute == 4:
        schedule.run_pending()
    time.sleep(1)  # Sleep to reduce resource usage
    
    # Prinnt time to console to check for scheduled sripts (debugging)
    #print("Current time:", datetime.now())