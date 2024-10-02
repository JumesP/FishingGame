import NextandBack from "./index";

export default {
	title: "Molecules/NextandBack",
	component: NextandBack,
};

const Template = (props) => {
	return <NextandBack {...props} />;
};

export const Original = Template.bind({});
