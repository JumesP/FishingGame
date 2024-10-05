import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Marker from "../../atoms/Marker";
import classNames from "classnames";

const FishingMechanicStyled = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	width: 25px;
	border: 1px solid black;
	border-radius: 5px;
	// background: linear-gradient(
	// 	to top,
	// 	red,
	// 	red 5%,
	// 	yellow 5%,
	// 	yellow 8%,
	// 	red 8%,
	// 	red ${(props) => props.lowerNumber || 20}%,
	// 	green ${(props) => props.lowerNumber || 20}%,
	// 	green ${(props) => props.higherNumber || 80}%,
	// 	red ${(props) => props.higherNumber || 80}%,
	// 	red 100%
	// );
`;

const FishingMechanic = (props) => {
	const {
		lowerNumber,
		higherNumber,
		lowerLegNumber,
		higherLegNumber,
		onCatch,
	} = props;
	const fishingMechanicRef = useRef(null);
	const [scaleNumber, setScaleNumber] = useState(0);
	const [direction, setDirection] = useState("up");
	const [selectedNumber, setSelectedNumber] = useState(null);
	const [successfulCatch, setSuccessfulCatch] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setScaleNumber((prevScaleNumber) => {
				if (prevScaleNumber === 100) {
					setDirection("down");
					return prevScaleNumber - 1;
				} else if (prevScaleNumber === 0) {
					setDirection("up");
					return prevScaleNumber + 1;
				} else {
					return direction === "up"
						? prevScaleNumber + 1
						: prevScaleNumber - 1;
				}
			});
		}, 100);
		return () => clearInterval(interval);
	}, [direction]);

	useEffect(() => {
		console.log("\n\n\nrod placement generator");
		console.log("lower number: " + lowerNumber);
		console.log("higher number: " + higherNumber);
		console.log("lower leg number: " + lowerLegNumber);
		console.log("higher leg number: " + higherLegNumber);
		console.log("rod placement generator over");
		if (fishingMechanicRef.current) {
			if (higherNumber < lowerLegNumber) {
				// Legenary fish is above ragular catch
				fishingMechanicRef.current.style.background = `linear-gradient(
					to top,
					red,
					red ${lowerNumber || 20}%,
					green ${lowerNumber || 20}%,
					green ${higherNumber || 80}%,
					red ${higherNumber || 80}%,
					red ${lowerLegNumber || 20}%,
					yellow ${lowerLegNumber || 20}%,
					yellow ${higherLegNumber || 80}%,
					red ${higherLegNumber || 80}%,
					red 100%
				)`;
			} else if (lowerNumber > higherLegNumber) {
				// Legenary fish is below ragular catch
				fishingMechanicRef.current.style.background = `linear-gradient(
					to top,
					red,
					red ${lowerLegNumber || 20}%,
					yellow ${lowerLegNumber || 20}%,
					yellow ${higherLegNumber || 80}%,
					red ${higherLegNumber || 80}%,
					red ${lowerNumber || 20}%,
					green ${lowerNumber || 20}%,
					green ${higherNumber || 80}%,
					red ${higherNumber || 80}%,
					red 100%
				)`;
			}
		}
	}, [lowerNumber, higherNumber, lowerLegNumber, higherLegNumber]);

	const handleClick = () => {
		setSelectedNumber(scaleNumber);
		console.log("lower number: " + lowerNumber);
		console.log("higher number: " + higherNumber);
		console.log("selected number: " + scaleNumber);
		if (scaleNumber > lowerNumber && scaleNumber < higherNumber) {
			setSuccessfulCatch(true);
			onCatch(true);
		} else if (
			scaleNumber > lowerLegNumber &&
			scaleNumber < higherLegNumber
		) {
			// Caught a legendary fish
			setSuccessfulCatch(true);
			onCatch(true);
		} else {
			setSuccessfulCatch(false);
			onCatch(false);
		}
	};

	// const FishingMechanicClasses = classNames(["fishingMechanic"]);

	return (
		<>
			<FishingMechanicStyled
				lowerNumber={lowerNumber}
				higherNumber={higherNumber}
				lowerLegNumber={lowerLegNumber}
				higherLegNumber={higherLegNumber}
				ref={fishingMechanicRef}
			>
				{scaleNumber}
				<Marker style={{ bottom: `${scaleNumber}%` }} />
			</FishingMechanicStyled>
			<button onClick={handleClick}>Catch</button>
			<p>{selectedNumber}</p>
			<p>{successfulCatch.toString()}</p>
		</>
	);
};

export default FishingMechanic;
