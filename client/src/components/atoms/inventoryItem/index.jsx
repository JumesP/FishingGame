import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import styled from "styled-components";

const InventoryItemStyled = styled.div`
  max-width: fit-content;
  font-size: 0.8rem;
`;

const InventoryItem = ({ item, onDetailsClick }) => {
  const InventoryItemClasses = classNames([
    'inventoryItem',
  ]);

  if (item.details.enchants === null) {
    item.details.enchants = "None";
  }

  if (item.details.durability === null) {
    item.details.durability = "N/A";
  }

  const content = {
    image: item.image,
    title: item.header,
    details: {
      enchants: item.details.enchants,
      rarity: item.details.rarity,
      durability: item.details.durability,
      type: item.details.type,
    },
  };

  console.log(content);

  return (
    <InventoryItemStyled className={InventoryItemClasses}>
      <div className="inventoryItemImage">
        <img src={content.image} alt="item" />
      </div>
      <div className="inventoryItemHeader">{content.title}</div>
      <div className="inventoryItemDetails">
        {Object.values(content.details).map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <button onClick={() => onDetailsClick(content)}>Details</button>
    </InventoryItemStyled>
  );
};

InventoryItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    details: PropTypes.shape({
      enchants: PropTypes.string.isRequired,
      rarity: PropTypes.string.isRequired,
      durability: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

export default InventoryItem;