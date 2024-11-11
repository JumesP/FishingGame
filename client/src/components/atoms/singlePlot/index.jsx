import React from "react";
import classNames from "classnames";
import styled from "styled-components";

const SinglePlotStyled = styled.div`
	min-width: 25px;
	min-height: 25px;
	width: 100%;
	max-width: 200px;
	aspect-ratio: 1;
	border: ${(props) =>
		props.plotType === "blank" ? "none" : "1px solid black"};
	border-radius: 20%;
`;

const SinglePlot = (props) => {
	const SinglePlotClasses = classNames([
		props.plotType ? `sp-type-${props.plotType}` : "type-dirtier",
		"singlePlot",
	]);

	const content = {};

	return (
		<SinglePlotStyled {...props} className={SinglePlotClasses} id="Plot">
			{props.children}
		</SinglePlotStyled>
	);
};

export default SinglePlot;
