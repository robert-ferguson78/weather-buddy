# weather-buddy
Weather Buddy - application IoT project

- Name: Robert Ferguson
- Student ID: 20104121
- Youtube Demo video: https://youtu.be/xuRn9_aWRm4?feature=shared
- GitHub Repo link: https://github.com/robert-ferguson78/weather-buddy

# Table of Contents

- [Project Description](#Project-Description)
- [Tools-Technologies and Equipment](#Tools-Technologies-and-Equipment)
- [Teck stack proposed](#Teck-stack-proposed)
- [Project Architecture](#Project-Architecture)
- [Folder Structure](#Folder-Structure)
- [Physical Hardware for project](#Physical-Hardware-for-project)
- [Website Tutorials](#Website-Tutorials)

## Project Description
This project will connect weather location data, forecast and real-world sensor data to give recommendations of tasks based on historical and real atmospheric data, users will be alerted with actionable tasks based on data processed.

>> [Back to Top](#Table-of-Contents)

---

## Tools-Technologies and Equipment
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

>> [Back to Top](#Table-of-Contents)

---

## Teck stack proposed
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

>> [Back to Top](#Table-of-Contents)

---

## Project Architecture

![Project Architecture](/image-assets/readme-images/Project-Architecture.jpg)

1. Custom board sensors for outside and inside with Raspberry Pi Pico'c soldered directly in will pass data to MQTT brooker.
2. Node-Red takes data from MQTT and breaks up data for entry into InfluxDB.
3. Grafana reades data form InfluxDB and displays it viusally in dashboardes.
3. Local hosted website stores and retreives data stored in Mongo DB Atlas and also pulls in Dashboard data from Grafana.
4. Site Hosted in Glitch (modifed version compared to Local hosted site) will pull and push data to Mongo DB Atlas ensuring both Glitch histed and Local hosted site remain in sync regarding data.
5. Custom Python scripts automate tasks suck as pushing live wether reading data to Mongo DB Atlas once a day, and also anlyse data in InfluxDB at scheduled times/days on a previous 4 hour period to send or not send data variables to IFTTT for notifications to user (defrost car windows with minimum temperature and maximum humidity readings).
6. Sense Hat in an enclosure tranlastes temperature into visual feedback for user based on readings read from InfluxDB (add on to Wether Buddy Eco System).

---

## Folder Structure: 

### InlfluxDB
This folder is for my Docker container that runs the InfluxDB to store wetaher and indoor readings for historical data processing and supplying chart information, this is a time based DB so is perfcet for sensor data this assignment utilises.

>> [Read me file for InfluxDB](influxdb/influxdb_readme.md)

### Grafana-dashboard
This folder is for my Docker container that runs the Grafana dashboard that takes data from the influxDB and renders it visually for end user in localhosted application only (touchscreen implementation).

>> [Read me file for Grafana-dashboard](grafana-dashboard/grafana_readme.md)

### MQTT-build
This folder is for my Docker container that runs the MQTT broker locally on local network which goves the ability to choose what data to push to cloud services while keeping data offline for local access.

>> [Read me file for MQTT-build](mqtt-build/mqtt_readme.md)

### Node-Red
This folder is for my Docker container that runs Node-Red which i used to take the local MQTT broker data, process data with javascript functions and then save into local database (influxdb in this instance)

>> [Read me file for Node-Red](node-red-build/node-red_readme.md)

### Portainer
This folder is for my Docker container that runs Portianer which is used to manage all the docker containers i use in this project (purly utilised for docker managment on this project)

>> [Read me file for Portainer](portainer/portainer-readme.md)

### Touchscreen-interface-local
This folder is for my Docker container that runs a modifed version of the weboste but locally giveing the user the same functionality as the website but with added features of graph dashboards of historical sensor data, also slightly modifed website banner for touchscreen device.

>> [Read me file for Touchscreen-interface-local](touchscreen-interface-local/website-touchscreen_readme.md)

### Website-project-build
This folder is for the website that accompanies the Weather-Buddy application which incorporates MongoDb as the storage engine along with user and station/readings data. All user snapshot data is disp,layed on main map but single logged in user data in the user station view (can only edit there own station data nobody elses)

>> [Read me file for Website-project-build](website-project-build/website-build_readme.md)

### Programming-scripts
This folder is for my python script that auto runs in the background on a raspberry pi which automates, the process of adding a live data set of weather readings from the weather station together with weather code from OpenWeather API to the MongoDB for the website to display. To trigger IFTTT when certain conditions are meet with custom notifications with passed data variables used in messaging.

>> [Read me file for Programming-scripts](programming-scripts/custom-scripts-readme.md)

### rabbit-holes
This folder holds approaches that i explored but did not work and ultimetly cost me time hence the name "rabbit-holes", but it did provide knowledge in what did not and also what did work that ultimetly came down to decisions of suitbility of integration or use another flexible approach

>> [Rabbit-holes Folder](rabbit-holes)

>> [Back to Top](#Table-of-Contents)

---

## Physical Hardware for project

Weather station and weather Board
![touchscreen screenshot](/image-assets/readme-images/weather-station1.jpeg)

![touchscreen screenshot 2](/image-assets/readme-images/weather-station2.jpeg)

Weather station and weather Board
![touchscreen screenshot](/image-assets/readme-images/inside-sensor-board.jpeg)

Raspberry Pi 5 With Sense hat (Weather Colour Buddy Box) & Rapberry Pi 4's
![touchscreen screenshot](/image-assets/readme-images/raspberry-pi-5-1.jpeg)

![touchscreen screenshot 2](/image-assets/readme-images/raspberry-pi-5-2.jpeg)

![touchscreen screenshot](/image-assets/readme-images/raspberry-pi-4-2.jpeg)

![touchscreen screenshot 2](/image-assets/readme-images/colour-body-1.jpeg)

![touchscreen screenshot 2](/image-assets/readme-images/colour-body-2.jpeg)

![touchscreen screenshot 2](/image-assets/readme-images/colour-body-3.jpeg)

>> [Back to Top](#Table-of-Contents)

---

## Website Tutorials

### Follow Youtube link for playlist fo tutorials for Weather Buddy site
https://www.youtube.com/@RobertFerguson-ur2mk/playlists?view=1&sort=dd&shelf_id=0

>> [Back to Top](#Table-of-Contents)

---