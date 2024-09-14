import {useEffect, useState} from "react";

import FishTank from "../components/molecules/fishTank";
import ArrayOfCards from "../components/molecules/ArrayOfCards";
import Fish from "../components/atoms/fish";

import './css/Main.scss'
import NextandBack from "../components/molecules/NextandBack";

const Main = () => {



	return (
		<div className="main">
			<div className="left">s</div>
			<div className="right">
				<NextandBack />
			</div>
		</div>
	);
}

export default Main;