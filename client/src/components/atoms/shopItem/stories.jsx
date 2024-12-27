import React from "react";
import ShopItem from "./index";

export default {
	title: "Atoms/Shop/ShopItem",
	component: ShopItem,
};

const Template = (args) => <ShopItem {...args} />;

export const CommonRod = Template.bind({});
CommonRod.args = {
	item: {
		image: "images/rod.png",
		header: "Common Rod",
		details: {
			enchants: "None",
			rarity: "Common",
			durability: "100%",
			type: "Tool",
		},
	},
};

export const RareRod = Template.bind({});
RareRod.args = {
	item: {
		image: "images/rod.png",
		header: "Rare Rod",
		details: {
			enchants: "🥽",
			rarity: "Rare",
			durability: "80%",
			type: "rod",
		},
	},
};

export const LegendaryRod = Template.bind({});
LegendaryRod.args = {
	item: {
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
};