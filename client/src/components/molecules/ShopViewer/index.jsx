import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import ShopBundle from "../../atoms/shopBundle";
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
    width: 95%;
	height: fit-content;
`;

const ShopViewer = ({content, ...props}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedBundle, setSelectedBundle] = useState(null);

	const handleDetailsClick = (bundle) => {};
	const handleCloseModal = () => {};

	const HandlePurchase = () => {};

	const ShopClasses = classNames(["shop"]);

	const bundles = content?.bundle || [];

	console.log(content);
	console.log(content.bundle);
	// console.log(content.bundle.length);

	console.log(bundles)
	console.log(bundles.length)

	const divs = [];
	for (let i = 0; i < bundles.length; i++) {
		// const image = getImage(props.items[i]);
		// if (image === null) {
		// 	continue;
		// }

		divs.push(
			<ShopBundle
				key={i}
				bundle={content.bundle[i]}
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
		// 	{/*{isModalOpen && selectedItem && (*/}
		// 	{/*	<Modal*/}
		// 	{/*		item={selectedItem}*/}
		// 	{/*		onClose={handleCloseModal}*/}
		// 	{/*		onEquip={handleEquip}*/}
		// 	{/*		type="inventory"*/}
		// 	{/*	/>*/}
		// 	{/*)}*/}
		</ShopStyled>
	);
};

export default ShopViewer;
