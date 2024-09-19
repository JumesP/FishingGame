const express = require("express");
const router = express.Router();
const getRandomFish = require("../FishingLogic/CatchProbability");
const FishClass = require("../classes/fish");
const UserClass = require("../classes/Users/user");
const AccountClass = require("../classes/Users/accounts");

let user;
let userData;
let userIDReceived = false;

const initializeUser = async () => {
    if (userData) {
        const userFullData = await UserClass.getUserByID(userData);
        console.log("User Full Data: ", userFullData);
        user = new UserClass(userFullData[0]["UserID"], userFullData[0]["Username"], userFullData[0]["TankID"], userFullData[0]["InventoryID"], userFullData[0]["Experience"], userFullData[0]["Coins"]);
        console.log("Initialized user:", user);
    } else {
        console.log('No userData available to initialize user');
    }
};

router.post('/receiveUserID', (req, res) => {
    console.log("Endpoint /api/receiveUserID called");
    try {
        const { UserID } = req.body;
        userData = UserID;
        userIDReceived = true;
        console.log('Received UserID:', UserID);
        console.log('Set userData:', userData);
        initializeUser();
        res.status(200).json({ message: 'UserID received successfully' });
    } catch (error) {
        console.error('Error parsing JSON data:', error);
        res.status(400).json({ error: 'Invalid JSON data' });
    }
});

router.use(async (req, res, next) => {
    if (!userIDReceived) {
        return res.status(400).json({ error: 'UserID not received yet' });
    }
    if (!user) {
        await initializeUser();
    }
    next();
});

router.route("/")
    .get(function (req, res) {
        try {
            res.json({"users": ["userOne", "userTwo", "userThree"]});
        } catch (e) {
            console.log(e);
        }
    });

router.get('/populate', async (req, res) => {
    console.log(user);
    try {
        if (!user) {
            throw new Error('User is not initialized');
        }
        const users = user;
        const fishResult = await users.populateFishTank();
        const currentInventory = await users.getCurrentLayout();

        res.json({
            "fish": fishResult,
            "currentInventory": currentInventory,
            "user": users,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/fish', (req, res) => {
    res.json({"fish": getRandomFish()});
});

router.get('/getfish', async (req, res) => {
    try {
        const result = await user.getFishTankByID();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.post('/catchFish', async (req, res) => {
    const { equipment } = req.body;
    console.log(equipment);
    try { // make this remove durability
        const result = await FishClass.catchFish("Standard Rod");
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.post('/saveFishToDB', async (req, res) => {
    const fish = req.body; // No need to use JSON.parse
    console.log(fish);
    let fishData = new FishClass(fish.type, fish.weight, fish.length, fish.value, fish.health);
    try {
        const result = await fishData.addFishToTank(user.tankID);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.post('/sellFishToDB', async (req, res) => {
    const fish = req.body;
    try {
        const result = await user.increaseCoins(fish.value);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.get('/currentInventory', async (req, res) => {
    try {
        const result = await user.getCurrentLayout();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});
router.get('/updateCurrentInventory', async (req, res) => {
    try {
        await user.updateCurrentLayout(6,3,2,1);
        const result = await user.getCurrentLayout();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});
router.post('/Login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        console.log("fetching username and password");
        const result = await AccountClass.Login(username, password);
        console.log("results: "+ result);
        res.json(result);
    } catch (err) {
        console.log(err.message);
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

module.exports = router;