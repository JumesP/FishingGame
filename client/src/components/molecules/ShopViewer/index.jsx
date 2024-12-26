import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import ShopItem from "../../atoms/shopItem";
import Modal from "../../atoms/modal";
import getImage from "../../../utils/imageGenerator";

const ShopStyled = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: #999999;
	border: 5px solid black;
	border-radius: 25px;
	margin: 1% auto 1% auto;
	width: 90%;
	height: fit-content;
`;

const ShopViewer = ({items, ...props}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	console.log(items);

	const handleDetailsClick = (item) => {};
	const handleCloseModal = () => {};

	const HandlePurchase = () => {};

	const ShopClasses = classNames(["shop"]);

	const divs = [];
	for (let i = 0; i < items.length; i++) {
		// const image = getImage(props.items[i]);
		// if (image === null) {
		// 	continue;
		// }

		divs.push(
			<ShopItem
				key={i}
				item={items[i]}
				image={items.image}
				onClick={handleDetailsClick}
			/>,
		);
	}

	return (
		<ShopStyled className={ShopClasses} {...props}>
			<h1>Shop Items:</h1>
			<div className="inventoryItems">{divs}</div>
			<div className="pageSelector">
				<button>&lt;</button>
				<button>&gt;</button>
			</div>
			{/*{isModalOpen && selectedItem && (*/}
			{/*	<Modal*/}
			{/*		item={selectedItem}*/}
			{/*		onClose={handleCloseModal}*/}
			{/*		onEquip={handleEquip}*/}
			{/*		type="inventory"*/}
			{/*	/>*/}
			{/*)}*/}
		</ShopStyled>
	);
};

export default ShopViewer;
