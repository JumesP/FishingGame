const getRandomFish = require("../FishingLogic/CatchProbability");
const FishClass = require("../classes/fish");
const UserClass = require("../classes/Users/user");
const AccountClass = require("../classes/Users/accounts");
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

app.post('/api/saveFishToDB', async (req, res) => {
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

app.post('/api/sellFishToDB', async (req, res) => {
    const fish = req.body;

    try {
        const result = await user.increaseCoins(fish.value);
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