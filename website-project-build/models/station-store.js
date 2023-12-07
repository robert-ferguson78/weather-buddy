import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { readingStore } from "./reading-store.js";
import { MongoClient, ObjectId } from 'mongodb';


const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

export const stationStore = {
  async getAllStations() {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    return await collection.find().toArray();
  },

  async addStation(station) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    station._id = new ObjectId();
    await collection.insertOne(station);
    return station;
  },

  async getStationsByUserId(userid) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    const stations = await collection.find({ userid: userid }).toArray();

    // Fetch readings for each station
    for (let station of stations) {
      station.readings = await readingStore.getReadingsByStationId(station._id.toString());
    }  
    return stations;
  },

  async getStationById(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    return await collection.findOne({ _id: new ObjectId(id) });
    return list;
  },

  async deleteStationById(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    await collection.deleteOne({ _id: new ObjectId(id) });
  },

  async deleteStationsById(stationId) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    await collection.deleteMany({ userid: stationId._id });
  },

  async deleteAllstations() {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('stations');
    await collection.deleteMany({});
  }
};
