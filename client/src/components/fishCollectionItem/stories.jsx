import fishCollectionItem from "./index";
import Card from "../atoms/card";

export default {
    title: 'Atoms/Fish Collection Item',
    component: fishCollectionItem,
}

const Template = (args) => <fishCollectionItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    fish: {
        image: "images/blue.png",
        header: "Blue Fish",
        details: {
            price: "$1",
            health: "10♡",
            weight: "5g",
            length: "32 cm",
        },
    },
};