import FishButton from "./index";

export default {
	title: "Atoms/fishButton",
	component: FishButton,
};

const Template = (props) => {
	return <FishButton {...props} />;
};

export const Default = Template.bind({});
Default.args = {
	size: "fishButton",
	children: "fish",
};
