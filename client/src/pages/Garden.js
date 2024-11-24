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

	//	temp data
	const tempData = {
		Garden: "Farm 1",
		Fertiliser: {
			ItemName: "Fertilisers",
			Image: "https://via.placeholder.com/50",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Fertiliser",
		},
		Manager: {
			ItemName: "Managers",
			Image: "https://via.placeholder.com/100",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Manager",
		},
		Nutrient: {
			ItemName: "Nutrients",
			Image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Nutrient",
		},
	};

	return (
		<div className="allGardens">
			<FarmTile content={tempData} />
		</div>
	);
};

export default Garden;
