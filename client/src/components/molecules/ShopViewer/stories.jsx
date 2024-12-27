import ShopViewer from "./index";

export default {
	title: "Molecules/ShopViewer",
	component: ShopViewer,
};

const Template = (args) => <ShopViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: {
		ShopDate: "2021-07-07",
		bundle:
			[{
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
		},
		{
			BundleName: "Other Premium Bundle",
			BundleCost: 199,
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
							durability: "101%",
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
							durability: "100%",
							type: "rod",
						}
					}
				]
		}]
	}
}