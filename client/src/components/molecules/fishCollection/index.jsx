import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

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
            <div key={i} className="FCfish">
                <div className="FCfishImage">
                    <img src={"images/blue.png"} alt="fish" />
                </div>
                <div className="FCfishHeader">Blue Fish</div>
                <div className="FCfishDetails">
                    <p>$1</p>
                    <p>10♡</p>
                    <p>5g</p>
                    <p>32 cm</p>
                </div>
                <button>Details</button>
                {/*<p>{i + 1}</p>*/}
            </div>
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