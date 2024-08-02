import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

// import bluefish from '../../../../public/images/blue.png';
// import salmonfish from '../../../../public/images/salmon.png';
// import codfish from '../../../../public/images/cod.png';
// import sharkfish from '../../../../public/images/shark.png';
// import whalefish from '../../../../public/images/whale.png';

// const absolutePath= path.resolve('../../../../public/images/whale.png');
//
// console.log("abs path: " + absolutePath);

// const fishImages = {
//     salmon: salmonfish,
//     blue: bluefish,
//     cod: codfish,
//     shark: sharkfish,
//     whale: whalefish,
// }
//
// const fishStyles = {
//     SALMON: "salmon",
//     BLUE: "blue",
//     COD: "cod",
// }

const FishStyled = styled.div`
  background: url(${props => props.path || "/images/blue.png"}) no-repeat;
  background-size: contain;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  position: absolute;
`;


const Fish = props => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [initialPositionSet, setInitialPositionSet] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const parent = document.getElementById('fishTank');
            if (parent) {
                const fishHeight = props.height || 100;
                const fishWidth = props.width || 100;
                const maxTop = parent.offsetHeight - fishHeight;
                const maxLeft = parent.offsetWidth - fishWidth;

                let newTop, newLeft;
                if (!initialPositionSet) {
                    // Generate a completely random initial position
                    newTop = Math.random() * maxTop;
                    newLeft = Math.random() * maxLeft;
                    setInitialPositionSet(true);
                } else {
                    // Generate a new position within 5 pixels of the current position
                    newTop = Math.min(maxTop, Math.max(0, position.top + Math.random() * 10 - 5));
                    newLeft = Math.min(maxLeft, Math.max(0, position.left + Math.random() * 10 - 5));
                }

                setPosition({ top: newTop, left: newLeft });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [position, initialPositionSet]);

    const FishClasses = classNames([
        (props.fishType === "whale") ? "whale" : null,
        (props.fishType === "shark") ? "shark" : null,
        (props.fishType) ? props.fishType : null,
        "fish"
    ]);

    return (
        <FishStyled
            {...props}
            className={FishClasses}
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
        </FishStyled>
    )
}

export default Fish;