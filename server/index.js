// require('dotenv').config();

const express = require('express');
// const path = require('path');

const FishClass = require('./classes/fish.js');
const UserClass = require('./classes/Users/user.js');
const getRandomFish = require('./FishingLogic/CatchProbability.js');
const getAllFishByUserID = require('./classes/Users/user.js');

const app = express();
const port = 5001;
const openDatabase = require('./db.js');
// const getRandomReward = require('./FishingLogic/TreasureProbability.js').default;
const FiveGetRandomReward = require("./FishingLogic/TreasureProbability").default;

// openDatabase().then(async (db) => {
//
//     openDatabase().then(async (db) => {
//         await db.exec(`
//                 CREATE TABLE IF NOT EXISTS users (
//                     id INTEGER PRIMARY KEY AUTOINCREMENT,
//                     name TEXT NOT NULL
//                 );
//             `);
//
//         const result = await db.all('SELECT * FROM users');
//         console.log(result);
//     });
// });

let fish = new FishClass("salmon", 10,5,20)
let james = new UserClass("James", "james123", 25, 1, 4, 1)


app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

app.get('/api/fish', (req, res) => {
    res.json({"fish": getRandomFish()})
});

app.get('/api/getfish', async (req, res) => {
    try {
        const result = await james.getFishTankByID();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/catchFish', async (req, res) => {
    try { // make this remove durability
        const result = await james.catchFish();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/populate', async (req, res) => {
    try {
        const user = james
        const fishResult = await james.populateFishTank();
        const rewardResult = FiveGetRandomReward();
        res.json({
            "fish": fishResult,
            "reward": rewardResult,
            "user": user,
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
        const result = await james.getCurrentLayout();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

app.get('/api/updateCurrentInventory', async (req, res) => {
    try {
        await james.updateCurrentLayout(6,3,2,1);
        const result = await james.getCurrentLayout();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});



// getRandomReward()

app.listen(port, () => {
    console.log('Server is running on port ' + port + '...');
});