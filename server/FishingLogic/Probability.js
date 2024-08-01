// import fish_chances from '../gameconfig.json';

const fish_chances = {
    "cod": 60,
    "salmon": 20,
    "goldfish" : 10,
    "trash": 6,
    "treasure": 2,
    "jellyfish": 1.89,
    "shark": 0.1,
    "whale": 0.01
}


console.log()

function getRandomFish() {
    let randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    console.log(randomNum);
    for (const fish in fish_chances) {
        randomNum -= fish_chances[fish];
        if (randomNum <= 0) {
            console.log(fish);
            return fish;
        }
    }
}

// export default getRandomFish;
module.exports = getRandomFish;