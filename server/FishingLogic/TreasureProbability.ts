type treasure_rarity = {
    common: number,
    uncommon: number,
    rare: number,
    epic: number,
    legendary: number,
    mythical: number,
}

// probability ( /100 ), [min, max] amounts
type reward = [number, [number, number]];


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


//

const common_treasure: common_treasure = {
    coins: [100, [1, 200]],
}

const uncommon_treasure: uncommon_treasure = {
    coins: [99, [201, 400]],
    gems: [1, [1, 1]],
}

const rare_treasure: rare_treasure = {
    coins: [95, [401, 800]],
    rod: [5, [1, 1]],
}

const epic_treasure: epic_treasure = {
    coins: [85, [801, 1600]],
    rod: [10, [1, 1]],
    bait: [5, [1, 1]],
}

const legendary_treasure: legendary_treasure = {
    coins: [74, [1601, 3200]],
    rod: [15, [1, 1]],
    bait: [10, [1, 2]],
    pet: [1, [1, 1]],
}

const mythical_treasure: mythical_treasure = {
    coins: [72, [3201, 6400]],
    rod: [15, [1, 2]],
    bait: [10, [1, 4]],
    pet: [2, [1, 2]],
    mount: [1, [1, 1]],
}