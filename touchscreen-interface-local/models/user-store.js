import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { stationStore } from "../models/station-store.js";
import { MongoClient, ObjectId } from 'mongodb';


const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

export const userStore = {
  async getAllUsers() {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    return await collection.find().toArray();
  },

  async addUser(user) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    user._id = new ObjectId();
    await collection.insertOne(user);
    return user;
  },

  async getUserById(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    return await collection.findOne({ _id: new ObjectId(id) });
  },

  async updateUser(userId, updatedUser) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    await collection.updateOne({ _id: new ObjectId(userId) }, { $set: updatedUser });
    return await collection.findOne({ _id: new ObjectId(userId) });
  },

  async getUserByEmail(email) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    return await collection.findOne({ email: email });
  },

  async deleteUserById(id) {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    await collection.deleteOne({ _id: new ObjectId(id) });
  },

  async property() {
    await client.connect();
    const collection = client.db('WeatherBuddy').collection('users');
    await collection.deleteMany({});
  }
};