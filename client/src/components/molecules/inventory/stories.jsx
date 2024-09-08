import Inventory from "./index";

export default {
    title: "Molecules/Inventory",
    component: Inventory,
};

const Template = (args) => <Inventory {...args} />;
export const Default = Template.bind({});