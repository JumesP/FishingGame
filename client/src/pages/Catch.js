import React, { useState } from 'react';

const Catch = () => {
	const [fish, setFish] = useState(null);

	const handleCatchFish = async () => {
		try {
			const response = await fetch('http://localhost:5001/api/catchFish');
			if (response.ok) {
				const data = await response.json();
				setFish(data);
			} else {
				console.error('Failed to catch fish:', response.statusText);
			}
		} catch (error) {
			console.error('Error catching fish:', error);
		}
	};

	return (
		<div>
			<h1>Catch a Fish</h1>
			<button onClick={handleCatchFish}>Catch Fish</button>
			{fish && (
				<div>
					<h2>Fish Caught:</h2>
					<p>{JSON.stringify(fish)}</p>
				</div>
			)}
		</div>
	);
};

export default Catch;