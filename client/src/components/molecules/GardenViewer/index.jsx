import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import FarmTile from "../FarmTile";
import Plus from "../../atoms/plus";
import NewFarmModal from "../NewFarmModal";

const GardenViewerStyled = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	text-align: center;
	background-color: #999999;
	border: 5px solid black;
	border-radius: 25px;
	margin: 1% auto 1% auto;
	width: 90%;
	height: fit-content;
	gap: 15px;
	padding: 1%;
`;

const GardenViewer = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tempData = [
		{
			Garden: "Farm 1",
			type: "farm",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager: {
				ItemName: "Managers",
				Image: "images/worker.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Manager",
			},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
			// content: {
			// 	name: "seed1",
			// 	location: "A1",
			// }
		},
		{
			Garden: "Farm 2",
			type: "farm",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager: {
				ItemName: "Managers",
				Image: "images/worker.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Manager",
			},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		},
		{
			Garden: "Farm 3",
			type: "farm",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager:
			{
				ItemName: "Managers",
				Image: "images/worker.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Manager",
			},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		},
		{
			Garden: "Farm 4",
			type: "patch-of-dirt",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager:
				{
					ItemName: "Managers",
					Image: "images/worker.png",
					Enchants: 0,
					Rarity: "Common",
					Durability: 100,
					Type: "Manager",
				},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		},
		{
			Garden: "Farm 5",
			type: "large-greenhouse",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager:
				{
					ItemName: "Managers",
					Image: "images/worker.png",
					Enchants: 0,
					Rarity: "Common",
					Durability: 100,
					Type: "Manager",
				},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		},
		{
			Garden: "Farm 6",
			type: "plot",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager:
				{
					ItemName: "Managers",
					Image: "images/worker.png",
					Enchants: 0,
					Rarity: "Common",
					Durability: 100,
					Type: "Manager",
				},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		},
		{
			Garden: "Farm 7",
			type: "plot",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "images/fertiliser.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager:
				{
					ItemName: "Managers",
					Image: "images/worker.png",
					Enchants: 0,
					Rarity: "Common",
					Durability: 100,
					Type: "Manager",
				},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "images/nutrient.png",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		}
	];

	const handlePlusClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleBuy = () => {
		console.log("Buy button clicked");
	};

	return (
		<GardenViewerStyled>
			{tempData.map((farm, index) => (
				<FarmTile key={index} content={farm} />
			))}
			<Plus handlePlusClick={handlePlusClick} />
			{isModalOpen && (
				<NewFarmModal
					onClose={handleCloseModal}
					handleBuy={handleBuy}
				/>
			)}
		</GardenViewerStyled>
	);
};

export default GardenViewer;
