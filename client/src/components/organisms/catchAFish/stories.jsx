// client/src/components/organisms/catchAFish/CatchAFish.stories.jsx
import React from 'react';
import CatchAFish from './index';

export default {
    title: 'Organisms/CatchAFish',
    component: CatchAFish,
};

const Template = (args) => <CatchAFish {...args} />;

export const Default = Template.bind({});
Default.args = {
    equipment: [
        { name: 'Basic Rod' },
        { name: 'Advanced Reel' },
    ],
    fish: { type: 'Salmon', weight: 10, length: 10, value: 10, health: 10 },
    caughtFish: null,
    isModalOpen: false,
    castRod: () => alert('Casting rod...'),
    catchFish: (isSuccessful) => alert(isSuccessful ? 'Caught a fish!' : 'Missed the fish!'),
    closeModal: () => alert('Closing modal...'),
};

export const WithCaughtFish = Template.bind({});
WithCaughtFish.args = {
    ...Default.args,
    caughtFish: { type: 'Salmon', weight: 10, length: 10, value: 10, health: 10 },
    isModalOpen: true,
};