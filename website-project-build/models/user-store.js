import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { stationStore } from "../models/station-store.js";

const db = initStore("users");

export const userStore = {
  async getAllUsers() {
    await db.read();
    return db.data.users;
  },

  async addUser(user) {
    await db.read();
    user._id = v4();
    db.data.users.push(user);
    await db.write();
    return user;
  },

  async getUserById(id) {
    await db.read();
    return db.data.users.find((user) => user._id === id);
  },

  async updateUser(userId, updatedUser)  {
    const user = await this.getUserById(userId);
    user.firstName = updatedUser.firstName;
    user.lastName = updatedUser.lastName;
    user.password = updatedUser.password;
    console.log(`${JSON.stringify(updatedUser)}`);
    await db.write();
  },

  async getUserByEmail(email) {
    await db.read();
    return db.data.users.find((user) => user.email === email);
  },

  async deleteUserById(id) {
    await db.read();
    const index = db.data.users.findIndex((user) => user._id === id);
    db.data.users.splice(index, 1);
    // pass in user id to delete stations attached to user
    await stationStore.deleteStationsById(id);
    await db.write();
  },

  async deleteAll() {
    db.data.users = [];
    await db.write();
  },
};