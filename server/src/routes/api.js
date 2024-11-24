const express = require("express");
const router = express.Router();
const FishClass = require("../../classes/fish");
const UserClass = require("../../classes/Users/user");

const {
	getRandomFish,
	generateZones,
} = require("../utils/FishingLogic/CatchProbability");
const FiveGetRandomReward =
	require("../utils/FishingLogic/TreasureProbability").default;

let user;
let userData;
let userIDReceived = false;

const initializeUser = async (UserID) => {
	if (UserID) {
		const userFullData = await UserClass.getUserByID(UserID);
		// console.log("User Full Data: ", userFullData);
		user = new UserClass(
			userFullData[0]["UserID"],
			userFullData[0]["Username"],
			userFullData[0]["Password"],
			userFullData[0]["Experience"],
			userFullData[0]["Coins"],
		);
		// console.log("Initialized user:", user);
		return user;
	} else {
		console.log("No userData available to initialize user");
	}
};

router.post("/receiveUserID", (req, res) => {
	console.log("Endpoint /api/receiveUserID called");
	const { UserID } = req.body;
	if (UserID === undefined) {
	} else {
		try {
			const { UserID } = req.body;
			userData = UserID;
			userIDReceived = true;
			// console.log("Received UserID:", UserID);
			// console.log("Set userData:", userData);
			initializeUser(userData);
			res.status(200).json({ message: "UserID received successfully" });
		} catch (error) {
			console.error("Error parsing JSON data:", error);
			res.status(400).json({ error: "Invalid JSON data" });
		}
	}
});

router.use(async (req, res, next) => {
	if (!userIDReceived) {
		return res.status(400).json({ error: "UserID not received yet" });
	}
	if (!user) {
		await initializeUser();
	}
	next();
});

router.use(async (req, res, next) => {
	if (!user) {
		return res.status(400).json({ error: "User not initialized" });
	}
	next();
});

router.route("/").get(function (req, res) {
	try {
		res.json({ users: ["userOne", "userTwo", "userThree"] });
	} catch (e) {
		console.log(e);
	}
});

router.get("/populate", async (req, res) => {
	// console.log(user);
	try {
		if (!user) {
			throw new Error("User is not initialized");
		}
		const users = user;
		const fishResult = await users.populateFishTank();
		const currentInventory = await users.getCurrentLayout();

		res.json({
			fish: fishResult,
			currentInventory: currentInventory,
			user: users,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/reward", (req, res) => {
	try {
		const reward = FiveGetRandomReward();

		res.json({
			reward: reward,
		});
	} catch (err) {
		console.log(err);
	}
});

router.get("/fish", (req, res) => {
	res.json({ fish: getRandomFish() });
});

router.get("/FishBarHnL", async (req, res) => {
	const results = generateZones();
	// console.log(results);
	res.json(results);
});

router.get("/getFish", async (req, res) => {
	try {
		const result = await user.getFishTankByID();
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

const findObjectWithValue = (list, key, value) => {
	return list.find((obj) => obj[key] === value);
};

router.post("/catchFish", async (req, res) => {
	const { equipment } = req.body;
	const rod = findObjectWithValue(equipment, "Type", "rod");
	console.log(equipment);
	console.log(rod);
	try {
		// make this remove durability
		const result = await FishClass.catchFish(rod);
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.post("/saveFishToDB", async (req, res) => {
	const fish = req.body; // No need to use JSON.parse
	// console.log(fish);
	let fishData = new FishClass(
		fish.type,
		fish.weight,
		fish.length,
		fish.value,
		fish.health,
	);
	try {
		const result = await fishData.addFishToTank(user.UserID);
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.post("/sellFishToDB", async (req, res) => {
	const fish = req.body;
	try {
		const result = await user.increaseCoins(fish.value);
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.get("/currentInventory", async (req, res) => {
	try {
		const result = await user.getCurrentLayout();
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.post("/updateCurrentInventory", async (req, res) => {
	const { layout } = req.body;
	try {
		await user.updateCurrentLayout(
			layout[0],
			layout[1],
			layout[2],
			layout[3],
		);
		const result = await user.getCurrentLayout();
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.post("/updateCurrentInventorySingle", async (req, res) => {
	let { item } = req.body;
	item = JSON.parse(item);
	try {
		await user.updateSingleItemInCurrentLayout(item.object);
		const result = await user.getCurrentLayout();
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.get("/getInventory", async (req, res) => {
	try {
		const result = await user.getInventory();
		res.json(result);
	} catch (err) {
		console.log(err);
	}
});

router.post("/Login", async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	try {
		console.log("fetching username and password");
		const result = await UserClass.Login(username, password);
		console.log("results: " + result);
		if (result.length > 0) {
			user = await initializeUser(result[0].UserID); // Ensure user is overwritten
			console.log("User overwritten:", user);
		}
		res.json(result);
	} catch (err) {
		console.log(err.message);
		res.status(401).json({ error: "Invalid username or password" });
	}
});

router.post("/Signup", async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	try {
		// Create a new user account
		let results = await UserClass.createAccount(username, password);
		console.log("results: " + results);
		console.log("UserID: " + results.UserID);
		let UserID = results.UserID;

		// Initialize the user with the new UserID
		if (UserID) {
			user = await initializeUser(UserID);
			console.log("User initialized:", user);

			// Set the UserID cookie
			res.cookie("UserID", UserID, {
				expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			}); // Expires in 7 days
			console.log("UserID cookie set:", UserID);
		}

		console.log("Updated User:");
		console.log(user);

		user.useCreatedAccountForUserInit();

		// Return the result of the user initialization
		res.json(user);
	} catch (err) {
		console.log(err.message);
		res.status(401).json({ error: "Could not create account!" });
	}
});

module.exports = router;
