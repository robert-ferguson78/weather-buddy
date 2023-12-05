import { accountsController } from "./accounts-controller.js";
import { stationStore } from "../models/station-store.js";
import { lastReadings } from "../utils/analytics.js";

export const dashboardController = {
  // Initial index page to display with view data to pass in
  async index(request, response) {
    const loggedInUser = request.user._id;

    // Data to pass into View
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationsByUserId(loggedInUser),
    };

    // Loop through last reading in Utils/Analytics to diplay last readings based on stations in view data
    for (const station of viewData.stations) {
      const readingObject = await lastReadings(station._id);
      // Add the Analytics reading to this viewData
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
