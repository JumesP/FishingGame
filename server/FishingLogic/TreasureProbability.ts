import {Fish} from "./CatchProbability";

type treasure_rarity = {
    common: number,
    uncommon: number,
    rare: number,
    epic: number,
    legendary: number,
    mythical: number,
}

type rarity = "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythical";

// probability ( /100 ), [min, max] amounts
type reward = [number, [number, number]];

// type rewardTypes = keyof treasure_rarity;


type treasure_chances = {

}

type common_treasure = {
    coins: reward,
}

type uncommon_treasure = {
    coins: reward,
    gems: reward,
}

type rare_treasure = {
    coins: reward,
    rod: reward,
}

type epic_treasure = {
    coins: reward,
    rod: reward,
    bait: reward,
}

type legendary_treasure = {
    coins: reward,
    rod: reward,
    bait: reward,
    pet: reward,
}

type mythical_treasure = {
    coins: reward,
    rod: reward,
    bait: reward,
    pet: reward,
    mount: reward,
}

type probability_field = {
    common_treasure: common_treasure,
    uncommon_treasure: uncommon_treasure,
    rare_treasure: rare_treasure,
    epic_treasure: epic_treasure,
    legendary_treasure: legendary_treasure,
    mythical_treasure: mythical_treasure,
}

//


const treasure_rarity: treasure_rarity = {
    common: 65,
    uncommon: 15,
    rare: 10,
    epic: 6,
    legendary: 3,
    mythical: 1,
}


//
const treasure: probability_field = {
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
}

//

type itemObject = {item: string, selectedRarity: rarity, quantity : number, image: string}

export function getRandomReward() {
    const itemObject= {title: "", rarity: "", description: 0, url: ""};

    let randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    let randomNum2 = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100

    console.log(randomNum);
    console.log(randomNum2);

    let selectedRarity: rarity | undefined = undefined;

    for (const rarity in treasure_rarity) {
        randomNum -= treasure_rarity[rarity as keyof typeof treasure_rarity];
        if (randomNum <= 0) {
            selectedRarity = rarity as keyof typeof treasure_rarity;
            itemObject.rarity = selectedRarity;
            console.log(selectedRarity);
            break;
        }
    }

    if (!selectedRarity) {
        return "none";
    }

    const quantity = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }

    const selectedTreasure = treasure[selectedRarity + "_treasure" as keyof typeof treasure];

    for (const item in selectedTreasure) {
        if (selectedTreasure.hasOwnProperty(item)) {
            const [probability, _] = selectedTreasure[item as keyof typeof selectedTreasure];
            randomNum2 -= probability;
            if (randomNum2 <= 0) {
                console.log(item);
                itemObject.title = item;
                itemObject.description = quantity(selectedTreasure[item as keyof typeof selectedTreasure][1][0], selectedTreasure[item as keyof typeof selectedTreasure][1][1]);
                itemObject.url = "https://via.placeholder.com/150";
                // return {item, selectedRarity} as const;
            }
        }
    }



    // itemObject.quantity = quantity(1, 1);
    console.log(itemObject)
    return itemObject;
    // return "none";
}

// export default function FormattedReward() {
//     const reward = getRandomReward();
//     const card = {
//         title: "",
//         description: "",
//         image: "",
//         rarity: reward.selectedRarity,
//     }
// }

export default function TripleGetRandomReward() {
    const rewards = [getRandomReward(), getRandomReward(), getRandomReward()];
    console.log(rewards);
    return rewards;
}

// getRandomReward();
// getRandomReward();
// getRandomReward();
// getRandomReward();