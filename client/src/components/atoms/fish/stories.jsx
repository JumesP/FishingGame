import Fish from './index';

export default {
    title: 'Atoms/Fish',
    component: Fish,

}

const Template = (props) => {
    return <Fish {...props} />
}

export const Blue = Template.bind({});
Blue.args = {
    fishType: "blue",
    path: "/images/blue.png"
}

export const Cod = Template.bind({});
Cod.args = {
    fishType: "cod",
    path: "/images/cod.png"
}

export const Salmon = Template.bind({});
Salmon.args = {
    fishType: "salmon",
    path: "/images/salmon.png"
}

export const Shark = Template.bind({});
Shark.args = {
    fishType: "shark",
    path: "/images/shark.png"
}

export const Whale = Template.bind({});
Whale.args = {
    fishType: "whale",
    path: "/images/whale.png"
}