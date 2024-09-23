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
    header: 'Default Item',
  },
  onClose: () => alert('Modal closed'),
  onEquip: () => alert('Equipped!'),
  onSell: () => alert('Sold!'),
};

export const EquipItem = Template.bind({});
EquipItem.args = {
  item: {
    header: 'Equip Item',
  },
  onClose: () => alert('Modal closed'),
  onEquip: () => alert('Equipped!'),
  onSell: () => alert('Sold!'),
};

export const SellItem = Template.bind({});
SellItem.args = {
  item: {
    header: 'Sell Item',
  },
  onClose: () => alert('Modal closed'),
  onEquip: () => alert('Equipped!'),
  onSell: () => alert('Sold!'),
};