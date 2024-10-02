import ProfileCI from "./index";

export default {
	title: "Atoms/ProfileCI",
	component: ProfileCI,
};

const Template = (props) => <ProfileCI {...props} />;

export const Default = Template.bind({});
Default.args = {
	Item: {
		InventoryID: 1,
		ItemID: 1,
		ItemName: "Fishing Rod",
		Enchants: null,
		Rarity: "Legendary",
		Durability: null,
		Type: "rod",
	},
};
