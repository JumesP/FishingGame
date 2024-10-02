const openDatabase = require("../../db");
const getRandomFish =
	require("../../src/utils/FishingLogic/CatchProbability").default;
const Fish = require("../fish");

class User {
	constructor(UserID, username, password, Experience, Coins) {
		this.UserID = UserID;
		this.Username = username;
		this.Password = password;
		this.Experience = Experience;
		this.Coins = Coins;
	}

	static getUserByID(userID) {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Users WHERE UserID = ?",
				userID,
			);
			console.log(result);
			return result;
		});
	}

	static Login(username, password) {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Users WHERE Username = ? AND Password = ?",
				[username, password],
			);
			console.log(result);
			return result;
		});
	}

	// setter

	static async createAccount(username, password) {
		let result;
		return openDatabase().then(async (db) => {
			// check to see if username is in use? - ADD LATER!

			// add username and password to Users table
			await db.run(
				"INSERT INTO Users (Username, Password, Experience, Coins) VALUES (?, ?, 0, 0)",
				[username, password],
			);
			result = await db.all(
				"SELECT * FROM Users WHERE Username = ?",
				username,
			);
			console.log("resulst: ", result);

			// insert Account into Users table
			const UserID = result[0].UserID;
			console.log("UserID: ", UserID);

			return result[0];
		});
	}

	static async getUserByUsername(username) {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Users WHERE Username = ?",
				username,
			);
			console.log(result);
			return result;
		});
	}

	// getter
	getUserID() {
		console.log(this.UserID);
		return this.UserID;
	}

	getUsername() {
		console.log(this.Username);
		return this.Username;
	}

	// methods
	getInfo() {
		return {
			UserID: this.UserID,
			Username: this.Username,
			Password: this.Password,
			Experience: this.Experience,
			Coins: this.Coins,
		};
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
				"INSERT INTO Fish (Type, Weight, Length, Value, Health, UserID) VALUES (?, ?, ?, ?, ?, ?)",
				[type, weight, length, value, health, this.UserID],
			);
			const result = await db.all(
				"SELECT * FROM Fish WHERE UserID = ?",
				this.UserID,
			);
			console.log(result);
			return result;
		});
	}

	// get all users fish
	getFishTankByID() {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Fish WHERE UserID = ?",
				this.UserID,
			);
			console.log(result);
			return result;
		});
	}

	// get types of fish
	populateFishTank() {
		return openDatabase().then(async (db) => {
			const fishList = await db.all(
				"SELECT Type FROM Fish WHERE UserID = ?",
				this.UserID,
			);
			const result = fishList.map((fish) => fish.Type);
			console.log(result);
			return result;
		});
	}

	addItemToInventory(item) {
		return openDatabase().then(async (db) => {
			try {
				const result = await db.run(
					"INSERT INTO Inventory (UserID, ItemName, Enchants, Rarity, Durability, Type) VALUES (?, ?, ?, ?, ?, ?)",
					[
						this.UserID,
						item.ItemName,
						item.Enchants,
						item.Rarity,
						item.Durability,
						item.Type,
					],
				);
				const itemID = result.lastID;
				console.log(`Inserted item with ID: ${itemID}`);
				return itemID;
			} catch (error) {
				console.error("Error adding item to inventory:", error);
				throw error;
			} finally {
				await db.close();
			}
		});
	}

	getInventory() {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Inventory WHERE UserID = ?",
				this.UserID,
			);
			console.log(result);
			return result;
		});
	}

	getCurrentLayout() {
		return openDatabase().then(async (db) => {
			let query;
			let result;
			query = "select * from CurrentInventory where UserID = ?;";
			result = await db.all(query, this.UserID);
			console.log(result);

			const itemIDs = [
				result[0].CurrentRodsItemID,
				result[0].CurrentBaitsItemID,
				result[0].CurrentPetsItemID,
				result[0].CurrentBoatsItemID,
			];

			query = "select * from Inventory where ItemID in (?, ?, ?, ?);";
			result = await db.all(query, itemIDs);

			console.log(result);

			return result;

			// this will return rod object, bait object, pet object and boat object in a list
		});
	}

	// server/classes/Users/user.js
	async giveUserDefaultItems() {
		const defaultItems = {
			rod: {
				ItemName: "Hands",
				Enchants: null,
				Rarity: "Common",
				Durability: null,
				Type: "rod",
			},
			bait: {
				ItemName: "Standard Bait",
				Enchants: null,
				Rarity: "Common",
				Durability: null,
				Type: "bait",
			},
			pet: {
				ItemName: "Standard Pet",
				Enchants: null,
				Rarity: "Common",
				Durability: null,
				Type: "pet",
			},
			boat: {
				ItemName: "Standard Boat",
				Enchants: null,
				Rarity: "Common",
				Durability: null,
				Type: "boat",
			},
		};

		let itemIds = [];

		// add each defaultItem to the users inventory

		for (const key in defaultItems) {
			if (defaultItems.hasOwnProperty(key)) {
				const item = defaultItems[key];
				itemIds.push(await this.addItemToInventory(item));
			}
		}

		console.log(itemIds);

		console.log(this.getUserID());
		console.log(this.getInfo());

		await this.createCurrentLayout();
		const results = this.updateCurrentLayout(
			itemIds[0],
			itemIds[1],
			itemIds[2],
			itemIds[3],
		);
		console.log(
			"if true: this items have been added to the users current loadout:" +
				results,
		);
		return results;
	}

	updateCurrentLayout(rodItemID, baitItemID, petItemID, boatItemID) {
		return openDatabase().then(async (db) => {
			try {
				const query = `
                    UPDATE CurrentInventory
                    SET CurrentRodsItemID = ?, CurrentBaitsItemID = ?, CurrentPetsItemID = ?, CurrentBoatsItemID = ?
                    WHERE UserID = ?;
                `;
				await db.run(
					query,
					rodItemID,
					baitItemID,
					petItemID,
					boatItemID,
					this.UserID,
				);
				return true;
			} catch (error) {
				console.error("Error updating current layout:", error);
				throw error;
			} finally {
				await db.close();
			}
		});
	}

	// static gets

	updateSingleItemInCurrentLayout(item) {
		const itemID = item.ItemID;
		const itemType = item.Type;

		console.log("itemID: ", itemID, "itemType: ", itemType);

		return openDatabase().then(async (db) => {
			try {
				let query;
				switch (itemType) {
					case "rod":
						query = `
                            UPDATE CurrentInventory
                            SET CurrentRodsItemID = ?
                            WHERE UserID = ?;
                        `;
						break;
					case "bait":
						query = `
                            UPDATE CurrentInventory
                            SET CurrentBaitsItemID = ?
                            WHERE UserID = ?;
                        `;
						break;
					case "pet":
						query = `
                            UPDATE CurrentInventory
                            SET CurrentPetsItemID = ?
                            WHERE UserID = ?;
                        `;
						break;
					case "boat":
						query = `
                            UPDATE CurrentInventory
                            SET CurrentBoatsItemID = ?
                            WHERE UserID = ?;
                        `;
						break;
					default:
						throw new Error("Invalid item type");
				}
				await db.run(query, itemID, this.UserID);
				return true;
			} catch (error) {
				console.error(
					"Error updating single item in current layout:",
					error,
				);
				throw error;
			} finally {
				await db.close();
			}
		});
	}

	createCurrentLayout() {
		// for new users
		return openDatabase().then(async (db) => {
			try {
				const query = `
                    INSERT INTO CurrentInventory (UserID, CurrentRodsItemID, CurrentBaitsItemID, CurrentPetsItemID, CurrentBoatsItemID)
                    VALUES (?, ?, ?, ?, ?);
                `;
				await db.run(query, this.UserID, null, null, null, null);
				return true;
			} catch (error) {
				console.error("Error creating current layout:", error);
				throw error;
			} finally {
				await db.close();
			}
		});
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

	increaseExperience(amount) {
		return openDatabase().then(async (db) => {
			try {
				const query = `
                    UPDATE Users
                    SET Experience = Experience + ?
                    WHERE UserID = ?;
                `;
				await db.run(query, amount, this.UserID);
				return true;
			} catch (error) {
				console.error("Error updating experience:", error);
				throw error;
			} finally {
				await db.close();
			}
		});
	}

	useCreatedAccountForUserInit() {
		// add default items to users account
		const results = this.giveUserDefaultItems();

		// assign default items to current layout

		return results;
	}

	updateCurrentLayoutByUserID(rodItemID, baitItemID, petItemID, boatItemID) {
		return openDatabase().then(async (db) => {
			try {
				const query = `
                    UPDATE CurrentInventory
                    SET CurrentRodsItemID = ?, CurrentBaitsItemID = ?, CurrentPetsItemID = ?, CurrentBoatsItemID = ?
                    WHERE UserID = ?;
                `;
				await db.run(
					query,
					rodItemID,
					baitItemID,
					petItemID,
					boatItemID,
					this.UserID,
				);
				return true;
			} catch (error) {
				console.error("Error updating current layout:", error);
				throw error;
			} finally {
				await db.close();
			}
		});
	}
}

module.exports = User;
