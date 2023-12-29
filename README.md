# weather-buddy
Weather assistant application IoT project

 
Name: Robert Ferguson
Student ID: 20104121

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
- IFTTT to automate tasks for notifications to user.

Teck stack proposed but subject to change is HTML & CSS (Bulma plus custom), JavaScript (Express.js, Handlebars.js plus custom vanilla JS), Python, MySQL, Node.je, MQTT broker, IFTTT service, Node-Red, Grafana, InfluxDB, Portainer

GitHub Repo link: https://github.com/robert-ferguson78/weather-buddy

## Folder Structure: 

### InlfluxDB
This folder is for my Docker container that runs the InfluxDB to store wetaher and indoor readings for historical data processing and supplying chart information, this is a time based DB so is perfcet for sensor data this assignment utilises.

### rabbit-holes
This folder holds approaches that i explored but did not work and ultimetly cost me time hence the name "rabbit-holes"
