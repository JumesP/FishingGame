class Shop {
	constructor(shopItems) {
		this.shopItems = [];
	}

	static getShopItems() {
		// temp shop items:

		return [
			{
				image: "images/rod.png",
				header: "Rare Rod",
				details: {
					enchants: "🥽",
					rarity: "Rare",
					durability: "80%",
					type: "rod",
				},
			},
			{
				image: "images/rod.png",
				header: "Legendary Rod",
				details: {
					enchants: "🏋️🏋️🏋️ + ⛑️",
					rarity: "Legendary",
					durability: "95%",
					type: "rod",
				},
			},
			{
				image: "images/rod.png",
				header: "Common Rod",
				details: {
					enchants: "None",
					rarity: "Common",
					durability: "100%",
					type: "Tool",
				},
			},
		];
	}

	getShopItems() {
		return [
			{
				image: "images/rod.png",
				header: "Rare Rod",
				details: {
					enchants: "🥽",
					rarity: "Rare",
					durability: "80%",
					type: "rod",
				},
			},
			{
				image: "images/rod.png",
				header: "Legendary Rod",
				details: {
					enchants: "🏋️🏋️🏋️ + ⛑️",
					rarity: "Legendary",
					durability: "95%",
					type: "rod",
				},
			},
			{
				image: "images/rod.png",
				header: "Common Rod",
				details: {
					enchants: "None",
					rarity: "Common",
					durability: "100%",
					type: "Tool",
				},
			},
		];
	}
}

module.exports = Shop;
