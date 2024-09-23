import React from 'react';
import classNames from "classnames";
import styled from "styled-components";
import PropTypes from "prop-types";

const InventoryItemStyled = styled.div`
  max-width: fit-content;
  font-size: 0.8rem;
`;

const InventoryItem = ({ item, ...props }) => {
    const content = {
        image: item.image,
        title: item.header,
        details: [
            item.details.enchants, // maybe make the enchants overlap the image?
            item.details.rarity,
            item.details.durability,
            item.details.type,
        ],
    };

    const InventoryItemClasses = classNames([
        'inventoryItem',
    ]);

    return (
        <InventoryItemStyled
            className={InventoryItemClasses}
            {...props}
        >
            <div className="inventoryItemImage">
                <img src={content.image} alt="item" />
            </div>
            <div className="inventoryItemHeader">{content.title}</div>
            <div className="inventoryItemDetails">
                {content.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
            <button>Details</button>
        </InventoryItemStyled>
    );
}

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
};

export default InventoryItem;