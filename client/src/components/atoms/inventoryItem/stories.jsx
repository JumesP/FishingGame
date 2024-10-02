import React from "react";
import InventoryItem from "./index";

export default {
	title: "Atoms/InventoryItem",
	component: InventoryItem,
};

const Template = (args) => <InventoryItem {...args} />;

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
