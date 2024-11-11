import SinglePlot from "./index";

export default {
	title: "Atoms/SinglePlot",
	component: SinglePlot,
};

const Template = (args) => <SinglePlot {...args} />;

export const Dirt = Template.bind({});
Dirt.args = {
	plotType: "dirt",
};

export const Grass = Template.bind({});
Grass.args = {
	plotType: "grass",
};

export const Water = Template.bind({});
Water.args = {
	plotType: "water",
};
