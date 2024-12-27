import React from "react";
import ShopBundle from "./index";

export default {
	title: "Atoms/Shop/ShopBundle",
	component: ShopBundle,
};

const Template = (args) => <ShopBundle {...args} />;

export const CommonBundle = Template.bind({});
CommonBundle.args = {
	bundle: {
		BundleName: "Premium Bundle",
		BundleCost: 99,
		BundleType: "LargeBundle",
		BundleItems:
			[
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
					}
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
					}
				}
			]
	}
};