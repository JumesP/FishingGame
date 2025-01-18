import React from "react";
import classNames from "classnames";
import styled from "styled-components";

import Plots from "../../atoms/plots";

const FarmTileStyled = styled.div`
	display: grid;
	grid-template-rows: 1fr 3.75fr 1fr;
	justify-items: center;
	align-items: center;

	//background-color: #596b50;
	background-color: #666666;
	border: 5px solid black;
	border-radius: 50px;
	box-shadow:
		0 10px 20px 0 rgba(0, 0, 0, 0.2),
		0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	min-width: fit-content;
	height: 600px;
	//padding: 5px;
	padding: 0.5%;
	//& * {
	//	border: 1px solid black;
	//}
	.farmTileEquipment {
		display: grid;
		grid-template-rows: 3fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: space-around;
		justify-items: center;
		align-items: center;

		gap: 5px;

		width: 100%;
		& > div {
			width: 75px;
			height: 75px;
			background-color: #596b50;
		}
	}
	.farmTileFarmContainer {
		width: 100%;
		height: 100%;
		background-color: #596b50;
	}
	& > .farmTileName,
	& > .farmTileName > p {
		font-size: 2rem;
	}
	& > .farmTileEquipment > img {
		width: 75px;
		height: 75px;
	}
`;

const FarmTile = (props) => {
	const FarmTileClasses = classNames(["FarmTile"]);
	let content;

	const backupContent = {
		garden: "Farm 1",
		type: "farm",
		Fertiliser: {
			ItemName: "Fertiliser",
			image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Fertiliser",
		},
		Manager: {
			ItemName: "Manager",
			image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Manager",
		},
		Nutrient: {
			ItemName: "Nutrient",
			image: "https://via.placeholder.com/150",
			Enchants: 0,
			Rarity: "Common",
			Durability: 100,
			Type: "Nutrient",
		},
	};

	if (!props.content) {
		content = backupContent;
	} else {
		content = {
			garden: props.content.Garden,
			type: props.content.type,
			Fertiliser: {
				name: props.content.Fertiliser.ItemName,
				image: props.content.Fertiliser.Image,
				Enchants: props.content.Fertiliser.Enchants,
				Rarity: props.content.Fertiliser.Rarity,
				Durability: props.content.Fertiliser.Durability,
				Type: props.content.Fertiliser.Type,
			},
			Manager: {
				name: props.content.Manager.ItemName,
				image: props.content.Manager.Image,
				Enchants: props.content.Manager.Enchants,
				Rarity: props.content.Manager.Rarity,
				Durability: props.content.Manager.Durability,
				Type: props.content.Manager.Type,
			},
			Nutrient: {
				name: props.content.Nutrient.ItemName,
				image: props.content.Nutrient.Image,
				Enchants: props.content.Nutrient.Enchants,
				Rarity: props.content.Nutrient.Rarity,
				Durability: props.content.Nutrient.Durability,
				Type: props.content.Nutrient.Type,
			},
		};
	}

	return (
		<FarmTileStyled {...props} className={FarmTileClasses} id="FarmTile">
			<div className="farmTileEquipment">
				<img
					src={content.Fertiliser.image}
					alt={content.Fertiliser.name}
				></img>
				<img
					src={content.Manager.image}
					alt={content.Manager.name}
				></img>
				<img
					src={content.Nutrient.image}
					alt={content.Nutrient.name}
				></img>
				<p>{content.Fertiliser.name}</p>
				<p>{content.Manager.name}</p>
				<p>{content.Nutrient.name}</p>
			</div>
			<div className="farmTileFarmContainer">
				<Plots type={content.type} />
			</div>

			<div className="farmTileName">
				<p>Name: {content.garden} ✏️</p>
			</div>
		</FarmTileStyled>
	);
};

export default FarmTile;
