import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";
import FishCollectionItem from "../../fishCollectionItem";

const FishCollectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #999999;
  border: 5px solid black;
  border-radius: 25px;
  height: fit-content;
  width: fit-content;
  margin: auto;
`;

const FishCollection = props => {

    const FishCollectionClasses = classNames([
        'fishCollection',
    ])

    const divs = [];
    for (let i = 0; i < 56; i++) {
        divs.push(
            <FishCollectionItem
                fish={{
                    image: "images/blue.png",
                    header: "Blue Fish",
                    details: {
                        price: "$1",
                        health: "10♡",
                        weight: "5g",
                        length: "32 cm",
                    },
                }}
            />
        );
    }

    return(
        <FishCollectionStyled
            className={FishCollectionClasses}
            {...props}
        >
            <h1>Fish Collection:</h1>
            <div className="FishCollectionFishContainer">
                {divs}
            </div>
            <div className="pageSelector">
                <button>&lt;</button>
                <button>&gt;</button>
            </div>

        </FishCollectionStyled>
    )
}

export default FishCollection;