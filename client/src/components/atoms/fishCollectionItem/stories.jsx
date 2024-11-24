import FishCollectionItem from "./index";

export default {
	title: "Atoms/Fish Collection Item",
	component: FishCollectionItem,
};

const Template = (props) => <FishCollectionItem {...props} />;
export const Default = Template.bind({});
Default.args = {
	fish: {
		image: "images/cod.png",
		header: "Cod Fish",
		details: {
			value: "1",
			health: "10",
			weight: "5",
			length: "32",
		},
	},
};
