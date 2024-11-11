import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const FarmTileStyled = styled.div`
	display: grid;
	grid-template-rows: 1fr 3.75fr 1fr;
	justify-items: center;
	align-items: center;

	background-color: #596b50;
	border: 5px solid black;
	border-radius: 50px;
	box-shadow:
		0 10px 20px 0 rgba(0, 0, 0, 0.2),
		0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	height: 600px;
	padding: 5px;
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
		}
	}
	.farmTileFarm {
		width: 100%;
		height: 100%;
	}
	& > .farmTileName,
	& > .farmTileName > p {
		font-size: 2rem;
	}
`;

const FarmTile = (props) => {
	const FarmTileClasses = classNames(["FarmTile"]);

	const content = {};

	return (
		<FarmTileStyled {...props} className={FarmTileClasses} id="FarmTile">
			<div className="farmTileEquipment">
				<div>F</div>
				<div>M</div>
				<div>N</div>
				<p>Fertiliser</p>
				<p>Manager</p>
				<p>Nutrient</p>
			</div>

			<div className="farmTileFarm">Farm</div>

			<div className="farmTileName">
				<p>Name: Farm 1 ✏️</p>
			</div>
		</FarmTileStyled>
	);
};

export default FarmTile;
