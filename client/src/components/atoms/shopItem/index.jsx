import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const ShopItemStyled = styled.div`
	max-width: fit-content;
	font-size: 0.8rem;
`;

const ShopItem = ({ item, onDetailsClick }) => {
	const ShopItemClasses = classNames(["shopItem"]);

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
			<div className="inventoryItemImage">
				<img src={content.image} alt="item" />
			</div>
			<div className="inventoryItemHeader">{content.title}</div>
			<div className="inventoryItemDetails">
				{Object.values(content.details).map((detail, index) => (
					<p key={index}>{detail}</p>
				))}
			</div>
			<button onClick={() => onDetailsClick(content)}>Details</button>
		</ShopItemStyled>
	);
};

export default ShopItem;
