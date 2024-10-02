import UserDetails from "./index";

export default {
	title: "Atoms/userDetail",
	component: UserDetails,
};

const Template = (args) => {
	return <UserDetails {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	user: {
		name: "John Doe",
		username: "james",
		age: 25,
		level: 1,
		tankID: 4,
	},
};
