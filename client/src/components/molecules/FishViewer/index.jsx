import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";
import FishCollectionItem from "../../atoms/fishCollectionItem";
import Modal from "../../atoms/modal";

//	make image generator work for this

const FishManagementStyled = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: #999999;
	border: 5px solid black;
	border-radius: 25px;
	margin: 1% auto 1% auto;
	width: 95%; // eventually change to 100%
	height: fit-content;
`;

const FishManagement = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedFish, setSelectedFish] = useState(null);

	const handleDetailsClick = (fish) => {
		console.log(fish);
		setSelectedFish(fish);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedFish(null);
	};

	const handleSell = () => {
		console.log("sell");
	};

	const handleEquip = () => {
		console.log("equip");
	};

	const FishManagementClasses = classNames(["fish-management"]);

	const divs = [];
	for (let i = 0; i < props.fish.length; i++) {
		const image = "images/" + props.fish[i].Type + ".png";
		if (image === null) {
			continue;
		}

		// console.log(props.fish[i]);

		divs.push(
			<FishCollectionItem
				key={i}
				fish={{
					image: image,
					title: props.fish[i].ItemName,
					details: {
						type: props.fish[i].Type,
						weight: props.fish[i].Weight,
						length: props.fish[i].Length,
						value: props.fish[i].Value,
						health: props.fish[i].Health,
					},
				}}
				onDetailsClick={handleDetailsClick}
			/>,
		);
	}

	return (
		<FishManagementStyled className={FishManagementClasses} {...props}>
			<h1>Fishes:</h1>
			<div className="inventoryItems">{divs}</div>
			<div className="pageSelector">
				<button>&lt;</button>
				<button>&gt;</button>
			</div>
			{isModalOpen && selectedFish && (
				<Modal
					item={selectedFish}
					onClose={handleCloseModal}
					onEquip={handleEquip}
					onSell={handleSell}
					type="fish"
				/>
			)}
		</FishManagementStyled>
	);
};

export default FishManagement;
