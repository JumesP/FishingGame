import CurrentLayout from "./index";

export default {
	title: "Molecules/CurrentLayout",
	component: CurrentLayout,
}

const Template = (args) => <CurrentLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
	inventory: {
		rods: [
			{
				id: 111,
				name: "Standard Rod",
				enchants: [],
				rarity: "common",
			},
			{
				id: 161,
				name: "Premium Rod",
				enchants: [],
				rarity: "uncommon",
			},
			{
				id: 222,
				name: "Rare Rod",
				enchants: [],
				rarity: "rare",
			},
			{
				id: 383,
				name: "Epic Rod",
				enchants: [],
				rarity: "Epic",
			},
			{
				id: 333,
				name: "Legendary Rod",
				enchants: [],
				rarity: "legendary",
			},
			{
				id: 444,
				name: "Mythical Rod",
				enchants: [],
				rarity: "mythical",
			},
		],
		baits: [
			{
				id: 1,
				name: "Worm",
				remainingUses: 10,
				rarity: "common",
			},
			{
				id: 2,
				name: "Shrimp",
				remainingUses: 10,
				rarity: "rare",
			},
			{
				id: 3,
				name: "Squid",
				remainingUses: 10,
				rarity: "legendary",
			},
			{
				id: 4,
				name: "Kraken",
				remainingUses: 10,
				rarity: "mythical",
			},
		],
		pets: [
			{
				id: 1,
				name: "Dog",
				rarity: "common",
			},
			{
				id: 2,
				name: "Cat",
				rarity: "rare",
			},
			{
				id: 3,
				name: "Parrot",
				rarity: "legendary",
			},
			{
				id: 4,
				name: "Monkey",
				rarity: "mythical",
			},
		],
		boats: [
			{
				id: 1,
				name: "Rowboat",
				rarity: "common",
			},
			{
				id: 2,
				name: "Speedboat",
				rarity: "rare",
			},
			{
				id: 3,
				name: "Yacht",
				rarity: "legendary",
			},
			{
				id: 4,
				name: "Pirate Ship",
				rarity: "mythical",
			},
		],
	}
}
