const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port + '...');
});