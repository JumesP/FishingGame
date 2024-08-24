import {useEffect, useState} from "react";

import ArrayOfCards from "../components/molecules/ArrayOfCards";

const Main = () => {
	const [backendData, setBackendData] = useState([{}]);

	useEffect(() => {
		fetch('/api/populate')
			.then((res) => res.json())
			.then((data) => setBackendData(data));
	}, []);

	return (
		<div>
			{(typeof backendData.fish === 'undefined') ?
				<p>Loading...</p> :
				<>
					<ArrayOfCards cards={backendData.reward} />
				</>
			}
		</div>
	);
}

export default Main;