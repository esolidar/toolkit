import React from 'react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => (
  <div style={{ height: '200px' }}>
    <Loading {...args} />
  </div>
);

export const Default = Template.bind({});

Default.parameters = {
  jest: ['Loading.test.js'],
};
Default.args = {
  loadingClass: '',
  message: 'Lorem Ipsum',
  curtain: false,
};
