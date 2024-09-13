const openDatabase = require("../../db");
const getRandomFish = require("../../FishingLogic/CatchProbability").default;
const Fish = require("../fish");

class User {
  constructor(UserID, username, tankID, inventoryID, Experience, Coins) {
    this.UserID = UserID;
    this.username = username;
    // this.level = level;
    this.tankID = tankID;
    this.InventoryID = inventoryID
    this.Experience = Experience;
    this.Coins = Coins;
  }

  // getter
  getUserID() {
    console.log(this.UserID);
    return this.UserID;
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
    return { UserID: this.UserID, tankID: this.tankID, inventoryID: this.InventoryID };
  }

  catchFish() {
    // pick a fish
    const type = getRandomFish("Standard Rod");
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

  increaseCoins(amount) {
    return openDatabase().then(async (db) => {
      try {
        const query = `
            UPDATE Users
            SET Coins = Coins + ?
            WHERE UserID = ?;
          `;
        await db.run(query, amount, this.UserID);
        return true;
      } catch (error) {
        console.error("Error updating coins:", error);
        throw error;
      } finally {
        await db.close();
      }
    });
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

  static getInventoryIDbyUserID(userID) {
    return openDatabase().then(async (db) => {
      const result = await db.all("SELECT InventoryID FROM Users WHERE ID = ?", userID);
      console.log(result);
      return result;
    });
  }

  static getUserByID(userID) {
    return openDatabase().then(async (db) => {
      const result = await db.all("SELECT * FROM Users WHERE UserID = ?", userID);
      console.log(result);
      return result;
    });
  }
}

module.exports = User;