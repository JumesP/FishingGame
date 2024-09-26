import {useEffect, useState} from "react";

import ArrayOfCards from "../components/molecules/ArrayOfCards";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);

	useEffect(() => {
		fetch('/api/reward')
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	return (
		<div>
			{(typeof backendData.reward === 'undefined') ?
				<p>Loading...</p> :
				<>
					<ArrayOfCards cards={backendData.reward} />
				</>
			}
		</div>
	);
}

export default Main;