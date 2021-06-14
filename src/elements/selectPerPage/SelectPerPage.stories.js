import React from 'react';
import SelectPerPage from './SelectPerPage';

export default {
  title: 'Elements/SelectPerPage',
  component: SelectPerPage,
};

const Template = args => <SelectPerPage {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['SelectPerPage.test.js'],
};
Default.args = {
  onChange: () => {},
  value: 10,
};
