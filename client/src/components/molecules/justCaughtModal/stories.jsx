import JustCaughtModal from "./index";

export default {
    title: "Molecules/JustCaughtModal",
    component: JustCaughtModal,
}

const Template = (props) => {
    return <JustCaughtModal {...props} />
}

export const Default = Template.bind({});
Default.args = {
    // children: 'JustCaughtModal',
}