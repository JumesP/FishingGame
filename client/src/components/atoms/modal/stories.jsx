import React from 'react';
import Modal from './index';

export default {
  title: 'Atoms/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    image: 'images/rod.png',
    title: 'Common Rod ',
    details: {
      enchants: '🥽',
      rarity: 'Common',
      durability: '100%',
      type: 'Tool',
    }
  },
  onClose: () => alert('Modal closed'),
  onEquip: () => alert('Equipped!'),
  onSell: () => alert('Sold!'),
};