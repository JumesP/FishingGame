import React, { useState, useEffect } from "react";
import InventoryViewer from "../components/molecules/inventory/index";

const Inventory = () => {
	const [inventory, setInventory] = useState([{}]);

	useEffect(() => {
		fetch("/api/getInventory/")
			.then((res) => res.json())
			.then((data) => setInventory(data));
	}, []);

	return (
		<div>
			<InventoryViewer inventory={inventory} />
		</div>
	);
};

export default Inventory;
