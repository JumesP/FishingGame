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
	const [leftCounter, setLeftCounter] = useState(1);
	const [rightCounter, setRightCounter] = useState(1);

	useEffect(() => {
		fetch("/api/populate")
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	const user = backendData.user
		? {
				Username: backendData.user.Username,
				Experience: backendData.user.Experience,
				Coins: backendData.user.Coins,
				Items: backendData.currentInventory,
			}
		: {};

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

	const rightContentTemp = [
		<Profile user={user} />,
		<div className="right-0"></div>,
		<div className="right-1"></div>,
		<div className="right-2"></div>,
	];

	const increaseClick = (arg) => {
		if (rightCounter === 2) {
			setRightCounter(0);
		} else {
			setRightCounter(rightCounter + 1);
		}
	};

	return (
		<div className="main">
			{typeof backendData.fish === "undefined" ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="left">
					</div>
					<div className="right">
						<NextandBack
						// nextOnClick={() => rightContentChange("+")}
						// backOnClick={() => rightContentChange("-")}
						/>
						<button onClick={() => increaseClick("click")}>
							next
						</button>

						{rightContentTemp.map((element, index) => (
							<div
								key={index}
								className={[
									"right-container ",
									rightCounter === index ? " active" : "",
								]}
							>
								{element}
							</div>
						))}
						<NextandBack
						// nextOnClick={() => rightContentChange("+")}
						// backOnClick={() => rightContentChange("-")}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Main;
