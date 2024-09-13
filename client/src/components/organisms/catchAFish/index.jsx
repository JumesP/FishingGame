// Update the CatchAFish component in `client/src/components/organisms/catchAFish/index.jsx`
import React from 'react';
import styled from 'styled-components';
import JustCaughtModal from '../../molecules/justCaughtModal';
import FishingMechanic from '../../molecules/fishingMechanic';

const CatchAFishStyled = styled.div``;

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