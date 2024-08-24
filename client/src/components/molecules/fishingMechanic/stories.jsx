import {FishingMechanic} from "./index";
import FishTank from "../fishTank";

export default {
    title: "Molecules/FishingMechanic",
    component: FishingMechanic,
}

const Template = (props) => {
    return <FishingMechanic {...props} />
}


export const Original = Template.bind({});
Original.args = {
    lowerNumber: 55,
    higherNumber: 60,
}