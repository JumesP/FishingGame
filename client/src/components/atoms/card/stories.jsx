import Card from './index';

import bluefish from '../../../../public/images/blue.png';
import salmonfish from '../../../../public/images/salmon.png';
import codfish from '../../../../public/images/cod.png';
import sharkfish from '../../../../public/images/shark.png';
import whalefish from '../../../../public/images/whale.png';

const fishImages = {
    salmon: salmonfish,
    blue: bluefish,
    cod: codfish,
    shark: sharkfish,
    whale: whalefish,
}

export default {
    title: 'Atoms/card',
    component: Card,
}

const Template = (props) => {
    return <Card {...props} />
}

export const Shark = Template.bind({});
Shark.args = {
    rarity: 'superlegendary',
    content: {
        title: 'Shark',
        description: 'Super Rare Shark',
        url: '/images/shark.png',
    }
}

export const Rod = Template.bind({});
Rod.args = {
    rarity: 'rare',
    content: {
        title: 'Rare Rod',
        description: 'Kinda Rare Rod',
        url: '/images/salmon.png',
    }
}