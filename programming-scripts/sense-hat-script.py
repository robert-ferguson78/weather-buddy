from influxdb_client import InfluxDBClient
import os
import time
from dotenv import load_dotenv
from sense_hat import SenseHat
import paho.mqtt.client as mqtt
import logging

# debug MQTT connection
#logging.basicConfig(level=logging.DEBUG)

# Load environment variables from .env file
load_dotenv()

# check if script starts
#print("script started")

# Initialize Sense HAT
sense = SenseHat()

# MQTT set up environment variables
mqtt_broker = os.getenv('MQTT_BROKER')
mqtt_topic = os.getenv('MQTT_TOPIC')
mqtt_username = os.getenv('MQTT_USERNAME')
mqtt_password = os.getenv('MQTT_PASSWORD')

# InfluxDB credentials
token = os.getenv('INFLUX_TOKEN')
org = os.getenv('INFLUX_ORG')
bucket = os.getenv('INFLUX_BUCKET')
# adding org to client as parameter as i am just querying 1 influxDb organisation
influx_client = InfluxDBClient(url="http://192.168.68.115:8086", token=token, org=org)

# Create the MQTT client
client = mqtt.Client()

# Set username and password
client.username_pw_set(mqtt_username, mqtt_password)

# check the MQTT connection
#def on_connect(client, userdata, flags, rc):
#    if rc == 0:
#        print("Connected successfully.")
#    else:
#        print(f"Connection failed with error code {rc}.")
#
#def on_publish(client, userdata, mid):
#    print("Message published.")

#client.on_connect = on_connect
#client.on_publish = on_publish

# Connect to the broker
#print(f"Connecting to MQTT broker at {mqtt_broker}...")
#client.enable_logger()
client.connect(mqtt_broker)

# Start the loop and add a sleep so the connection to MQTT is made
client.loop_start()
time.sleep(1)

# Define color thresholds for temperature
#BLUE_THRESHOLD = 1
#ORANGE_THRESHOLD = 15
#RED_THRESHOLD = 34
#NEGATIVE_THRESHOLD = -10

# Function to map temperature to LED color
def map_temperature_to_color(temperature):
    # Round temperature to the nearest whole number as decimal casues issues
    #temperature = round(temperature)
    # Set temperatire for testing Colours
    #temperature = 34

    if -20 <= temperature <= 0:
        # RGB color for temperatures between -20°C and 0°C
        red_intensity, green_intensity, blue_intensity = 125, 60, 152
    elif 1 <= temperature <= 11:
        # RGB color for temperatures between 1°C and 11°C
        red_intensity, green_intensity, blue_intensity = 52, 152, 219
    elif 12 <= temperature <= 16:
        # RGB color for temperatures between 12°C and 16°C
        red_intensity, green_intensity, blue_intensity = 241, 196, 15
    elif 17 <= temperature <= 23:
        # RGB color for temperatures between 17°C and 23°C
        red_intensity, green_intensity, blue_intensity = 211, 84, 0
    elif temperature > 24:
        # RGB color for temperatures above 24°C
        red_intensity, green_intensity, blue_intensity = 192, 57, 43
    else:
        # Default color for other cases
        red_intensity, green_intensity, blue_intensity = 255, 255, 255
    
    return (red_intensity, green_intensity, blue_intensity)

try:
    while True:
        # map sensro data and round to 2 decimal places
        temp = round(sense.get_temperature(), 2)
        humidity = round(sense.get_humidity(), 2)
        pressure = round(sense.get_pressure(), 2)

        # get readings ready to send
        payload = f"Temperature: {temp}, Humidity: {humidity}, Pressure: {pressure}"
        #payload = f"Pressure: 0"

        # Check if client is connected
        if client.is_connected():
            # push sensor data to the MQTT broker
            print(f"Publishing message: {payload}")
            client.publish(mqtt_topic, payload)
        else:
            #print("Reconnecting to MQTT broker...")
            # reconnect to the brooker if needed
            client.reconnect()
        
        # Query the latest temperature reading from InfluxDB
        query_api = influx_client.query_api()
        query = 'from(bucket:"weather_readings") |> range(start: -1d) |> filter(fn:(r) => r._measurement == "temperature") |> last() |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")'.format(bucket)
        result = query_api.query_data_frame(query)

        # Get the temperature value from the query result
        temperature = result['value'].iloc[0]

        # Map temperature to LED color
        led_color = map_temperature_to_color(temperature)

        # Display the color on the Sense HAT
        sense.clear(led_color)

        # Print the columns of the DataFrame
        print(result.columns)

        # Check results value
        print(f"Temperature: {temperature}°C")

        # check results value
        print(result['value'].iloc[0])

        # Wait before next reading
        #time.sleep(180)  # Sleep for 3 minutes
        time.sleep(1)  # Sleep for 3 minutes
except KeyboardInterrupt:
    # when the script is stopped
    print("Stopping client...")
finally:
    # stop loop if the scriot has exited or been stopped
    client.loop_stop()