import React from 'react';
import CustomModal from './CustomModal';

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
      <button className="btn btn-secondary">Cancelar</button>
      <button className="btn btn-primary">Guardar</button>
    </>
  ),
  bodyChildren: <p>Hello world!</p>,
  onHide: () => {},
  show: false,
  title: 'Title',
  subtitle: 'subtitle',
};
