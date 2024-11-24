import JustCaughtModal from "./index";

export default {
	title: "Molecules/JustCaughtModal",
	component: JustCaughtModal,
};

const Template = (props) => {
	return <JustCaughtModal {...props} />;
};

export const Default = Template.bind({});
Default.args = {
	// children: 'JustCaughtModal',
	fish: {
		url: "images/goldfish.png",
		name: "goldfish",
		weight: 5,
		length: 10,
		value: 10,
		health: 10,
	},
};
