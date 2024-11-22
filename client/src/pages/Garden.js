import React, { useState, useEffect } from "react";
import FarmTile from "../components/molecules/FarmTile";
import "./css/Garden.scss";

const Garden = () => {
	const [garden, setGarden] = useState([{}]);

	// useEffect(() => {
	// 	fetch("/api/getGarden/")
	// 		.then((res) => res.json())
	// 		.then((data) => setGarden(data));
	// }, []);

	return (
		<div className="allGardens">
			<FarmTile />
		</div>
	);
};

export default Garden;
