import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import FishTank from "./pages/FishTank";
import Rewards from "./pages/Rewards";
import Catch from "./pages/Catch";
import Login from "./pages/Login";
import Inventory from "./pages/Inventory";
import Garden from "./pages/Garden";
import Shop from "./pages/Shop";
import FishManagement from "./pages/FishManagement";

import sendCookieDataToBackend from "./utils/sendCookieDataToBackend";

import "./components/styles.scss";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await sendCookieDataToBackend();
				console.log(response);
				setIsAuthenticated(response); // Set to true if response exists, false otherwise
			} catch (error) {
				setIsAuthenticated(false); // Set to false if there is an error
			}
			console.log("Checking auth", isAuthenticated);
		};
		console.log("Checking auth", isAuthenticated);
		checkAuth();
	});

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Landing />} />
					{isAuthenticated ? (
						<>
							<Route path="/Main" element={<Main />} />
							<Route path="/FishTank" element={<FishTank />} />
							<Route path="/Inventory" element={<Inventory />} />
							<Route path="/Rewards" element={<Rewards />} />
							<Route path="/Catch" element={<Catch />} />
							<Route path="/Garden" element={<Garden />} />
							<Route path="/Shop" element={<Shop />} />
							<Route
								path="/FishManagement"
								element={<FishManagement />}
							/>
						</>
					) : (
						<Route path="*" element={<Navigate to="/" />} />
					)}
					<Route path="/Login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
