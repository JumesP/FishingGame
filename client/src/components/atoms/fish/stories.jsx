import Fish from './index';

export default {
    title: 'Atoms/Fish',
    component: Fish,

}

const Template = (props) => {
    return <Fish {...props} />
}

export const Default = Template.bind({});
Default.args = {
    size: 'fish',
}