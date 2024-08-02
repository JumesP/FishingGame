import Marker from './index';

export default {
    title: 'Atoms/Marker',
    component: Marker,
}

const Template = (args) => <Marker {...args} />

export const Default = Template.bind({});
Default.args = {
}