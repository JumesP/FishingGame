import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";

import Marker from "../../atoms/Marker";

const FishingMechanicStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 25px;
  border: 1px solid black;
  border-radius: 5px;
  background: linear-gradient(
          to top,
          red,
          red ${props  => props.lowerNumber || 20}%,
          green ${props => props.lowerNumber || 20}%,
          green ${props => props.higherNumber || 80}%,
          red ${props => props.higherNumber || 80}%,
          red 100%
  )
`;

export const FishingMechanic = props => {
    const [ScaleNumber, setScaleNumber] = useState(0);
    const [direction, setDirection] = useState('up');
    const [selectedNumber, setSelectedNumber] = useState();
    const [SuccessfulCatch, setSuccessfulCatch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setScaleNumber(prevScaleNumber => {
                if (prevScaleNumber === 100) {
                    setDirection('down');
                    return prevScaleNumber - 1;
                } else if (prevScaleNumber === 0) {
                    setDirection('up');
                    return prevScaleNumber + 1;
                } else {
                    return direction === 'up' ? prevScaleNumber + 1 : prevScaleNumber - 1;
                }
            });
        }, 100);
        return () => clearInterval(interval);
    }, [direction]);

    const handleClick = () => {
        setSelectedNumber(ScaleNumber)

        console.log(props.lowerNumber)
        console.log(props.higherNumber)

        if (ScaleNumber > props.lowerNumber && ScaleNumber < props.higherNumber) {
            setSuccessfulCatch(true)
            console.log('You caught a fish!');
        // if (ScaleNumber > 20 && ScaleNumber < 80) {
        //     setSuccessfulCatch(true)
        //     console.log('You caught a fish!');
        } else {
            setSuccessfulCatch(false)
            console.log('You did not catch a fish!');
        }
    }

    return (
        <>
            <FishingMechanicStyled
                {...props}
            >
                {ScaleNumber}
                <Marker
                    style={{ bottom: `${ScaleNumber}%` }}


                />
            </FishingMechanicStyled>
            <button onClick={handleClick}>Button</button>
            <p>{selectedNumber}</p>
            <p>{SuccessfulCatch.toString()}</p>
        </>
    );
}

export default FishingMechanic;