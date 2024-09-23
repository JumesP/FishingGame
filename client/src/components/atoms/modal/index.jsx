import React from 'react';
import styled from 'styled-components';

const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 1000;
`;

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Modal = ({ item, onClose, onEquip, onSell }) => {

    const content = {
        image: item.image,
        title: item.title,
        details: {
            enchants: item.details.enchants,
            rarity: item.details.rarity,
            durability: item.details.durability,
            type: item.details.type,
        }

    }

    return (
        <>
            <OverlayStyled onClick={onClose} />
            <ModalStyled>
                <div>
                    <h2>{content.title}</h2>
                    <img src={content.image} alt=""/>
                    <div className="">
                        {Object.values(content.details).map((detail, index) => (
                            <p key={index}>{detail}</p>
                        ))}
                    </div>
                </div>
                <p>What would you like to do with this item?</p>
                <div>
                    <button onClick={onEquip}>Equip</button>
                    <button onClick={onSell}>Sell</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </ModalStyled>
        </>
    );
};

export default Modal;