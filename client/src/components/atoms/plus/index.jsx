import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

const PlusStyled = styled.button`
	display: flex;
	height: 250px;
	width: 250px;
	border: 5px dotted black;

	& > p {
		margin: auto;
		font-size: 6rem;
	}
`;

const Plus = ({ handlePlusClick, ...props }) => {
	const PlusClasses = classNames(["plus"]);

	return (
		<PlusStyled className={PlusClasses} onClick={handlePlusClick}>
			<p>+</p>
		</PlusStyled>
	);
};

export default Plus;
