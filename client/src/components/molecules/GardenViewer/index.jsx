import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import FarmTile from "../FarmTile";
import Plus from "../../atoms/plus";
import NewFarmModal from "../NewFarmModal";

const GardenViewerStyled = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	background-color: #999999;
	border: 5px solid black;
	border-radius: 25px;
	margin: 1% auto 1% auto;
	width: 90%;
	height: fit-content;
	gap: 1%;
	padding: 1%;
`;

const GardenViewer = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tempData = [
		{
			Garden: "Farm 1",
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "https://via.placeholder.com/50",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager: {
				ItemName: "Managers",
				Image: "https://via.placeholder.com/100",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Manager",
			},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "https://via.placeholder.com/150",
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
			Fertiliser: {
				ItemName: "Fertilisers",
				Image: "https://via.placeholder.com/50",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Fertiliser",
			},
			Manager: {
				ItemName: "Managers",
				Image: "https://via.placeholder.com/100",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Manager",
			},
			Nutrient: {
				ItemName: "Nutrients",
				Image: "https://via.placeholder.com/150",
				Enchants: 0,
				Rarity: "Common",
				Durability: 100,
				Type: "Nutrient",
			},
		},
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
