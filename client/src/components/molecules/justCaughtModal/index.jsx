// Update the JustCaughtModal component in `client/src/components/molecules/justCaughtModal/index.jsx`
import React, { useEffect } from "react";
import styled from "styled-components";

const JustCaughtModalStyled = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: white;
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px;
	z-index: 100;
	width: 80%;
	height: fit-content;
`;

const JustCaughtModal = (props) => {
	const { fish, onClose, resetRodCast } = props;

	const JustCaughtModalClasses = `
        JustCaughtModal
    `;

	const contentImg =
		"/images/" + props.fish.type + ".png" ||
		"https://via.placeholder.com/150";
	const content = {
		type: props.fish.type,
		// img: "/images/" + props.fish.type + ".png" || "https://via.placeholder.com/150",
		value: props.fish.value,
		weight: props.fish.weight,
		length: props.fish.length,
		health: props.fish.health,
	};

	// ADDED DATABASE FUNCTIONALITY TO EITHER SELL OR SAVE THE FISH!!!!

	const handleSell = async () => {
		// Handle selling the fish
		try {
			const response = await fetch(
				"http://localhost:5001/api/sellFishToDB",
				{
					method: "POST",
					body: JSON.stringify(fish),
					headers: { "Content-Type": "application/json" },
				},
			);

			if (!response.ok) {
				throw new Error("Failed to save fish");
			}

			alert("Fish sold!");
			resetRodCast(); // Call the function to reset isRodCast
			onClose();
		} catch (error) {
			console.error("Error saving fish:", error);
			alert("Failed to save fish.");
		}
	};

	const handleSave = async () => {
		try {
			const response = await fetch(
				"http://localhost:5001/api/saveFishToDB",
				{
					method: "POST",
					body: JSON.stringify(fish),
					headers: { "Content-Type": "application/json" },
				},
			);

			if (!response.ok) {
				throw new Error("Failed to save fish");
			}

			alert("Fish saved!");
			resetRodCast(); // Call the function to reset isRodCast
			onClose();
		} catch (error) {
			console.error("Error saving fish:", error);
			alert("Failed to save fish.");
		}
	};

	return (
		<JustCaughtModalStyled className={JustCaughtModalClasses}>
			<button onClick={onClose}>Close</button>
			<hr />
			<div className="JCcontent">
				<img src={contentImg} alt="Fish" className="JCFish" />
				<ul>
					{Object.entries(content).map(([key, value], index) => (
						<li key={index}>
							{key}: {value}
						</li>
					))}
				</ul>
			</div>
			<hr />
			<div className="buttonContainer">
				<button onClick={handleSell} className="SellorSave">
					Sell
				</button>
				<button onClick={handleSave} className="SellorSave">
					Save
				</button>
			</div>
		</JustCaughtModalStyled>
	);
};

export default JustCaughtModal;
