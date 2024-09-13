import FishingMechanic from "./index";

export default {
    title: "Molecules/FishingMechanic",
    component: FishingMechanic,
}

const Template = (props) => {
    return <FishingMechanic {...props} />
}

const onCatch = (x) => {
    if (x === true) {
        alert('You did catch a fish!')
    } else {
        alert('You did not catch a fish!')
    }
}


export const Original = Template.bind({});
Original.args = {
    lowerNumber: 55,
    higherNumber: 60,
    onCatch: onCatch,
}