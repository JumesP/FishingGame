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
					durability: "100%",
					type: "rod",
				},
			},
			{
				image: "images/rod.png",
				header: "Legendary Rod",
				details: {
					enchants: "🏋️🏋️🏋️ + ⛑️",
					rarity: "Legendary",
					durability: "100%",
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

	getShopBundles() {
		const currentShop = {
			ShopDate: "2021-07-07",
			bundle: [
				{
					BundleName: "Premium Bundle",
					BundleCost: 99,
					BundleType: "LargeBundle",
					BundleItems: [
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
						{
							image: "images/rod.png",
							header: "Rare Rod",
							details: {
								//enchants: 'Focus I',
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
								// enchants: 'Unbreaking III, Mending',
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
						{
							image: "images/rod.png",
							header: "Rare Rod",
							details: {
								//enchants: 'Focus I',
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
								// enchants: 'Unbreaking III, Mending',
								enchants: "🏋️🏋️🏋️ + ⛑️",
								rarity: "Legendary",
								durability: "95%",
								type: "rod",
							},
						},
					],
				},
				{
					BundleName: "Other Premium Bundle",
					BundleCost: 199,
					BundleType: "SmallBundle",
					BundleItems: [
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
						{
							image: "images/rod.png",
							header: "Rare Rod",
							details: {
								//enchants: 'Focus I',
								enchants: "🥽",
								rarity: "Rare",
								durability: "101%",
								type: "rod",
							},
						},
						{
							image: "images/rod.png",
							header: "Legendary Rod",
							details: {
								// enchants: 'Unbreaking III, Mending',
								enchants: "🏋️🏋️🏋️ + ⛑️",
								rarity: "Legendary",
								durability: "100%",
								type: "rod",
							},
						},
					],
				},
			],
		};

		return JSON.stringify(currentShop, null, 2);
	}
}

module.exports = Shop;
