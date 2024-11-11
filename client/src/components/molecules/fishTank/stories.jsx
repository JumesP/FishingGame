import FishTank from "./index";
import Fish from "../../atoms/fish";

import goldfish from "../../../../public/images/goldfish.png";
import salmonfish from "../../../../public/images/salmon.png";
import codfish from "../../../../public/images/cod.png";
import sharkfish from "../../../../public/images/shark.png";
import whalefish from "../../../../public/images/whale.png";

const fishImages = {
	salmon: salmonfish,
	goldfish: goldfish,
	cod: codfish,
	shark: sharkfish,
	whale: whalefish,
};

const user1Fish = [
	"salmon",
	"salmon",
	"salmon",
	"cod",
	"cod",
	"cod",
	"goldfish",
	"goldfish",
	"goldfish",
];

const user2Fish = [
	"salmon",
	"salmon",
	"salmon",
	"cod",
	"cod",
	"cod",
	"goldfish",
	"goldfish",
	"goldfish",
	"shark",
	"shark",
	"whale",
];

export default {
	title: "Molecules/FishTank",
	component: FishTank,
};

const Template = (props) => {
	return <FishTank {...props} />;
};

export const Default = Template.bind({});
Default.args = {
	children: "fishTank",
};

export const FishTankWit3Fish = Template.bind({});
FishTankWit3Fish.args = {
	size: "fish",
	children: [<Fish key={1} />, <Fish key={1} />, <Fish key={1} />],
};

export const FishTankWit10Fish = Template.bind({});
FishTankWit10Fish.args = {
	size: "fish",
	children: [
		<Fish fishType="salmon" />,
		<Fish fishType="salmon" />,
		<Fish fishType="salmon" />,
		<Fish fishType="cod" />,
		<Fish fishType="cod" />,
		<Fish fishType="cod" />,
	],
};

export const User1Fish = Template.bind({});
User1Fish.args = {
	size: "fish",
	children: user1Fish.map((fish, index) => <Fish fishType={fish} />),
};

export const User2Fish = Template.bind({});
User2Fish.args = {
	size: "fish",
	children: user2Fish.map((fish, index) => <Fish fishType={fish} />),
};
