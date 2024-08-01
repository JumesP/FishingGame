class Fish {
	// Health: 10,
	// value: 10,
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

};


// const salmon = new Fish(10,10,10)
//
// salmon.catch()
//
// console.log(salmon.health)
// salmon.health

// export default Fish;
module.exports = Fish