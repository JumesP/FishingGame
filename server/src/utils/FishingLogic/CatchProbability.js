"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getRandomFish;
exports.generateZones = generateZones;
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
    // console.log(lowerNum, randomNum, higherNum);
    return { lowerNum: lowerNum, randomNum: randomNum, higherNum: higherNum };
}
function generateLegendaryZone() {
    var difference = 1; // maybe between 10 and 20
    var randomLegNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    var lowerLegNum = Math.round(Math.max(0, randomLegNum - difference)); // Ensure lowerNum is at least 0 and round it
    var higherLegNum = Math.round(Math.min(100, randomLegNum + difference)); // Ensure higherNum is at most 100 and round it
    // console.log(lowerLegNum, randomLegNum, higherLegNum);
    return { lowerLegNum: lowerLegNum, randomLegNum: randomLegNum, higherLegNum: higherLegNum };
}
function generateZones() {
    // This will generate and return both zones
    // If legendary zone overlaps the higher and lower zone, it will be rerolled
    // console.log("\n\n\nGenerating Zones");
    var _a;
    var _b = generateHigherandLowerNums(), lowerNum = _b.lowerNum, randomNum = _b.randomNum, higherNum = _b.higherNum;
    var _c = generateLegendaryZone(), lowerLegNum = _c.lowerLegNum, randomLegNum = _c.randomLegNum, higherLegNum = _c.higherLegNum;
    while (lowerLegNum < higherNum && higherLegNum > lowerNum) {
        // console.log(lowerLegNum, randomLegNum, higherLegNum);
        (_a = generateLegendaryZone(), lowerLegNum = _a.lowerLegNum, randomLegNum = _a.randomLegNum, higherLegNum = _a.higherLegNum);
        // console.log("Rerolling Legendary Zone");
    }
    // console.log("\n\nFinal Numbers: ");
    // console.log(lowerNum, randomNum, higherNum);
    // console.log(lowerLegNum, randomLegNum, higherLegNum);
    return [
        { lowerNum: lowerNum, randomNum: randomNum, higherNum: higherNum },
        { lowerLegNum: lowerLegNum, randomLegNum: randomLegNum, higherLegNum: higherLegNum },
    ];
}
