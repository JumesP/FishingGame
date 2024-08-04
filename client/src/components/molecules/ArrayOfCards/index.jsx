import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

// import Card from "../../atoms/index";
import Card from "../../atoms/card";

const ArrayOfCardsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ArrayOfCards = ({ content = [], ...props }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cards = content.map((card, index) => {
            return (
                <Card
                    key={index}
                    {...card}
                />
            )
        });

        setCards(cards);
    }, [content]);

    return (
        <ArrayOfCardsStyled
            {...props}
        >
            {cards}
        </ArrayOfCardsStyled>
    )
}

export default ArrayOfCards;