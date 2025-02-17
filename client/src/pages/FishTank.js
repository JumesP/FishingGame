import { useEffect, useState } from "react";

import FishTank from "../components/molecules/fishTank";
import Fish from "../components/atoms/fish";
import UserDetais from "../components/atoms/userDetais";
import Profile from "../components/molecules/profile";

import "./css/FishTank.scss";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetch("/api/populate")
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	return (
		<div className="FishTankMain">
			{console.log(backendData)}
			{typeof backendData.fish === "undefined" ? (
				<p>Loading...</p>
			) : (
				<>
					{backendData.user && (
						<UserDetais user={backendData.user} />
						// ADD PROFILE HERE!!!
					)}

					<FishTank
						children={backendData.fish.map((fish, number) => (
							<Fish
								fishType={fish}
								path={"/images/" + fish + ".png"}
								// width="10" // can be assigned for smaller fish on mobile if ajusted accordingly
								// height="10"
							/>
						))}
					/>

					<h1 className="text-3xl font-bold underline">
						Fetched Fishes! All Fishes owned:
					</h1>
					<ul>
						{backendData.fish.map((user, number) => (
							<li key={number}>{user}</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Main;
