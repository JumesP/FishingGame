import React, { useState, useEffect } from "react";
import ShopViewer from "../components/molecules/ShopViewer";

const Shop = () => {
	const [shopItems, setShopItems] = useState([{}]);

	useEffect(() => {
		fetch("/api/getShopItems/")
			.then((res) => res.json())
			.then((data) => setShopItems(data));
	}, []);

	let items = [
		{
			image: "images/rod.png",
			header: "Rare Rod",
			details: {
				enchants: "🥽",
				rarity: "Rare",
				durability: "80%",
				type: "rod",
			},
		},
		{
			image: "images/rod.png",
			header: "Legendary Rod",
			details: {
				enchants: "🏋️🏋️🏋️ + ⛑️",
				rarity: "Legendary",
				durability: "95%",
				type: "rod",
			},
		},
		{
			image: "images/rod.png",
			header: "Common Rod",
			details: {
				enchants: "None",
				rarity: "Common",
				durability: "100%",
				type: "Tool",
			},
		},
	];

	return (
		<div>
			<ShopViewer items={items} />
		</div>
	);
};

export default Shop;
