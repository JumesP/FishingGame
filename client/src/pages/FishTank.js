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
			{/*{(typeof backendData.fish === 'undefined' || typeof backendData.cards === 'undefined') ?*/}
			{(typeof backendData.fish === 'undefined') ?
				<p>Loading...</p> :
				<>

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