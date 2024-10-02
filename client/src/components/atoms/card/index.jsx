import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

const Rarity = {
	COMMON: "common",
	UNCOMMON: "uncommon",
	RARE: "rare",
	EPIC: "epic",
	LEGENDARY: "legendary",
	MYSTICAL: "mystical",
};

const CardStyled = styled.div`
	display: grid;
	grid-template-rows: 1fr 5fr 2fr;
	justify-content: center;
	justify-items: center;
	align-items: center;

	border: 5px solid black;
	border-radius: 50px;
	box-shadow:
		0 10px 20px 0 rgba(0, 0, 0, 0.2),
		0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	height: 600px;
	padding: 5px;
`;

const Card = (props) => {
	// const content = props.children.map

	// const children = content.map((text, index) => {
	//     if (typeof text === 'object') {
	//         return text;
	//     }
	//     else if (typeof text === 'string') {
	//         // if (props.firstHeader && index === 0) {
	//         //     props.type = "subtitle";
	//         // } else {
	//         //     props.type = "md";
	//         // }
	//         return (
	//             <p
	//                 {...props}
	//             >
	//                 {text}
	//             </p>
	//             <img src={}>
	//         )
	//     }
	// })

	const CardClasses = classNames([
		props.rarity ? `rarity-${props.rarity}` : "rarity-common",
		"card",
	]);

	return (
		<CardStyled {...props} className={CardClasses}>
			<h1 className="title">{props.content.title}</h1>
			<img src={props.content.url} alt=""></img>
			<p className="desc">{props.content.description}</p>
		</CardStyled>
	);
};

export default Card;
