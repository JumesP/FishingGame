import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const ShopItemStyled = styled.div`
	max-width: fit-content;
	font-size: 0.8rem;
`;

const ShopItem = ({ item, onDetailsClick }) => {
	const ShopItemClasses = classNames(["shopItem"]);

	if (item.details.enchants === null) {
		item.details.enchants = "None";
	}

	if (item.details.durability === null) {
		item.details.durability = "N/A";
	}

	const content = {
		image: item.image,
		title: item.header,
		details: {
			enchants: item.details.enchants,
			rarity: item.details.rarity,
			durability: item.details.durability,
			type: item.details.type,
		},
		object: item.object,
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
