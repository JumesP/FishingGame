import React, { useState, useEffect } from "react";

const Shop = () => {
	// const [shopItems, setShopItems] = useState([{}]);
	//
	// useEffect(() => {
	// 	fetch("/api/getShopItems/")
	// 		.then((res) => res.json())
	// 		.then((data) => setShopItems(data));
	// }, []);
	//
	// return (
	// 	<div>
	// 		<h1>Shop</h1>
	// 		{shopItems.map((item) => (
	// 			<div key={item.id}>
	// 				<p>{item.name}</p>
	// 				<p>{item.price}</p>
	// 				<p>{item.description}</p>
	// 			</div>
	// 		))}
	// 	</div>
	// );
	return <p>Welcome to the shop!</p>;
};

export default Shop;
