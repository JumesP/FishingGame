import { useEffect, useState } from "react";

import FishTank from "../components/molecules/fishTank";
import ArrayOfCards from "../components/molecules/ArrayOfCards";
import Fish from "../components/atoms/fish";

import "./css/Main.scss";
import NextandBack from "../components/molecules/NextandBack";
import Profile from "../components/molecules/profile";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetch("/api/populate")
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	const leftContent = {
		FishTank: null,
		Catch: null,
		Rewards: null,
		ManageFish: null, // accessible via FishTank
		ManageInventory: null,
		Shop: null,
	};

	const rightContent = {
		LocationSelector: null, // switch between left content
		profile: null,
		equipment: null, // current layout
	};

	const user = backendData.user
		? {
				Username: backendData.user.Username,
				Experience: backendData.user.Experience,
				Coins: backendData.user.Coins,
				Items: backendData.currentInventory,
			}
		: {};

	return (
		<div className="main">
			{typeof backendData.fish === "undefined" ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="left">
						<FishTank
							children={
								backendData.fish &&
								backendData.fish.map((fish, number) => (
									<Fish
										fishType={fish}
										path={"/images/" + fish + ".png"}
									/>
								))
							}
							width="100%"
							height="100%"
						/>
					</div>
					<div className="right">
						<NextandBack />
						<Profile user={user} />
						<NextandBack />
					</div>
				</>
			)}
		</div>
	);
};

export default Main;
