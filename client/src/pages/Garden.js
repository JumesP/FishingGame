import React, { useState, useEffect } from "react";
import GardenViewer from "../components/molecules/GardenViewer";
import "./css/Garden.scss";

const Garden = () => {
	const [garden, setGarden] = useState([{}]);

	// useEffect(() => {
	// 	fetch("/api/getGarden/")
	// 		.then((res) => res.json())
	// 		.then((data) => setGarden(data));
	// }, []);

	return <GardenViewer content={garden} />;
};

export default Garden;
