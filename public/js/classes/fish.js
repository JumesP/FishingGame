class Fish {
	// Health: 10,
	// value: 10,
	constructor(health, length, value) {
		this.type = "salmon";
		this.health = health;
		this.length = length;
		this.value = value;
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
		return {type: this.type, health: this.health, length: this.length, value: this.value}
	}
};


// const salmon = new Fish(10,10,10)
//
// salmon.catch()
//
// console.log(salmon.health)
// salmon.health

export default Fish;