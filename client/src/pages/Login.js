import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import sendCookieDataToBackend from "../utils/sendCookieDataToBackend";
import LoginForm from "../components/atoms/login";
import SignupForm from "../components/atoms/signup";
import LogoutButton from "../components/atoms/logout";
import "./css/Login.scss";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [userData, setUserData] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		console.log(username, password);

		try {
			console.log("sending request");
			const response = await fetch("http://localhost:5001/api/Login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});
			if (response.ok) {
				const data = await response.json();
				setUserData(data);
				// Save user data to cookies
				Cookies.set("UserID", JSON.stringify(data[0].UserID), {
					expires: 7,
				}); // Expires in 7 days
				console.log("User logged in and saved to cookies:", data);
				console.log("Success:", data);
				console.log(userData);
				// Send Cookies to Backend
				sendCookieDataToBackend();
				await fetch("http://localhost:5001/api/receiveUserID", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ UserID: data[0].UserID }),
				});
			} else {
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleSignup = async ({ username, password }) => {
		console.log(username, password);

		try {
			console.log("sending signup request");
			const response = await fetch("http://localhost:5001/api/Signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});
			if (response.ok) {
				const data = await response.json();
				console.log("User signed up:", data);
				// Save user data to cookies
				if (data.UserID) {
					Cookies.set("UserID", JSON.stringify(data.UserID), {
						expires: 7,
					}); // Expires in 7 days
					console.log("UserID cookie set:", Cookies.get("UserID"));
				} else {
					console.error("UserID not found in response data");
				}
			} else {
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleLogout = () => {
		setUserData(null);
		console.log("User logged out");
	};

	const checkUserLoggedIn = () => {
		const userCookie = Cookies.get("UserID");
		if (userCookie) {
			const userData = JSON.parse(userCookie);
			setUserData([{ UserID: userData }]);
		}
	};

	useEffect(() => {
		checkUserLoggedIn();
	}, []);

	console.log("userData:", userData);

	return (
		<div className="loginContainer">
			<LoginForm
				username={username}
				setUsername={setUsername}
				password={password}
				setPassword={setPassword}
				handleSubmit={handleSubmit}
			/>
			{userData && userData.length > 0 ? (
				<div>
					<h2>User Data</h2>
					<p>Username: {userData[0].Username}</p>
					<p>Password: {userData[0].Password}</p>
					<p>UserID: {userData[0].UserID}</p>
					<LogoutButton onLogout={handleLogout} />
				</div>
			) : (
				<p>No data</p>
			)}
			<SignupForm handleSignup={handleSignup} />
		</div>
	);
};

export default Login;
