import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import Plots from "../../atoms/plots";

const NewFarmModalStyled = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	max-width: 25%;
	padding: 20px;
	border: 2px solid black;
	border-radius: 10px;
	z-index: 1000;
	text-align: center;
`;

const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
`;

const CarouselStyled = styled.div`
	display: flex;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	align-items: center;
	gap: 100px;
	padding: 10px;
	background-color: #999999;
`;

const FarmItemStyled = styled.div`
	flex: 0 0 auto;
	scroll-snap-align: start;
	text-align: center;
`;

const NewFarmModal = ({ handleBuy, ...props }) => {
	const [selectedFarmIndex, setSelectedFarmIndex] = useState(0);

	const NewFarmModalClasses = classNames(["newFarmModal"]);

	const list_of_farm_types = [
		{
			name: "Patch of Dirt",
			type: "patch-of-dirt",
			image: "https://via.placeholder.com/150",
			plots: 1,
			golden_plots: 0,
			liquid_space: 0,
			cost: 1000,
			fertilizers: 0,
			managers: 0,
			nutrients: 0,
		},
		{
			name: "Plant Pot",
			type: "plant-pot",
			image: "https://via.placeholder.com/150",
			plots: 4,
			golden_plots: 0,
			liquid_space: 1,
			cost: 5000,
			fertilizers: 0,
			managers: 0,
			nutrients: 0,
		},
		{
			name: "Greenhouse",
			type: "greenhouse",
			image: "https://via.placeholder.com/150",
			plots: 8,
			golden_plots: 0,
			liquid_space: 1,
			cost: 10000,
			fertilizers: 1,
			managers: 0,
			nutrients: 0,
		},
		{
			name: "Large Greenhouse",
			type: "large-greenhouse",
			image: "https://via.placeholder.com/150",
			plots: 13,
			golden_plots: 0,
			liquid_space: 2,
			cost: 50000,
			fertilizers: 1,
			managers: 0,
			nutrients: 0,
		},
		{
			name: "Platinum Greenhouse",
			type: "platinum-greenhouse",
			image: "https://via.placeholder.com/150",
			plots: 22,
			golden_plots: 1,
			liquid_space: 2,
			cost: 250000,
			fertilizers: 1,
			managers: 1,
			nutrients: 0,
		},
		{
			name: "Plot",
			type: "plot",
			image: "https://via.placeholder.com/150",
			plots: 44,
			golden_plots: 2,
			liquid_space: 4,
			cost: 500000,
			fertilizers: 1,
			managers: 1,
			nutrients: 1,
		},
		{
			name: "Farm",
			type: "farm",
			image: "https://via.placeholder.com/150",
			plots: 138,
			golden_plots: 6,
			liquid_space: 12,
			cost: 1000000,
			fertilizers: 1,
			managers: 1,
			nutrients: 1,
		},
	];

	const selectedFarm = list_of_farm_types[selectedFarmIndex];

	return (
		<>
			<OverlayStyled onClick={props.onClose} />
			<NewFarmModalStyled className={NewFarmModalClasses}>
				<CarouselStyled>
					{list_of_farm_types.map((farm, index) => (
						<FarmItemStyled
							key={index}
							onClick={() => setSelectedFarmIndex(index)}
						>
							<h2>{farm.name}</h2>
							<Plots type={farm.type} />
						</FarmItemStyled>
					))}
				</CarouselStyled>
				<div className="farmDetails">
					<p>Plots: {selectedFarm.plots}</p>
					<p>Golden Plots: {selectedFarm.golden_plots}</p>
					<p>Liquid Space: {selectedFarm.liquid_space}</p>
					<p>Cost: {selectedFarm.cost.toLocaleString()}</p>
					<p>Fertilizers: {selectedFarm.fertilizers}</p>
					<p>Managers: {selectedFarm.managers}</p>
					<p>Nutrients: {selectedFarm.nutrients}</p>
					<button onClick={handleBuy}>Buy</button>
				</div>
			</NewFarmModalStyled>
		</>
	);
};

export default NewFarmModal;
