const openDatabase = require("../../db");

class Plants {
	constructor(PlantID, PlotID, Location) {
		this.PlantID = PlantID;
		this.PlotID = PlotID;
		this.Location = Location;
	}

	// static
	static getAllPlantByUserID(UserID) {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Plants WHERE UserID = ?",
				UserID,
			);
			console.log(result);
			return result;
		});
	}

	static getPlantBySeedID(SeedID) {
		return openDatabase().then(async (db) => {
			const result = await db.all(
				"SELECT * FROM Plants WHERE SeedID = ?",
				SeedID,
			);
			console.log(result);
			return result;
		});
	}

	getPlant() {}

	plantPlant() {
		```
		add plant to Plants database (with timestamp)
		add plant location to PlantLocation database
		remove seeds from user inventory
		```;
	}

	deletePlant() {
		```
		delete plant from Plants database
		delete plant location from PlantLocation database
		```;
	}

	harvestPlant() {
		```
		add plant to user inventory
		delete plant from Plants database
		delete plant location from PlantLocation database
		```;
	}
}
