import React, { useState, useEffect } from 'react';
import InventoryViewer from '../components/molecules/inventory/index';

const Inventory = () => {
    const [inventory, setInventory] = useState([{}]);

    useEffect(() => {
        fetch('/api/getInventory/')
            .then((res) => res.json())
            .then((data) => setInventory(data));
    }, []);

    return (
        <div>
            <h1>Inventory</h1>
            <InventoryViewer inventory={inventory} />
        </div>
    );
};

export default Inventory;