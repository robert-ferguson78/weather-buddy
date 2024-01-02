# weather-buddy
Weather Buddy - application IoT project

Name: Robert Ferguson
Student ID: 20104121
GitHub Repo link: https://github.com/robert-ferguson78/weather-buddy

## Project Description
This project will connect weather location data, forecast and real-world sensor data to give recommendations of tasks based on historical and real atmospheric data, users will be alerted with actionable tasks based on data processed.

## Tools, Technologies, and Equipment (Subject to change)
- For website and user touch interface, I plan to use modified versions of site using:
    - Node.js
    - Express.js
    - Handlebars.js
    - Bulma for CSS (also custom CSS and Vanilla JS scripts)
- Weather station and indoor enviornmental board will be used to send data to MQTT broker.
- OpenWeather API will be used to give user fall back option and also to facilitate supplement data from local readings to push complete data set to MongoDb
- Node-red will be used to pass data from MQTT Broker (outside and inside) to localhost databases
- IFTTT to automate tasks for notifications to user.
- Raspberry pi's (multiple pi's will be used)
- TouchScreen for interaction with local version of site (seperate from hosted cloud site)
- Sense hat for led colour display

## Teck stack proposed but (Subject to change) is
- HTML & CSS (Bulma plus custom)
- JavaScript 
    - Node.js
    - Express.js
    - Handlebars.js
    - plus custom vanilla JS scripts
- Python (custom automated script)
- InfluxDB (storage of time based data entries)
- MongoDB (storage of User's, Stations and reading data)
- MQTT broker (pass data around to subscribers and scripts)
- IFTTT service (for notifications)
- Node-Red (automate data entry from MQTT broker)
- Grafana (display data in visual dashboard)
- Portainer (provides a nice interace to manage docker containers)

## Folder Structure: 

### InlfluxDB
This folder is for my Docker container that runs the InfluxDB to store wetaher and indoor readings for historical data processing and supplying chart information, this is a time based DB so is perfcet for sensor data this assignment utilises.

### Grafana-dashboard
This folder is for my Docker container that runs the Grafana dashboard that takes data from the influxDB and renders it visually for end user in localhosted application only (touchscreen implementation).

### MQTT-build
This folder is for my Docker container that runs the MQTT broker locally on local network which goves the ability to choose what data to push to cloud services while keeping data offline for local access.

### Node-Red
This folder is for my Docker container that runs Node-Red which i used to take the local MQTT broker data, process data with javascript functions and then save into local database (influxdb in this instance)

### Portainer
This folder is for my Docker container that runs Portianer which is used to manage all the docker containers i use in this project (purly utilised for docker managment on this project)

### Touchscreen-interface-local
This folder is for my Docker container that runs a modifed version of the weboste but locally giveing the user the same functionality as the website but with added features of graph dashboards of historical sensor data, also slightly modifed website banner for touchscreen device.

### Website-project-build
This folder is for the website that accompanies the Weather-Buddy application which incorporates MongoDb as the storage engine along with user and station/readings data. All user snapshot data is disp,layed on main map but single logged in user data in the user station view (can only edit there own station data nobody elses)

### Programming-scripts
This folder is for my python script that auto runs in the background on a raspberry pi which automates, the process of adding a live data set of weather readings from the weather station together with weather code from OpenWeather API to the MongoDB for the website to display. To trigger IFTTT when certain conditions are meet with custom notifications with passed data variables used in messaging.

### rabbit-holes
This folder holds approaches that i explored but did not work and ultimetly cost me time hence the name "rabbit-holes", but it did provide knowledge in what did not and also what did work that ultimetly came down to decisions of suitbility of integration or use another flexible approach