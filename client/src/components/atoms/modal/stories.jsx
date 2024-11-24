import React from "react";
import Modal from "./index";

export default {
	title: "Atoms/Modal",
	component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Item = Template.bind({});
Item.args = {
	item: {
		image: "images/rod.png",
		title: "Common Rod ",
		details: {
			enchants: "🥽",
			rarity: "Common",
			durability: "100%",
			type: "Tool",
		},
	},
	onClose: () => alert("Modal closed"),
	onEquip: () => alert("Equipped!"),
	onSell: () => alert("Sold!"),
	type: "item",
};

export const Fish = Template.bind({});
Fish.args = {
	item: {
		image: "images/cod.png",
		title: "Cod",
		details: {
			type: "cod",
			weight: "1.5kg",
			length: "30cm",
			value: "10g",
			health: "50%",
		},
	},
	onClose: () => alert("Modal closed"),
	onEquip: () => alert("Equipped!"),
	onSell: () => alert("Sold!"),
	type: "fish",
};
