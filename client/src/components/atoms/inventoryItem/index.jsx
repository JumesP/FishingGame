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

  return (
    <InventoryItemStyled className={InventoryItemClasses}>
      <div className="inventoryItemImage">
        <img src={item.image} alt="item" />
      </div>
      <div className="inventoryItemHeader">{item.header}</div>
      <div className="inventoryItemDetails">
        {Object.values(item.details).map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <button onClick={() => onDetailsClick(item)}>Details</button>
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