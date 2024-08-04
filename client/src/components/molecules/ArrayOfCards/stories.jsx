import ArrayOfCards from "./index";

export default {
    title: "Molecules/ArrayOfCards",
    component: ArrayOfCards,
}

const Template = (props) => {
    return <ArrayOfCards {...props} />
}

export const Original = Template.bind({});
Original.args = {
    cards: [
        {
            title: "Card 1",
            description: "This is a card",
            url: "/images/salmon.png",
        },
        {
            title: "Card 2",
            description: "This is a card",
            url: "/images/salmon.png",
        },
        {
            title: "Card 3",
            description: "This is a card",
            url: "/images/salmon.png",
        },
    ]
}
