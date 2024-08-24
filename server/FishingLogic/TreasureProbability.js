"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeGetRandomReward = exports.getRandomReward = void 0;
//
var treasure_rarity = {
    common: 65,
    uncommon: 15,
    rare: 10,
    epic: 6,
    legendary: 3,
    mythical: 1,
};
//
var treasure = {
    common_treasure: {
        coins: [100, [1, 200]],
    },
    uncommon_treasure: {
        coins: [99, [201, 400]],
        gems: [1, [1, 1]],
    },
    rare_treasure: {
        coins: [95, [401, 800]],
        rod: [5, [1, 1]],
    },
    epic_treasure: {
        coins: [85, [801, 1600]],
        rod: [10, [1, 1]],
        bait: [5, [1, 1]],
    },
    legendary_treasure: {
        coins: [74, [1601, 3200]],
        rod: [15, [1, 1]],
        bait: [10, [1, 2]],
        pet: [1, [1, 1]],
    },
    mythical_treasure: {
        coins: [72, [3201, 6400]],
        rod: [15, [1, 2]],
        bait: [10, [1, 4]],
        pet: [2, [1, 2]],
        mount: [1, [1, 1]],
    }
};
function getRandomReward() {
    var itemObject = { title: "", rarity: "", description: 0, url: "" };
    var randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    var randomNum2 = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    console.log(randomNum);
    console.log(randomNum2);
    var selectedRarity = undefined;
    for (var rarity in treasure_rarity) {
        randomNum -= treasure_rarity[rarity];
        if (randomNum <= 0) {
            selectedRarity = rarity;
            itemObject.rarity = selectedRarity;
            console.log(selectedRarity);
            break;
        }
    }
    if (!selectedRarity) {
        return "none";
    }
    var quantity = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    var selectedTreasure = treasure[selectedRarity + "_treasure"];
    for (var item in selectedTreasure) {
        if (selectedTreasure.hasOwnProperty(item)) {
            var _a = selectedTreasure[item], probability = _a[0], _ = _a[1];
            randomNum2 -= probability;
            if (randomNum2 <= 0) {
                console.log(item);
                itemObject.title = item;
                itemObject.description = quantity(selectedTreasure[item][1][0], selectedTreasure[item][1][1]);
                itemObject.url = "/images/" + item + ".png";
                // return {item, selectedRarity} as const;
            }
        }
    }
    // itemObject.quantity = quantity(1, 1);
    console.log(itemObject);
    return itemObject;
    // return "none";
}
exports.getRandomReward = getRandomReward;
// export default function FormattedReward() {
//     const reward = getRandomReward();
//     const card = {
//         title: "",
//         description: "",
//         image: "",
//         rarity: reward.selectedRarity,
//     }
// }
function ThreeGetRandomReward() {
    var rewards = [getRandomReward(), getRandomReward(), getRandomReward()];
    console.log(rewards);
    return rewards;
}
exports.ThreeGetRandomReward = ThreeGetRandomReward;
function FiveGetRandomReward() {
    var rewards = [getRandomReward(), getRandomReward(), getRandomReward(), getRandomReward(), getRandomReward()];
    console.log(rewards);
    return rewards;
}
exports.default = FiveGetRandomReward;
// getRandomReward();
// getRandomReward();
// getRandomReward();
// getRandomReward();
