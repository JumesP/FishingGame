import Profile from "./index";

export default {
	title: "Molecules/Profile",
	component: Profile,
};

const Template = (args) => <Profile {...args} />;
export const Default = Template.bind({});
Default.args = {
	user: {
		username: "James",
		level: 1,
		experience: 0,
		coins: 0,
		gems: 0,
		items: {
			rod: "Standard Rod",
			bait: "Worm",
			pet: "Goldfish",
			boat: "Rowboat",
		},
	},
};

export const Default2 = Template.bind({});
Default2.args = {
	user: {
		username: "James",
		level: 1,
		experience: 0,
		coins: 69,
		gems: 0,
		items: {
			rod: {
				InventoryID: 1,
				ItemID: 1,
				ItemName: "Fishing Rod",
				Enchants: null,
				Rarity: "Common",
				Durability: null,
				Type: "rod",
			},
			bait: {
				InventoryID: 1,
				ItemID: 2,
				ItemName: "Shrimp",
				Enchants: null,
				Rarity: "Uncommon",
				Durability: 100,
				Type: "bait",
			},
			pet: {
				InventoryID: 1,
				ItemID: 3,
				ItemName: "Dog",
				Enchants: null,
				Rarity: "Legendary",
				Durability: null,
				Type: "pet",
			},
			boat: {
				InventoryID: 1,
				ItemID: 5,
				ItemName: "Rowboat",
				Enchants: null,
				Rarity: "Mythical",
				Durability: null,
				Type: "boat",
			},
		},
	},
};
