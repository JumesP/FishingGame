const openDatabase = require("../../db");
const getRandomFish = require("../../FishingLogic/CatchProbability")
const Fish = require("../fish");

class User {
  constructor(name, username, age, level, tankID) {
    this.name = name;
    this.username = username;
    this.age = age;
    this.level = level;
    this.tankID = tankID;
  }

  // getter
  getName() {
    console.log(this.name);
    return this.name;
  }

  getUsername() {
    console.log(this.username);
    return this.username;
  }

  getTankID() {
    console.log(this.tankID);
    return this.tankID;
  }

  // setter

  // methods
  getInfo() {
    return { name: this.name, age: this.age };
  }

  catchFish() {
    // pick a fish
    const type = getRandomFish();
    const weight = Math.floor(Math.random() * 10) + 1;
    const value = Math.floor(Math.random() * 100) + 1;
    const length = Math.floor(Math.random() * 10) + 1;
    const health = Math.floor(Math.random() * 100) + 1;

    const fish = new Fish(type, health, length, value);

    // add fish to database
    return openDatabase().then(async (db) => {
      await db.run(
        "INSERT INTO Fish (Type, Weight, Length, Value, Health, TankID) VALUES (?, ?, ?, ?, ?, ?)",
        [type, weight, length, value, health, this.tankID]
      );
      const result = await db.all("SELECT * FROM Fish WHERE TankID = ?", this.tankID);
      console.log(result);
      return result;
    });
  }

  getFishTankByID() {
    return openDatabase().then(async (db) => {
      const result = await db.all("SELECT * FROM Fish WHERE TankID = ?", this.tankID);
      console.log(result);
      return result;
    });
  }

  populateFishTank() {
    return openDatabase().then(async (db) => {
      const fishList = await db.all("SELECT Type FROM Fish WHERE TankID = ?", this.tankID);
      const result = fishList.map((fish) => fish.Type);
      console.log(result);
      return result;
    });
  }

  // static

  static getTankIDbyUserID(userID) {
    return openDatabase().then(async (db) => {
      const result = await db.all("SELECT TankID FROM Users WHERE ID = ?", userID);
      console.log(result);
      return result;
    });
  }
}

module.exports = User;