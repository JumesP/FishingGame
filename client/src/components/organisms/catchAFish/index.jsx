// Update the CatchAFish component in `client/src/components/organisms/catchAFish/index.jsx`
import React from 'react';
import styled from 'styled-components';
import JustCaughtModal from '../../molecules/justCaughtModal';
import FishingMechanic from '../../molecules/fishingMechanic';

const CatchAFishStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
        padding: 10px;
        margin: 10px;
        background-color: #4CAF50;
        color: white;
        border: 1px black solid;
        border-radius: 5px;
    }
`;

const CatchAFish = ({ equipment, fish, caughtFish, isModalOpen, castRod, catchFish, closeModal, isRodCast, lowerNumber, higherNumber, isFMOpen, resetRodCast }) => {
    return (
        <CatchAFishStyled>
            {!isRodCast && <button onClick={castRod}>Cast Rod</button>}
            <ul>
                {equipment.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            {isFMOpen && isRodCast && !isModalOpen && (
                <FishingMechanic
                    lowerNumber={lowerNumber}
                    higherNumber={higherNumber}
                    onCatch={catchFish}
                />
            )}
            {isModalOpen && caughtFish && (
                <JustCaughtModal fish={caughtFish} onClose={closeModal} resetRodCast={resetRodCast} />
            )}
        </CatchAFishStyled>
    );
};

export default CatchAFish;