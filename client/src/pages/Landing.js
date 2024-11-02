import Fish from "../components/atoms/fish";
import "./css/Landing.scss";

const Landing = () => {
	return (
		<div id="fishTank" className="landing">
			<Fish fishType="cod" path="/images/cod.png" />
			<Fish fishType="cod" path="/images/cod.png" />
			<Fish fishType="salmon" path="/images/salmon.png" />
			<Fish fishType="salmon" path="/images/salmon.png" />
			<Fish fishType="goldfish" path="/images/goldfish.png" />
			<Fish fishType="goldfish" path="/images/goldfish.png" />
			<Fish fishType="shark" path="/images/shark.png" />
			<h1>Welcome to FishingGame</h1>
			<p>
				Here you can see all the fish you own and the rewards you have
				earned.
			</p>
			<p>Click on the Fish Tank to see all the fish you own.</p>
			<p>Click on the Fish to see the rewards you have earned.</p>
		</div>
	);
};

export default Landing;
