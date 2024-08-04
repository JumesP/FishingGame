import {FishingMechanic} from "./index";
import FishTank from "../../molecules/fishTank";

export default {
    title: "Organisms/FishingMechanic",
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