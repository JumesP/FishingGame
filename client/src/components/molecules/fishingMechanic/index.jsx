import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Marker from '../../atoms/Marker';

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
    red ${props => props.lowerNumber || 20}%,
    green ${props => props.lowerNumber || 20}%,
    green ${props => props.higherNumber || 80}%,
    red ${props => props.higherNumber || 80}%,
    red 100%
  );
`;

const FishingMechanic = (props) => {
    const { lowerNumber, higherNumber, onCatch } = props;
    const [scaleNumber, setScaleNumber] = useState(0);
    const [direction, setDirection] = useState('up');
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [successfulCatch, setSuccessfulCatch] = useState(false);

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
        setSelectedNumber(scaleNumber);
        if (scaleNumber > lowerNumber && scaleNumber < higherNumber) {
            setSuccessfulCatch(true);
            onCatch(true);
        } else {
            setSuccessfulCatch(false);
            onCatch(false);
        }
    };

    return (
        <>
            <FishingMechanicStyled lowerNumber={lowerNumber} higherNumber={higherNumber}>
                {scaleNumber}
                <Marker style={{ bottom: `${scaleNumber}%` }} />
            </FishingMechanicStyled>
            <button onClick={handleClick}>Catch</button>
            <p>{selectedNumber}</p>
            <p>{successfulCatch.toString()}</p>
        </>
    );
};

export default FishingMechanic;