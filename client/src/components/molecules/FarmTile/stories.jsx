import FarmTile from "./index";

export default {
	title: "Molecules/FarmTile",
	component: FarmTile,
};

const Template = (args) => <FarmTile {...args} />;

export const plant_pot = Template.bind({});
plant_pot.args = {
	content: {
		Garden: "Farm 1",
		Fertiliser: {
			ItemName: "Fertiliser",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Fertiliser",
		},
		Manager: {
			ItemName: "Manager",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Manager",
		},
		Nutrient: {
			ItemName: "Nutrient",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Nutrient",
		},
	},
};

export const Farm = Template.bind({});
Farm.args = {
	content: {
		Garden: "Farm 2",
		Fertiliser: {
			ItemName: "Fertiliser",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Fertiliser",
		},
		Manager: {
			name: "Manager",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Manager",
		},
		Nutrient: {
			name: "Nutrient",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Nutrient",
		},
	},
};
