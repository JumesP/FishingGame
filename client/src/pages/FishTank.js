import {useEffect, useState} from "react";

import FishTank from "../components/molecules/fishTank";
import Fish from "../components/atoms/fish";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);

	useEffect(() => {
		fetch('/api/populate')
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	return (
		<div>
			{console.log(backendData)}
			{(typeof backendData.fish === 'undefined') ?
				<p>Loading...</p> :
				<>
					{backendData.user && (
						<div>
							<h1>Name: {backendData.user.name}</h1>
							<h2>Username: {backendData.user.username}</h2>
							<h3>Age: {backendData.user.age}</h3>
							<h4>Level: {backendData.user.level}</h4>
							<h4>TankID: {backendData.user.tankID}</h4>
						</div>
					)}
					<FishTank
						children={backendData.fish.map((fish, number) => (
							<Fish fishType={fish} path={"/images/" + fish + ".png"}/>
						))}
					/>

					<h1 className="text-3xl font-bold underline">Fetched Fishes! All Fishes owned:</h1>
					<ul>
						{backendData.fish.map((user, number) => (
							<li key={number}>{user}</li>
						))}
					</ul>
				</>
			}
		</div>
	);
}

export default Main;