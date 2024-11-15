import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import InventoryItem from "../../atoms/inventoryItem";
import Modal from "../../atoms/modal";
import getImage from "../../../utils/imageGenerator";

const InventoryStyled = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: #999999;
	border: 5px solid black;
	border-radius: 25px;
	margin: auto;
	width: 80%;
	height: fit-content;
`;

const InventoryViewer = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleDetailsClick = (item) => {
		setSelectedItem(item);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedItem(null);
	};

	const handleEquip = () => {
		if (selectedItem !== null) {
			console.log(
				"selected item: ",
				JSON.stringify(selectedItem, null, 2),
			); // Serialize selectedItem for logging
			let item = JSON.stringify(selectedItem, null, 2);
			fetch("/api/updateCurrentInventorySingle", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ item }), // Correctly serialize selectedItem
			})
				.then((response) => response.json())
				// .then((data) => console.log(data))
				.catch((error) => console.error("Error:", error));
		} else {
			console.log("selected item is null");
		}
	};

	const InventoryClasses = classNames(["inventory"]);

	const divs = [];
	for (let i = 0; i < props.inventory.length; i++) {
		const image = getImage(props.inventory[i]);
		if (image === null) {
			continue;
		}

		divs.push(
			<InventoryItem
				key={i}
				item={{
					image: image,
					header: props.inventory[i].ItemName,
					details: {
						enchants: props.inventory[i].Enchants,
						rarity: props.inventory[i].Rarity,
						durability: props.inventory[i].Durability,
						type: props.inventory[i].Type,
					},
					object: props.inventory[i],
				}}
				onDetailsClick={handleDetailsClick}
			/>,
		);
	}

	return (
		<InventoryStyled className={InventoryClasses} {...props}>
			<h1>Inventory:</h1>
			<div className="inventoryItems">{divs}</div>
			<div className="pageSelector">
				<button>&lt;</button>
				<button>&gt;</button>
			</div>
			{isModalOpen && selectedItem && (
				<Modal
					item={selectedItem}
					onClose={handleCloseModal}
					onEquip={handleEquip}
				/>
			)}
		</InventoryStyled>
	);
};

export default InventoryViewer;
