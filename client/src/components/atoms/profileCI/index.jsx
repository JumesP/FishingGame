import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import getImage from "../../../utils/imageGenerator";

const ProfileCIStyled = styled.div`
	position: relative;
	height: 75px;
	width: 75px;
	border: 1px solid #000;
	margin: 0 10px;

	.occupacitor {
		height: 100%;
		width: 100%;
		position: absolute;
		background-color: #282c34;
		opacity: 35%;
	}

	img {
		height: 100%;
		width: 100%;
		opacity: 100%;
		position: absolute;
	}
`;

const ProfileCI = ({ Item }) => {
	const image = getImage(Item);

	const ProfileCIClasses = classNames([
		Item.Rarity ? `rarity-${Item.Rarity.toLowerCase()}` : "rarity-common",
		"profileCI",
	]);

	return (
		<ProfileCIStyled className={ProfileCIClasses}>
			<div className="occupacitor"></div>
			<img src={image} alt="Item" />
		</ProfileCIStyled>
	);
};

export default ProfileCI;
