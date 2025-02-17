import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const ShopItemStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 3px solid black;
	border-radius: 10px;
	min-width: fit-content;
	width: 100%;
	height: 100%;
	font-size: 0.8rem;
`;

const ShopItem = ({ item, onDetailsClick }) => {
	const ShopItemClasses = classNames([
		"shopItem",
		item.details.rarity
			? "rarity-" + item.details.rarity.toLowerCase()
			: "",
	]);

	const details = item.details || {};
	const content = {
		image: item.image || "default-image.png",
		title: item.header || "No Title",
		details: {
			enchants: details.enchants || "None",
			rarity: details.rarity || "Unknown",
			durability: details.durability || "N/A",
			type: details.type || "Unknown",
		},
		object: item.object || {},
	};

	return (
		<ShopItemStyled className={ShopItemClasses}>
			<div className="shopItemImage">
				<img src={content.image} alt="item" />
			</div>
			<div className="shopItemHeader">{content.title}</div>
			<div className="shopItemDetails">
				{Object.values(content.details).map((detail, index) => (
					<p key={index}>{detail}</p>
				))}
			</div>
			<button onClick={() => onDetailsClick(content)}>Details</button>
		</ShopItemStyled>
	);
};

export default ShopItem;
