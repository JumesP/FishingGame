// Update the Catch component in `client/src/pages/Catch.js`
import React, { useEffect, useState } from "react";
import CatchAFish from "../components/organisms/catchAFish";

const Catch = () => {
	const [fish, setFish] = useState(null);
	const [allFish, setAllFish] = useState(null);
	const [caughtFish, setCaughtFish] = useState(null);
	const [equipment, setEquipment] = useState([]);
	const [higherNumber, setHigherNumber] = useState(80);
	const [lowerNumber, setLowerNumber] = useState(60);
	const [higherLegNumber, setHigherLegNumber] = useState(0);
	const [lowerLegNumber, setLowerLegNumber] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isRodCast, setIsRodCast] = useState(false);
	const [isFMOpen, setIsFMOpen] = useState(false);

	useEffect(() => {
		// Fetch current equipment via API call
		fetch("http://localhost:5001/api/currentInventory")
			.then((response) => response.json())
			.then((data) => setEquipment(data));
	}, []);

	useEffect(() => {
		// Fetch higher and lower nums
		fetch("http://localhost:5001/api/FishBarHnL")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setLowerNumber(data[0].lowerNum);
				setHigherNumber(data[0].higherNum); // Correct casing here
				setLowerLegNumber(data[1].lowerLegNum);
				setHigherLegNumber(data[1].higherLegNum);
			});

		console.log("Lower Number: " + lowerNumber);
		console.log("Higher Number: " + higherNumber);
		console.log("Lower Leg Number: " + lowerLegNumber);
		console.log("Higher Leg Number: " + higherLegNumber);
	}, [isRodCast]);

	const castRod = () => {
		setIsRodCast(true);
		setIsFMOpen(true);
		// Fetch random fish based on current equipment
		fetch("http://localhost:5001/api/catchFish", {
			method: "POST",
			body: JSON.stringify({ equipment }),
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((data) => setFish(data))
			.catch((error) => console.error("Error catching fish:", error));
	};

	const getAllFish = async () => {
		try {
			const response = await fetch("http://localhost:5001/api/catchFish");
			if (response.ok) {
				const allFish = await response.json();
				setAllFish(allFish);
			} else {
				console.error("Failed to catch fish:", response.statusText);
			}
		} catch (error) {
			console.error("Error catching fish:", error);
		}
	};

	const catchFish = (isSuccessful) => {
		if (isSuccessful) {
			setCaughtFish(fish);
			setIsModalOpen(true);
		} else {
			alert("You did not catch a fish!");
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const resetRodCast = () => {
		setIsRodCast(false);
	};

	return (
		<>
			<CatchAFish
				equipment={equipment}
				fish={fish}
				caughtFish={caughtFish}
				isModalOpen={isModalOpen}
				castRod={castRod}
				catchFish={catchFish}
				closeModal={closeModal}
				isRodCast={isRodCast}
				isFMOpen={isFMOpen}
				lowerNumber={lowerNumber}
				higherNumber={higherNumber}
				lowerLegNumber={lowerLegNumber}
				higherLegNumber={higherLegNumber}
				resetRodCast={resetRodCast} // Pass the function as a prop
			/>
			{allFish && (
				<div>
					<h2>Fish Caught:</h2>
					<p>{JSON.stringify(allFish)}</p>
				</div>
			)}
		</>
	);
};

export default Catch;
