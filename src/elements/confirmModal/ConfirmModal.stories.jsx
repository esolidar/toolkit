import React from 'react';
import ConfirmModal from './ConfirmModal';

export default {
  title: 'Elements/ConfirmModal',
  component: ConfirmModal,
};

const Template = args => (
  <ConfirmModal {...args}>
    <button>Delete Stuff</button>
  </ConfirmModal>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ConfirmModal.test.js'],
};
Default.args = {
  onConfirm: () => {
    alert('Confirmed');
  },
  body: 'Are you sure you want to delete this?',
  confirmText: 'Confirm Delete',
  title: 'Deleting Stuff',
};
