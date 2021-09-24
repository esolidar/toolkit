import React from 'react';
import CustomModal from './CustomModal';
import Button from '../button';

export default {
  title: 'Elements/CustomModal',
  component: CustomModal,
};

const Template = args => <CustomModal {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CustomModal.test.js'],
};
Default.args = {
  actionsChildren: (
    <>
      <Button extraClass="dark" className="mr-2" text="Cancel" />
      <Button extraClass="primary-full" text="Save" />
    </>
  ),
  bodyChildren: <p>Hello world!</p>,
  onHide: () => {},
  show: false,
  subtitle: 'subtitle',
  title: 'Title',
};
