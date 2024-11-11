import Plots from "./index";

export default {
	title: "Atoms/Plots",
	component: Plots,
};

const Template = (args) => <Plots {...args} />;

export const Patch_Of_Dirt = Template.bind({});
Patch_Of_Dirt.args = {
	type: "patch-of-dirt",
};

export const Plant_Pot = Template.bind({});
Plant_Pot.args = {
	type: "plant-pot",
};

export const Greenhouse = Template.bind({});
Greenhouse.args = {
	type: "greenhouse",
};

export const Large_Greenhouse = Template.bind({});
Large_Greenhouse.args = {
	type: "large-greenhouse",
};

export const Platinum_Greenhouse = Template.bind({});
Platinum_Greenhouse.args = {
	type: "platinum-greenhouse",
};

export const Plot = Template.bind({});
Plot.args = {
	type: "plot",
};

export const Farm = Template.bind({});
Farm.args = {
	type: "farm",
};
