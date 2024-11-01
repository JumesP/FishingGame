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
						case "Unbreaking I":
							image = "images/rods/UnbreakingRods/SRUI.png";
							break;
						case "Unbreaking II":
							image = "images/rods/UnbreakingRods/SRUII.png";
							break;
						case "Unbreaking III":
							image = "images/rods/UnbreakingRods/SRUIII.png";
							break;
						case "Unbreaking IV":
							image = "images/rods/UnbreakingRods/SRUIV.png";
							break;
						case "Unbreaking V":
							image = "images/rods/UnbreakingRods/SRUV.png";
							break;
						case "Mending I":
							image = "images/rods/MendingRods/SRMI.png";
							break;
						case "Mending II":
							image = "images/rods/MendingRods/SRMII.png";
							break;
						case "Mending III":
							image = "images/rods/MendingRods/SRMIII.png";
							break;
						case "Mending IV":
							image = "images/rods/MendingRods/SRMIV.png";
							break;
						case "Mending V":
							image = "images/rods/MendingRods/SRMV.png";
							break;
						case "Focus I":
							image = "images/rods/FocusRods/SRFI.png";
							break;
						case "Focus II":
							image = "images/rods/FocusRods/SRFII.png";
							break;
						case "Focus III":
							image = "images/rods/FocusRods/SRFIII.png";
							break;
						case "Focus IV":
							image = "images/rods/FocusRods/SRFIV.png";
							break;
						case "Focus V":
							image = "images/rods/FocusRods/SRFV.png";
							break;
						case "DuelRod I":
							image = "images/rods/DuelRodRods/SRDI.png";
							break;
						case "DuelRod II":
							image = "images/rods/DuelRodRods/SRDII.png";
							break;
						case "DuelRod III":
							image = "images/rods/DuelRodRods/SRDIII.png";
							break;
						case "DuelRod IV":
							image = "images/rods/DuelRodRods/SRDIV.png";
							break;
						case "DuelRod V":
							image = "images/rods/DuelRodRods/SRDV.png";
							break;
						case "Reroll I":
							image = "images/rods/RerollRods/SRRRI.png";
							break;
						case "Reroll II":
							image = "images/rods/RerollRods/SRRRII.png";
							break;
						case "Reroll III":
							image = "images/rods/RerollRods/SRRRIII.png";
							break;
						case "Reroll IV":
							image = "images/rods/RerollRods/SRRRIV.png";
							break;
						case "Reroll V":
							image = "images/rods/RerollRods/SRRRV.png";
							break;
						case "Comfort I":
							image = "images/rods/ComfortRods/SRCI.png";
							break;
						case "Comfort II":
							image = "images/rods/ComfortRods/SRCII.png";
							break;
						case "Comfort III":
							image = "images/rods/ComfortRods/SRCIII.png";
							break;
						case "Comfort IV":
							image = "images/rods/ComfortRods/SRCIV.png";
							break;
						case "Comfort V":
							image = "images/rods/ComfortRods/SRCV.png";
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
