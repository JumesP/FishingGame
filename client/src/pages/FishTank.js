import {useEffect, useState} from "react";

import FishTank from "../components/molecules/fishTank";
import Fish from "../components/atoms/fish";
import UserDetais from "../components/atoms/userDetais";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);
	const [userData, setUserData] = useState(null);

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
						<UserDetais user={backendData.user}/>
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