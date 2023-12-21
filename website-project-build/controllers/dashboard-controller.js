import { accountsController } from "./accounts-controller.js";
import { stationStore } from "../models/station-store.js";
import { lastReadings } from "../utils/analytics.js";

export const dashboardController = {
  // Initial index page to display with view data to pass in
  async index(request, response) {
    const loggedInUser = request.user._id;
    const loggedInUserMap = request.user._id.toString(); // convert loggedInUser to string
    const stations = await stationStore.getStationsByUserId(loggedInUser);
    const allStations = await stationStore.getAllStations(); // get all stations

    // Loop through all stations to attach last reading
    for (const station of allStations) {
      const readingObject = await lastReadings(station._id);
      // Add the Analytics reading to this station
      Object.assign(station, readingObject.reading)
      // Add the icon name
      station.iconName = "a" + readingObject.reading.latestCode;
    }

    let addStation = false;
    if (stations.length == 1) {
      addStation = true;
    } else {
      addStation = false;
    }

    // Data to pass into View
    const viewData = {
      title: "Station Dashboard",
      allStations: allStations.map(station => ({ ...station, userid: station.userid.toString() })), // convert userid to string
      stations: stations,
      addStation: addStation,
      loggedInUser: loggedInUser,
      loggedInUserMap: loggedInUserMap, // add logged in user for dashboard map
    };

    // debug why lohgged in user id and station id dont match
    // console.log('loggedInUser:', loggedInUser.toString(), typeof loggedInUser.toString());
    // allStations.forEach(station => {
    //   console.log('station userid:', station.userid.toString(), typeof station.userid.toString());
    // });

    // Loop through last reading in Utils/Analytics to diplay last readings based on stations in view data
    for (const station of viewData.stations) {
      const readingObject = await lastReadings(station._id);
      // Add the Analytics reading to this viewData
      //console.log(allStations);
      Object.assign(station, readingObject.reading)
    }

    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  // Add station to the logged in user 
  async addStation(request, response) {
    const loggedInUser = request.user._id;
    const mixedCapStationname = request.body.stationName;
    const capitaliseName = mixedCapStationname.charAt(0).toUpperCase() + mixedCapStationname.slice(1);
    // Assign the data to be saved in storage
    const newStation = {
      stationName: capitaliseName,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser,
    };
    console.log(`adding station ${newStation.stationName}`);
    // Save data in station storage
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },

  // Delete station
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    // Delete Station and associated Readings
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },

};
