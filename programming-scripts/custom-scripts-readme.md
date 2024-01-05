## automated_code.py file code breakdown (high level summary)

- It imports necessary libraries and loads environment variables from a .env file.
- It initializes global variables and sets up InfluxDB and IFTTT credentials.
- It defines a function check_influxdb_entries that checks if there are new entries in InfluxDB in the last 10 minutes. If not, it sends an alert using IFTTT.
- It defines a function get_db that checks the MongoDB connection and returns the database object.
- It defines a function check_conditions that queries InfluxDB for specific weather conditions in the last 4 hours. If the conditions are met, it sends data to IFTTT.
- It schedules the check_influxdb_entries function to run every hour and the check_conditions function to run at a specific time from Monday to Friday.
- It defines a function on_message that is a callback for MQTT. It processes the MQTT message, fetches data from OpenWeather API, prepares the readings to be saved in MongoDB, and inserts the reading into the database.
- It defines a function job that connects to MongoDB, resets a flag, connects to the MQTT broker, subscribes to an MQTT topic, starts the MQTT loop, sleeps for a while, and then stops the MQTT loop. This function is scheduled to run at a specific time every day.
- It starts a loop that checks for scheduled jobs and sleeps for a while to reduce resource usage.

Start script and run in the background even in console is closed
```
nohup python readings_app.py &
```

## Sense-hat-script.py file code breakdown (high level summary)

- It imports necessary libraries and loads environment variables from a .env file.
- It initializes the Sense HAT and sets up MQTT client with the broker details and credentials from the environment variables.
- It sets up an InfluxDB client with the credentials from the environment variables.
- It defines a function map_temperature_to_color that maps different temperature ranges to different RGB color values.
- In an infinite loop, it reads temperature, humidity, and pressure from the Sense HAT, rounds these values to two decimal places, and prepares a payload string.
- If the MQTT client is connected, it publishes the payload to the MQTT broker. If not, it attempts to reconnect.
- It then queries the InfluxDB for the latest temperature reading, gets the temperature value from the query result, and maps this temperature to an RGB color using the previously defined function.
- It displays this color on the Sense HAT's LED matrix.
- It then sleeps for a specified amount of time before the next reading.
- If a KeyboardInterrupt (usually Ctrl+C) is detected, it stops the MQTT client's loop. This also happens if the script exits for any other reason.

To get this to run on the Raspberry Pi 5 i had to create a python virtaul enviorment as i had issues installing python packages globally and read up that it is safer to work with a virtual enviorment so there are no conflicts bwteeen projects as they are created, started and stoped as needed (i also had overheating issue swith sense hat connected to pi so i coudl only run this script for limited time).

Command to create Python virtual env called mysensehat
```
python3 -m venv mysensehat
```
command to Run the virtual Python enviornment
```
source mysensehat/bin/activate
```
Command to run in the background even in console is closed
```
nohup python mysensehat/readings.py &
```
Command to stop virtual Enviorment
```
deactivate
```