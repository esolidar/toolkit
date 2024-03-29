import React from 'react';
import HeartSeparator from './HeartSeparator';

export default {
  title: 'Components/HeartSeparator',
  component: HeartSeparator,
};

const Template = args => <HeartSeparator {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['HeartSeparator.test.js'],
};
Default.args = {};
