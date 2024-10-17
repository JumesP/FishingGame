import Fish from "../components/atoms/fish";
import "./css/Landing.scss";

const Landing = () => {
	return (
		<div id="fishTank" className="landing">
			<h1>Welcome to FishingGame</h1>
			<p>
				Here you can see all the fish you own and the rewards you have
				earned.
			</p>
			<p>Click on the Fish Tank to see all the fish you own.</p>
			<p>Click on the Fish to see the rewards you have earned.</p>
			<Fish fishType="cod" path="/images/cod.png" />
			<Fish fishType="salmon" path="/images/salmon.png" />
			<Fish fishType="shark" path="/images/shark.png" />
		</div>
	);
};

export default Landing;
