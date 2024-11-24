import React, { useState, useEffect } from "react";

const FishManagement = () => {
	// const [fish, setFish] = useState([{}]);
	//
	// useEffect(() => {
	// 	fetch("/api/getFish/")
	// 		.then((res) => res.json())
	// 		.then((data) => setFish(data));
	// }, []);
	//
	// return (
	// 	<div>
	// 		<h1>Fish Management</h1>
	// 		{fish.map((item) => (
	// 			<div key={item.id}>
	// 				<p>{item.name}</p>
	// 				<p>{item.species}</p>
	// 				<p>{item.description}</p>
	// 			</div>
	// 		))}
	// 	</div>
	// );
	return <p>Welcome to the fish management page!</p>;
};

export default FishManagement;
