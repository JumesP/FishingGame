import Login from "./index";

export default {
	title: "Atoms/Login",
	component: Login,
};

const Template = (props) => {
	return <Login {...props} />;
};

export const Default = Template.bind({});
