import React, { useState, useEffect } from "react";
import ShopViewer from "../components/molecules/ShopViewer";

const Shop = () => {
	const [shopBundles, setShopBundles] = useState([{}]);

	useEffect(() => {
		fetch("/api/getShopBundles/")
			.then((res) => res.json())
			.then((data) => setShopBundles(JSON.parse(data)));
	}, []);

	console.log(shopBundles);

	return (
		<div>
			<ShopViewer content={shopBundles} />
		</div>
	);
};

export default Shop;
