const openDatabase = require("../../db");
const getRandomFish = require("../../FishingLogic/CatchProbability")
const Fish = require("../fish");

class User {
  constructor(name, username, age, level, tankID, inventoryID) {
    this.name = name;
    this.username = username;
    this.age = age;
    this.level = level;
    this.tankID = tankID;
    this.InventoryID = inventoryID
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

  // get all users fish
  getFishTankByID() {
    return openDatabase().then(async (db) => {
      const result = await db.all("SELECT * FROM Fish WHERE TankID = ?", this.tankID);
      console.log(result);
      return result;
    });
  }

  // get types of fish
  populateFishTank() {
    return openDatabase().then(async (db) => {
      const fishList = await db.all("SELECT Type FROM Fish WHERE TankID = ?", this.tankID);
      const result = fishList.map((fish) => fish.Type);
      console.log(result);
      return result;
    });
  }

  // get users currentLayout
  getCurrentLayout() {
    return openDatabase().then(async (db) => {
      // const result = await db.all("SELECT Layout FROM Users WHERE ID = ?", this.tankID);

      const query =
          `  
          select I.InventoryID, ItemID, ItemName, Enchants, Rarity, Durability, Type
          from CurrentInventory CI, Inventory I
          where I.InventoryID = CI.InventoryID and I.InventoryID = ?;
          `

      const result = await db.all(query, this.InventoryID);
      console.log(result);
      return result;


      // this will return rod object, bait object, pet object and boat object in a list

    });
  }

  // get users Inventory

  // updates users current layout
    updateCurrentLayout(rodItemID, baitItemID, petItemID, boatItemID) {
      return openDatabase().then(async (db) => {
        try {
          const query = `
            UPDATE CurrentInventory
            SET CurrentRodsItemID = ?, CurrentBaitsItemID = ?, CurrentPetsItemID = ?, CurrentBoatsItemID = ?
            WHERE InventoryID = ?;
          `;
          await db.run(query, rodItemID, baitItemID, petItemID, boatItemID, this.InventoryID);
          return true;
        } catch (error) {
          console.error("Error updating current layout:", error);
          throw error;
        } finally {
          await db.close();
        }
      }
      );
  }

  // static

  // get TankID by UserID
  static getTankIDbyUserID(userID) {
    return openDatabase().then(async (db) => {
      const result = await db.all("SELECT TankID FROM Users WHERE ID = ?", userID);
      console.log(result);
      return result;
    });
  }
}

module.exports = User;