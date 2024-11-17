// client/src/components/atoms/LogoutButton.js
import React from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const Logout = ({ onLogout }) => {
	const handleLogout = () => {
		Cookies.remove("UserID");
		if (onLogout) {
			onLogout();
		}
	};

	return <button onClick={handleLogout}>Logout</button>;
};

Logout.propTypes = {
	onLogout: PropTypes.func,
};

export default Logout;
