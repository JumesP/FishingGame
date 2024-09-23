import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";
import InventoryItem from "../../atoms/inventoryItem";

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

    const InventoryClasses = classNames([
        'inventory',
    ])

    const divs = [];
    for (let i = 0; i < 56; i++) {
        divs.push(
            <InventoryItem key={i} item={{
                image: 'images/rod.png',
                header: 'Common Rod',
                details: {
                    enchants: '🥽',
                    rarity: 'Common',
                    durability: '100%',
                    type: 'Tool',
                }
            }} />
        )
    }

    return(
        <InventoryStyled
            className={InventoryClasses}
            {...props}
        >
            <h1>Inventory:</h1>
            <div className="inventoryItems">
                {divs}
            </div>
            <div className="pageSelector">
                <button>&lt;</button>
                <button>&gt;</button>
            </div>

        </InventoryStyled>
    )
}

export default InventoryViewer;