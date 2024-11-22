import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./css/Layout.scss";

const Layout = () => {
	const [loginText, setLoginText] = useState("Login");

	useEffect(() => {
		const userCookie = Cookies.get("UserID");
		if (userCookie) {
			setLoginText(`Hi, ${userCookie}`);
		}
	}, []);

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/FishTank">Fish Tank</Link>
					</li>
					<li>
						<Link to="/Main">Main</Link>
					</li>
					<li>
						<Link to="/Inventory">Inventory</Link>
					</li>
					<li>
						<Link to="/Rewards">Rewards</Link>
					</li>
					<li>
						<Link to="/Catch">Catch</Link>
					</li>
					<li>
						<Link to="/Garden">Garden</Link>
					</li>
					<li>
						<Link to="/Login">{loginText}</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
