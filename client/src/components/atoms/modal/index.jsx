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
	text-align: center;
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
    },
  };

  return (
    <>
      <OverlayStyled onClick={onClose} />
      <ModalStyled>
        <div className="content">
          <h2>{content.title}</h2>
          <hr />
          <img src={content.image} alt="" />
          <hr />
          <div>
            {Object.entries(content.details).map(([key, value], index) => (
              <React.Fragment key={index}>
                <p style={{ textAlign: 'right', paddingRight: '10px' }}><strong>{key}:</strong></p>
                <p style={{ textAlign: 'left', paddingLeft: '10px' }}>{value}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="actions">
            <h2>What would you like to do with this item?</h2>
            <button onClick={onEquip}>---</button>
            <button onClick={onSell}>---</button>
            <button onClick={onClose}>---</button>
            <button onClick={onEquip}>Equip</button>
            <button onClick={onSell}>Sell</button>
            <button onClick={onClose}>Close</button>
        </div>
      </ModalStyled>
    </>
  );
};

export default Modal;