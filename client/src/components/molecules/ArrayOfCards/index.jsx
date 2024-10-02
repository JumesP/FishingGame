import React from "react";
import styled from "styled-components";
import Card from "../../atoms/card";

const ArrayOfCardsStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;
	border: 5px solid black;
`;

const ArrayOfCards = ({ cards = [], ...props }) => {
	const cardComponents = cards.map((card, index) => {
		const cardData = {
			title: card.title,
			description: card.description,
			url: card.url,
		};

		return (
			<Card
				key={index}
				content={cardData}
				rarity={card.rarity}
				{...card}
			/>
		);
	});

	return <ArrayOfCardsStyled {...props}>{cardComponents}</ArrayOfCardsStyled>;
};

export default ArrayOfCards;
