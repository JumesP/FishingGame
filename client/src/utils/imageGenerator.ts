type Item = {
	UserID: number;
	ItemID: number;
	Type: "rod" | "bait" | "pet" | "boat";
	ItemName: string;
	Rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythical";
	Enchants: null | string;
	durability: number;
};

export default function getImage(item: Item) {
	console.log(item);
	console.log(item.Enchants);
	let image: string;
	switch (item.Type) {
		case "rod":
			switch (item.Rarity) {
				case "Common":
					image = "images/rods/StandardRod.png";
					switch (item.Enchants) {
						case undefined:
							console.log("not enchanted");
							image = "images/rods/StandardRod.png";
							break;
						case "hello":
							image = "images/rods/UnbreakingRods/SRUI.png";
							break;
					}
					break;
				case "Uncommon":
					image = "images/rods/PremiumRod.png";
					break;
				case "Rare":
					image = "images/rods/SuperRod.png";
					break;
				case "Epic":
					image = "images/rods/UltraRod.png";
					break;
				case "Legendary":
					image = "images/rods/UltimateRodStar.png";
					break;
			}
			break;
		case "bait":
			image = "images/bait.png";
			break;
		case "pet":
			image = "images/pet.png";
			break;
		case "boat":
			image = "images/boat.png";
			break;
	}

	if (image === undefined) {
		image = "images/none.png";
	}

	return image;
}
