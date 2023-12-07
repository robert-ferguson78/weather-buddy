import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

export const readingStore = {
  // Get all readings
  async getAllReadings() {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('readings');
    return await collection.find().toArray();
  },

  async addReading(stationId, reading) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('readings');
    reading._id = new ObjectId();
    reading.stationid = stationId;
    await collection.insertOne(reading);
    return reading;
  },

  async getReadingsByStationId(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('readings');
    return await collection.find({ stationid: id }).toArray();
  },

  async getReadingById(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('readings');
    return await collection.findOne({ _id: new ObjectId(id) });
  },

  async deleteReading(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('readings');
    await collection.deleteOne({ _id: new ObjectId(id) });
  },

  async updateReading(reading, updatedReading) {
    reading.code = updatedReading.code;
    reading.temp = updatedReading.temp;
    reading.windSpeed = updatedReading.windSpeed;
    reading.windDirection = updatedReading.windDirection;
    reading.pressure = updatedReading.pressure;
    await db.write();
  },
};
