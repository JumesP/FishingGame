import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

const InventoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #999999;
  border: 5px solid black;
  border-radius: 25px;
  height: 600px;
  width: 500px;
  margin: auto;
`;

const InventoryViewer = props => {

    const InventoryClasses = classNames([
        'inventory',
    ])

    const divs = [];
    for (let i = 0; i < 56; i++) {
        divs.push(<div key={i} className="items">{i + 1}</div>);
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