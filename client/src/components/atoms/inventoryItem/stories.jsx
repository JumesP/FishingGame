import React from 'react';
import InventoryItem from './index';

export default {
  title: 'Atoms/InventoryItem',
  component: InventoryItem,
};

const Template = (args) => <InventoryItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    image: 'images/rod.png',
    header: 'Default Item',
    details: {
      enchants: 'None',
      rarity: 'Common',
      durability: '100%',
      type: 'Tool',
    },
  },
};

export const RareItem = Template.bind({});
RareItem.args = {
  item: {
    image: 'images/rare_item.png',
    header: 'Rare Item',
    details: {
      enchants: 'Sharpness V',
      rarity: 'Rare',
      durability: '80%',
      type: 'Weapon',
    },
  },
};

export const LegendaryItem = Template.bind({});
LegendaryItem.args = {
  item: {
    image: 'images/legendary_item.png',
    header: 'Legendary Item',
    details: {
      enchants: 'Unbreaking III, Mending',
      rarity: 'Legendary',
      durability: '95%',
      type: 'Armor',
    },
  },
};