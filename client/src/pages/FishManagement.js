import React, { useState, useEffect } from "react";
import FishManagement from "../components/molecules/FishViewer";

const Inventory = () => {
	const [fish, setFish] = useState([{}]);

	useEffect(() => {
		fetch("/api/getFish/")
			.then((res) => res.json())
			.then((data) => setFish(data));
	}, []);

	return (
		<div>
			<FishManagement fish={fish} />
		</div>
	);
};

export default Inventory;
