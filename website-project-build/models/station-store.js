import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { readingStore } from "./reading-store.js";

const db = initStore("stations");

export const stationStore = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },

  async addStation(station) {
    await db.read();
    station._id = v4();
    db.data.stations.push(station);
    await db.write();
    return station;
  },

  async getStationsByUserId(userid) {
    await db.read();
    let stationsSort = db.data.stations.filter((station) => station.userid === userid);
    // sort stations alphbetically
    stationsSort.sort((a, b) => (a.stationName > b.stationName ? 1 : -1));
    return stationsSort;
  },

  async getStationById(id) {
    await db.read();
    const list = db.data.stations.find((station) => station._id === id);
    list.readings = await readingStore.getReadingsBystationId(list._id);
    return list;
  },

  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
     // If station exists, remove it and delete related readings.
    if(index !== -1) {
    db.data.stations.splice(index, 1);
    await readingStore.deleteStationReadings(id);
    await db.write();
    }
  },

  async deleteStationsById(stationId) {
    await db.read();
    let stationRemoveList = db.data.stations.filter((station) => station.userid === stationId._id);
    // Create array from the Station to remove list variable
    stationRemoveList = Array.from(stationRemoveList);
    let stationIdsToRemove = [];
    // For loop to crate an array of id's to remove
    for (let i=0; i < stationRemoveList.length; i++ ) {
      stationIdsToRemove[i] = stationRemoveList[i]._id;
    };
    // pass in array of station id's to reomve connected readings
    await readingStore.deleteStationReadings(stationIdsToRemove);
    db.data.stations = db.data.stations.filter((station) => station.userid !== stationId._id);
    await db.write();
  },

  async deleteAllstations() {
    db.data.stations = [];
    await db.write();
  }
};
