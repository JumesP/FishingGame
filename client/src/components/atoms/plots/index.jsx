import React from "react";
import classNames from "classnames";
import styled from "styled-components";

import SinglePlot from "../singlePlot";

const PlotsStyled = styled.div`
	background-color: #596b50;
	display: grid;
	justify-items: center;
	padding: 10px;
	gap: 10px 10px;
`;

const Plots = (props) => {
	const PlotsClasses = classNames([
		props.type ? `${props.type}` : "patch-of-dirt",
		"plots",
	]);

	const SinglePlots = [];

	console.log(props.type);

	if (props.type === "patch-of-dirt") {
		SinglePlots.push(<SinglePlot plotType="dirt" />);
	} else if (props.type === "plant-pot") {
		for (let i = 0; i < 6; i++) {
			if (i === 0) {
				SinglePlots.push(<SinglePlot plotType="blank" />);
				continue;
			}
			if (i === 1) {
				SinglePlots.push(<SinglePlot plotType="water" />);
				continue;
			}
			SinglePlots.push(<SinglePlot plotType="dirt" />);
		}
	} else if (props.type === "greenhouse") {
		for (let i = 0; i < 9; i++) {
			if (i === 4) {
				SinglePlots.push(<SinglePlot plotType="water" />);
				continue;
			}
			SinglePlots.push(<SinglePlot plotType="dirt" />);
		}
	} else if (props.type === "large-greenhouse") {
		for (let i = 0; i < 15; i++) {
			if (i === 6 || i === 8) {
				SinglePlots.push(<SinglePlot plotType="water" />);
				continue;
			}
			SinglePlots.push(<SinglePlot plotType="dirt" />);
		}
	} else if (props.type === "platinum-greenhouse") {
		for (let i = 0; i < 25; i++) {
			if (i === 11 || i === 13) {
				SinglePlots.push(<SinglePlot plotType="water" />);
				continue;
			}
			SinglePlots.push(<SinglePlot plotType="dirt" />);
		}
	} else if (props.type === "plot") {
		for (let i = 0; i < 50; i++) {
			if (i === 21 || i === 23 || i === 26 || i === 28) {
				SinglePlots.push(<SinglePlot plotType="water" />);
				continue;
			}
			SinglePlots.push(<SinglePlot plotType="dirt" />);
		}
	} else if (props.type === "farm") {
		for (let i = 0; i < 180; i++) {
			// im sorry
			if (
				i === 19 ||
				i === 37 ||
				i === 55 ||
				i === 109 ||
				i === 127 ||
				i === 145
			) {
				SinglePlots.push(<SinglePlot plotType="golden" />);
				continue;
			}
			if (
				i === 40 ||
				i === 42 ||
				i === 45 ||
				i === 47 ||
				i === 50 ||
				i === 52 ||
				i === 130 ||
				i === 132 ||
				i === 135 ||
				i === 137 ||
				i === 140 ||
				i === 142
			) {
				SinglePlots.push(<SinglePlot plotType="water" />);
				continue;
			}
			if (i % 18 === 0 || i % 18 === 1 || i % 18 === 2) {
				SinglePlots.push(<SinglePlot plotType="blank" />);
				continue;
			}
			SinglePlots.push(<SinglePlot plotType="dirt" />);
		}
	} else {
		SinglePlots.push(<SinglePlot plotType="water" />);
	}

	console.log(SinglePlots);

	return (
		<PlotsStyled {...props} className={PlotsClasses} id="Plot">
			{SinglePlots}
		</PlotsStyled>
	);
};

export default Plots;
