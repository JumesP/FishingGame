type fish_chances = {
    cod: number,
    salmon: number,
    goldfish: number,
    trash: number,
    treasure: number,
    jellyfish: number,
    shark: number,
    whale: number,
};

export type Fish = keyof fish_chances;

const Standard_Rod: fish_chances = {
    cod: 60,
    salmon: 20,
    goldfish: 10,
    trash: 6,
    treasure: 2,
    jellyfish: 1.89,
    shark: 0.1,
    whale: 0.01,
};

const Premium_Rod: fish_chances = {
    cod: 40,
    salmon: 30,
    goldfish: 15,
    trash: 6,
    treasure: 4,
    jellyfish: 3,
    shark: 1,
    whale: 1,
};

const Super_Rod: fish_chances = {
    cod: 30,
    salmon: 30,
    goldfish: 20,
    trash: 10,
    treasure: 5,
    jellyfish: 3,
    shark: 1,
    whale: 1,
};

const Ultra_Rod: fish_chances = {
    cod: 20,
    salmon: 30,
    goldfish: 20,
    trash: 10,
    treasure: 10,
    jellyfish: 5,
    shark: 3,
    whale: 2,
};

const Ultimate_Rod: fish_chances = {
    cod: 10,
    salmon: 20,
    goldfish: 20,
    trash: 10,
    treasure: 20,
    jellyfish: 10,
    shark: 5,
    whale: 5,
};

export default function getRandomFish(rodName: string): Fish {
    let randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
    let rod: fish_chances;
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
    for (const fish in rod) {
        if (rod.hasOwnProperty(fish)) {
            randomNum -= rod[fish as keyof fish_chances];
            if (randomNum <= 0) {
                console.log(fish);
                return fish as Fish;
            }
        }
    }
    return "none" as Fish;
}

getRandomFish("Standard Rod");
getRandomFish("Standard Rod");
getRandomFish("Standard Rod");