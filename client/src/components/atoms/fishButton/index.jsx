import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

const FishButtonStyled = styled.button`
	padding: 10px;
	background-color: orange;
	border-radius: 20%;
`;

const FishButton = (props) => {
	const FishButtonClasses = classNames([
		props.size ? `fishbutton-${props.size}` : "fishbutton-md",
		"fishbutton",
	]);

	const handleClick = async () => {
		const response = await fetch("http://localhost:3000/api/catchFish");
		const data = await response.json();
		console.log(data);
		// Here you can handle the response data
	};

	return (
		<FishButtonStyled
			{...props}
			className={FishButtonClasses}
			onClick={handleClick}
		>
			{props.children}
		</FishButtonStyled>
	);
};

export default FishButton;
