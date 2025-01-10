import React, { useEffect, useState } from "react";

import FishTank from "../components/molecules/fishTank";
import ArrayOfCards from "../components/molecules/ArrayOfCards";
import Fish from "../components/atoms/fish";

import "./css/Main.scss";
import NextandBack from "../components/molecules/NextandBack";
import Profile from "../components/molecules/profile";
import InventoryViewer from "../components/molecules/InventoryViewer";
import FishManagement from "../components/molecules/FishViewer";
import ShopViewer from "../components/molecules/ShopViewer";
import GardenViewer from "../components/molecules/GardenViewer";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);
	const [inventory, setInventory] = useState([{}]);
	const [fish, setFish] = useState([{}]);
	const [garden, setGarden] = useState([{}]);
	const [shopBundles, setShopBundles] = useState([{}]);

	const [userData, setUserData] = useState(null);

	const [leftCounter, setLeftCounter] = useState(0);
	const [rightCounter, setRightCounter] = useState(0);

	useEffect(() => {
		fetch("/api/populate")
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	useEffect(() => {
		fetch("/api/getInventory/")
			.then((res) => res.json())
			.then((data) => setInventory(data));
	}, []);

	useEffect(() => {
		fetch("/api/getFish/")
			.then((res) => res.json())
			.then((data) => setFish(data));
	}, []);

	useEffect(() => {
		fetch("/api/getShopBundles/")
			.then((res) => res.json())
			.then((data) => setShopBundles(JSON.parse(data)));
	}, []);

	// useEffect(() => {
	// 	fetch("/api/getGarden/")
	// 		.then((res) => res.json())
	// 		.then((data) => setGarden(data));
	// }, []);

	const user = backendData.user
		? {
				Username: backendData.user.Username,
				Experience: backendData.user.Experience,
				Coins: backendData.user.Coins,
				Items: backendData.currentInventory,
			}
		: {};

	const leftContent = {
		FishTank: (
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
		),
		Catch: null,
		Garden: null,
		ManageFish: null, // accessible via FishTank
		ManageInventory: null,
		Shop: null,
	};

	const rightContent = {
		LocationSelector: null, // switch between left content
		profile: null,
		equipment: null, // current layout
	};

	const leftContentTemp = [
		<FishTank
			children={
				backendData.fish &&
				backendData.fish.map((fish, number) => (
					<Fish fishType={fish} path={"/images/" + fish + ".png"} />
				))
			}
			width="100%"
			height="100%"
		/>,
		<InventoryViewer inventory={inventory} />,
		<FishManagement fish={fish} />,
		<ShopViewer content={shopBundles} />,
		<GardenViewer content={garden} />,
		<div className="right-1"> catch </div>,
	];

	const rightContentTemp = [
		<Profile user={user} />,
		<div className="right-0"></div>,
		<div className="right-1"></div>,
		<div className="right-2"></div>,
	];

	const increaseClick = (arg) => {
		if (rightCounter === 3) {
			setRightCounter(0);
		} else {
			setRightCounter(rightCounter + 1);
		}
	};

	const increaseLeftClick = (arg) => {
		if (leftCounter === 5) {
			setLeftCounter(0);
		} else {
			setLeftCounter(leftCounter + 1);
		}
	};

	return (
		<div className="main">
			{typeof backendData.fish === "undefined" ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="left">
						<button onClick={() => increaseLeftClick("click")}>
							next
						</button>
						{leftContentTemp.map((element, index) => (
							<div
								key={index}
								className={[
									"left-container ",
									leftCounter === index ? " active" : "",
								]}
							>
								{element}
							</div>
						))}
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
