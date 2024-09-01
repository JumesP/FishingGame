import Profile from "./index";

export default {
	title: "Molecules/Profile",
	component: Profile,
}

const Template = (args) => <Profile {...args} />;
export const Default = Template.bind({});
Default.args = {
	user: {
		username: "James",
		level: 1,
		experience: 0,
		coins: 0,
		gems: 0,
		items: {
			rod:"Standard Rod",
			bait:"Worm",
			pet:"Goldfish",
			boat:"Rowboat",
		}
	}
}