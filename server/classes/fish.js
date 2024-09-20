const openDatabase = require("../db");
const getRandomFish = require("../src/utils/FishingLogic/CatchProbability").default;

class Fish {
	constructor(type, weight, length, value, health) {
		this.type = type;
		this.weight = weight;
		this.length = length;
		this.value = value;
		this.health = health;
	}
	// getter
	health() {
		console.log(this.health)
	}

	// setter

	// methods
	catch() {
		console.log("Caught a " + this.type)
		return "Caught a " + this.type
	}

	getInfo() {
		return {type: this.type, weight: this.weight, length: this.length, value: this.value, health: this.health}
	}

	addFishToTank(UserID) {
		return openDatabase().then(async (db) => {
			await db.run(
				'INSERT INTO Fish (Type, Weight, Length, Value, Health, UserID) VALUES (?, ?, ?, ?, ?, ?)',
				[this.type, this.weight, this.length, this.value, this.health, UserID]
			);
			const result = await db.all('SELECT * FROM Fish WHERE UserID = ?', UserID);
			console.log(result);
			return result;
		});
	}


	// static getAllFishByUserID(userID) {
	//
	// 	getTankIDbyUserID(userID).then((tankID) => {
	// 		return openDatabase().then(async (db) => {
	// 			const result = await db.all('SELECT * FROM Fish WHERE UserID = ?', userID);
	// 			console.log(result);
	// 			return result;
	// 		});
	// 	});
	// }

	// static
	static catchFish(equipment) {
		// pick a fish
		const type = getRandomFish("Standard Rod");
		const weight = Math.floor(Math.random() * 10) + 1;
		const value = Math.floor(Math.random() * 100) + 1;
		const length = Math.floor(Math.random() * 10) + 1;
		const health = Math.floor(Math.random() * 100) + 1;

		return new Fish(type, weight, length, value, health);
	}

	static getAllFishByUserID(UserID) {
		return openDatabase().then(async (db) => {
			const result = await db.all('SELECT * FROM Fish WHERE UserID = ?', UserID);
			console.log(result);
			return result;
		});
	}
	static getFishValueByID(fishID) {
		return openDatabase().then(async (db) => {
			const result = await db.all("SELECT Value FROM Fish WHERE FishID = ?", fishID);
			console.log(result);
			return result;
		});
	}

};


// const salmon = new Fish(10,10,10)
//
// salmon.catch()
//
// console.log(salmon.health)
// salmon.health

// export default Fish;
module.exports = Fish