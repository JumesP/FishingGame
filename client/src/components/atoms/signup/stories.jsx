import SignupForm from "./index";

export default {
	title: "Atoms/signup",
	component: SignupForm,
};

const Template = (args) => <SignupForm {...args} />;

export const Default = Template.bind({});
