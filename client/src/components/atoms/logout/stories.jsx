import React from "react";
import Logout from "./index";

export default {
	title: "Atoms/Logout",
	component: Logout,
};

const Template = (props) => {
	return <Logout {...props} />;
};

export const Default = Template.bind({});
Default.args = {
	onLogout: () => alert("Logged out!"),
};
