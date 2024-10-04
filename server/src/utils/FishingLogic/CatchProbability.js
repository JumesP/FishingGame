"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getRandomFish;
exports.generateHigherandLowerNums = generateHigherandLowerNums;
var Standard_Rod = {
    cod: 60,
    salmon: 20,
    goldfish: 10,
    trash: 6,
    treasure: 2,
    jellyfish: 1.89,
    shark: 0.1,
    whale: 0.01,
};
var Premium_Rod = {
    cod: 40,
    salmon: 30,
    goldfish: 15,
    trash: 6,
    treasure: 4,
    jellyfish: 3,
    shark: 1,
    whale: 1,
};
var Super_Rod = {
    cod: 30,
    salmon: 30,
    goldfish: 20,
    trash: 10,
    treasure: 5,
    jellyfish: 3,
    shark: 1,
    whale: 1,
};
var Ultra_Rod = {
    cod: 20,
    salmon: 30,
    goldfish: 20,
    trash: 10,
    treasure: 10,
    jellyfish: 5,
    shark: 3,
    whale: 2,
};
var Ultimate_Rod = {
    cod: 10,
    salmon: 20,
    goldfish: 20,
    trash: 10,
    treasure: 20,
    jellyfish: 10,
    shark: 5,
    whale: 5,
};
function getRandomFish(rodName) {
    var randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    var rod;
    switch (rodName) {
        case "Standard Rod":
            rod = Standard_Rod;
            break;
        case "Premium Rod":
            rod = Premium_Rod;
            break;
        case "Super Rod":
            rod = Super_Rod;
            break;
        case "Ultra Rod":
            rod = Ultra_Rod;
            break;
        case "Ultimate Rod":
            rod = Ultimate_Rod;
            break;
        default:
            rod = Standard_Rod;
            break;
    }
    console.log(randomNum);
    for (var fish in rod) {
        if (rod.hasOwnProperty(fish)) {
            randomNum -= rod[fish];
            if (randomNum <= 0) {
                console.log(fish);
                return fish;
            }
        }
    }
    return "none";
}
function generateHigherandLowerNums() {
    var difference = 7.5; // maybe between 10 and 20
    var randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    var lowerNum = Math.round(Math.max(0, randomNum - difference)); // Ensure lowerNum is at least 0 and round it
    var higherNum = Math.round(Math.min(100, randomNum + difference)); // Ensure higherNum is at most 100 and round it
    console.log(lowerNum, randomNum, higherNum);
    return { lowerNum: lowerNum, randomNum: randomNum, higherNum: higherNum };
}
