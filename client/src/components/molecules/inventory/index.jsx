import React, { useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";
import InventoryItem from "../../atoms/inventoryItem";
import Modal from "../../atoms/modal";

const InventoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #999999;
  border: 5px solid black;
  border-radius: 25px;
  margin: auto;
  width: 80%;
  height: fit-content;
`;

const InventoryViewer = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDetailsClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const InventoryClasses = classNames([
    'inventory',
  ]);

  const divs = [];
  for (let i = 0; i < 56; i++) {
    divs.push(
      <InventoryItem
        key={i}
        item={{
          image: 'images/rod.png',
          header: 'Common Rod',
          details: {
            enchants: '🥽',
            rarity: 'Common',
            durability: '100%',
            type: 'Tool',
          }
        }}
        onDetailsClick={handleDetailsClick}
      />
    );
  }

  return (
    <InventoryStyled className={InventoryClasses} {...props}>
      <h1>Inventory:</h1>
      <div className="inventoryItems">
        {divs}
      </div>
      <div className="pageSelector">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
      {isModalOpen && selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} />
      )}
    </InventoryStyled>
  );
};

export default InventoryViewer;