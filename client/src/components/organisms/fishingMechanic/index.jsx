import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";

const FishingMechanicStyled = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
  height: 300px;
  width: 50px;
  border: 1px solid black;
  background-color: aqua;
`;


export const FishingMechanic = () => {

    const [ScaleNumber, setScaleNumber] = useState(0);


    let i = 0
    while (i < 1) {
        setTimeout(() => {
            setScaleNumber(ScaleNumber + 1);
            if (ScaleNumber === 100) {
                i = 2;
            }
        }, 10);
        i++;
    }

    return (
        <FishingMechanicStyled>
            {ScaleNumber}
        </FishingMechanicStyled>
    );
}

export default FishingMechanic;