import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import ShopItem from "../../atoms/shopItem";

const bundleType = {
	SingleItem: "SingleItem", // holds 1 item
	SmallBundle: "SmallBundle", // holds 3 items
	LargeBundle: "LargeBundle", // holds 6 items
	MegaBundle: "MegaBundle", // holds 12 items
	FeaturedItem: "FeaturedItem", // holds 1 item
	LargeFeaturedItem: "LargeFeaturedItem", // holds 1 item
};

const ShopBundleStyled = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: palevioletred;
	border: 5px solid black;
	border-radius: 25px;
	margin: 1% auto 1% auto;
	width: 90%;
	height: fit-content;
`;

const BundleStructure = {
	BundleName: "Premium Bundle",
	BundleCost: 99,
	BundleType: "LargeBundle",
	BundleItems: [
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
		{
			image: "images/rod.png",
			header: "Rare Rod",
			details: {
				//enchants: 'Focus I',
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
				// enchants: 'Unbreaking III, Mending',
				enchants: "🏋️🏋️🏋️ + ⛑️",
				rarity: "Legendary",
				durability: "95%",
				type: "rod",
			},
		},
	],
};

const ShopBundle = ({ bundle, ...props }) => {
	const ShopBundleClasses = classNames([
		"shopBundle",
		// bundle.BundleType ? `type-${bundle.BundleType}` : "type-SmallBundle",
		"type-LargeBundle",
	]);

	console.log(bundle);

	const handleDetailsClick = (item) => {};

	const divs = [];
	for (let i = 0; i < bundle.BundleItems.length; i++) {
		// const image = getImage(props.items[i]);
		// if (image === null) {
		// 	continue;
		// }

		divs.push(
			<ShopItem
				key={i}
				item={bundle.BundleItems[i]}
				onClick={handleDetailsClick}
			/>,
		);
	}

	return (
		<ShopBundleStyled className={ShopBundleClasses} {...props}>
			<h1>Bundle Items:</h1>
			<div className="inventoryItems">{divs}</div>
		</ShopBundleStyled>
	);
};

export default ShopBundle;
