import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const FishTankStyled = styled.div`
	position: relative;
	background-color: aqua;
	width: ${(props) => props.width || "600px"};
	height: ${(props) => props.height || "400px"};
	border: 3px solid black;
`;

const FishTank = (props) => {
	const FishTankClasses = classNames(["fishTank"]);

	return (
		<FishTankStyled {...props} className={FishTankClasses} id="fishTank">
			{props.children}
		</FishTankStyled>
	);
};

export default FishTank;
