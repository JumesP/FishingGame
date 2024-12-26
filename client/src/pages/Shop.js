import React, { useState, useEffect } from "react";
import ShopViewer from "../components/molecules/ShopViewer";

const Shop = () => {
	const [shopItems, setShopItems] = useState([{}]);

	useEffect(() => {
		fetch("/api/getShopItems/")
			.then((res) => res.json())
			.then((data) => setShopItems(JSON.parse(data)));
	}, []);

	return (
		<div>
			<ShopViewer items={shopItems} />
		</div>
	);
};

export default Shop;
