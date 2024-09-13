// require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path');

const FishClass = require('./classes/fish.js');
const UserClass = require('./classes/Users/user.js');
const AccountClass = require('./classes/Users/accounts.js');
const getRandomFish = require('./FishingLogic/CatchProbability.js');
const FiveGetRandomReward = require("./FishingLogic/TreasureProbability").default;
const openDatabase = require('./db.js');

const app = express();
const port = 5001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());




// let fish = new FishClass("salmon", 10,5,20)
// let james = new UserClass("James", "james123", 1, 1)

// let userData = UserClass.getUserByID(1)
// let user = new UserClass(userData)

// console.log(james)
// console.log("User: " + user)
// console.log("UserData: " + userData)


let user;
let userData;
let userIDReceived = false;

app.post('/api/receiveUserID', (req, res) => {
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

const initializeUser = async () => {
    if (userData) {
        const userFullData = await UserClass.getUserByID(userData);
        console.log("User Full Data: ", userFullData);
        user = new UserClass(userFullData[0]["UserID"], userFullData[0]["Username"], userFullData[0]["TankID"], userFullData[0]["InventoryID"]);
        console.log("Initialized user:", user);
    } else {
        console.log('No userData available to initialize user');
    }
};

app.use(async (req, res, next) => {
    if (!userIDReceived) {
        return res.status(400).json({ error: 'UserID not received yet' });
    }
    if (!user) {
        await initializeUser();
    }
    next();
});


// this needs to fetch data from the login, and then pass it to the user class

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

app.get('/api/fish', (req, res) => {
    res.json({"fish": getRandomFish()})
});

app.get('/api/getfish', async (req, res) => {
    try {
        const result = await user.getFishTankByID();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.post('/api/catchFish', async (req, res) => {
    const { equipment } = req.body;
    console.log(equipment);
    try { // make this remove durability
        const result = await FishClass.catchFish("Standard Rod");
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/catchFishNoDB', async (req, res) => {
    try {
        const result = getRandomFish("Standard Rod");
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/populate', async (req, res) => {
    console.log(user)
    try {
        const users = user;
        const fishResult = await users.populateFishTank();
        // const rewardResult = FiveGetRandomReward();
        res.json({
            "fish": fishResult,
            // "reward": rewardResult,
            "user": users,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//create an API that lists a users inventory

//create an API to assign select items to current inventory

// create an API to fetch current inventory
app.get('/api/currentInventory', async (req, res) => {
    try {
        const result = await user.getCurrentLayout();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/updateCurrentInventory', async (req, res) => {
    try {
        await user.updateCurrentLayout(6,3,2,1);
        const result = await user.getCurrentLayout();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.post('/api/Login', async (req, res) => {
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

// getRandomReward()

app.listen(port, () => {
    console.log('Server is running on port ' + port + '...');
});