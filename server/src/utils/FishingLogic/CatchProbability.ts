type fish_chances = {
	cod: number;
	salmon: number;
	goldfish: number;
	trash: number;
	treasure: number;
	jellyfish: number;
	shark: number;
	whale: number;
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

type equipment = {
	UserID: number;
	ItemID: number;
	ItemName: string;
	Enchants: null;
	Rarity: string;
	Durability: null | number;
	Type: "rod" | "bait" | "pet" | "boat";
};

export default function getRandomFish(equipment: equipment): Fish {
	let randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
	const rodName = equipment.ItemName;
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

function generateHigherandLowerNums(): {
	lowerNum: number;
	randomNum: number;
	higherNum: number;
} {
	const difference = 7.5; // maybe between 10 and 20
	var randomNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
	const lowerNum = Math.round(Math.max(0, randomNum - difference)); // Ensure lowerNum is at least 0 and round it
	const higherNum = Math.round(Math.min(100, randomNum + difference)); // Ensure higherNum is at most 100 and round it
	return { lowerNum, randomNum, higherNum };
}

function generateLegendaryZone(): {
	lowerLegNum: number;
	randomLegNum: number;
	higherLegNum: number;
} {
	const difference = 1; // maybe between 10 and 20
	const randomLegNum = Math.floor(Math.random() * 10000) / 100; // Random number between 0 and 100
	const lowerLegNum = Math.round(Math.max(0, randomLegNum - difference)); // Ensure lowerNum is at least 0 and round it
	const higherLegNum = Math.round(Math.min(100, randomLegNum + difference)); // Ensure higherNum is at most 100 and round it
	return { lowerLegNum, randomLegNum, higherLegNum };
}

export function generateZones(): [
	{
		lowerNum: number;
		randomNum: number;
		higherNum: number;
	},
	{
		lowerLegNum: number;
		randomLegNum: number;
		higherLegNum: number;
	},
] {
	// This will generate and return both zones
	// If legendary zone overlaps the higher and lower zone, it will be rerolled

	const { lowerNum, randomNum, higherNum } = generateHigherandLowerNums();
	let { lowerLegNum, randomLegNum, higherLegNum } = generateLegendaryZone();

	while (lowerLegNum < higherNum && higherLegNum > lowerNum) {
		({ lowerLegNum, randomLegNum, higherLegNum } = generateLegendaryZone());
	}
	return [
		{ lowerNum, randomNum, higherNum },
		{ lowerLegNum, randomLegNum, higherLegNum },
	];
}
