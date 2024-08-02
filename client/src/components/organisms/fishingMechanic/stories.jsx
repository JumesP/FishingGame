import {FishingMechanic} from "./index";
import FishTank from "../../molecules/fishTank";

export default {
    title: "Organisms/FishingMechanic",
    component: FishingMechanic,
}

const Template = (props) => {
    return <FishingMechanic {...props} />
}


export const Default = Template.bind({});
Default.args = {
    lowerNumber: 55,
    higherNumber: 60,
}