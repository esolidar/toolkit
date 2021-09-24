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
  body: 'You’ll lose all tasks, conversations, and documents.',
  confirmText: 'Delete project',
  title: 'Delete project?',
  visible: false,
};
