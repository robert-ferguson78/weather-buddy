import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { lastReadings } from "../utils/analytics.js";
import { openWeatherMap } from "../utils/openweathermap.js";
//import { latestReadings } from '../utils/analytics.js';

export const stationController = {
  // Initial index page to display with view data to pass in
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    let stationReadings = await lastReadings(request.params.id);
    const trendReadings = await openWeatherMap.getDailyReadingsData(
      station.latitude,
      station.longitude,
      process.env.OPENWEATHERMAP_API_KEY
    );
    // Data to pass into View
    const viewData = {
      title: station.stationName,
      latitude: station.latitude,
      longitude: station.longitude,
      station: station,
      trendReadings: trendReadings,
    };
    Object.assign(viewData, stationReadings.reading)
    console.log("station rendering");
    response.render("station-view", viewData);
  },

  // Add a reading to station
  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);

    // Added date with if statements so dates have 2 digitis if single nunber is returned
    const date = new Date();
    let yyyy = date.getFullYear();
    let mn = date.getMonth() + 1;
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    if (mn < 10) mn = "0" + mn;
    if (dd < 10) dd = "0" + dd;
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;
    let dateTime = yyyy + "-" + mn + "-" + dd + " " + hh + ":" + mm + ":" + ss;

    // New reading data to save
    const newReading = {
      timeStamp: String(dateTime),
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windDirection: Number(request.body.windDirection),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };

    // Save data to storage and redirect back to station
    await readingStore.addReading(station._id, newReading);
    console.log(`add reading ${JSON.stringify(newReading)}`);
    response.redirect("/station/" + station._id);
  },

  // Delete reading by ID and redirect to station by ID
  async deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    await readingStore.deleteReading(readingId);
    console.log(`delete reading ${readingId}`);
    response.redirect("/station/" + stationId);
  },

  // Generate a reading using OpenWeatherMap data and associate to Station ID
  async generateReading(request, response) {
    const stationId = request.params.id;
    const station = await stationStore.getStationById(stationId);

    const newReading = await openWeatherMap.generateReading(
      station.latitude,
      station.longitude,
      // Hide API key in .env
      process.env.OPENWEATHERMAP_API_KEY
    );

    // Attach reading and redirect back to Station ID
    await readingStore.addReading(station._id, newReading);
    console.log(`add auto reading ${JSON.stringify(newReading)}`);
    response.redirect("/station/" + station._id);
  },
};
