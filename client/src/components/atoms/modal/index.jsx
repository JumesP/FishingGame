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

const Modal = ({ item, onClose }) => {
  return (
    <>
      <OverlayStyled onClick={onClose} />
      <ModalStyled>
        <h2>{item.header}</h2>
        <p>What would you like to do with this item?</p>
        <button onClick={() => alert('Equipped!')}>Equip</button>
        <button onClick={() => alert('Sold!')}>Sell</button>
        <button onClick={onClose}>Close</button>
      </ModalStyled>
    </>
  );
};

export default Modal;