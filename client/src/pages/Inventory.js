import react, { useState, useEffect } from 'react';

import InventoryViewer from '../components/molecules/inventory/index';


const Inventory = () => {
    return (
        <div>
            <h1>Inventory</h1>
            <InventoryViewer />
        </div>
    )
}

export default Inventory;