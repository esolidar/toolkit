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
  <div style={{ height: '400px' }}>
    <Loading {...args} />
  </div>
);

export const Default = Template.bind({});
export const Message = Template.bind({});

Default.parameters = {
  jest: ['Loading.test.js'],
};

Default.args = {
  loadingClass: '',
  curtain: false,
};

Message.args = {
  loadingClass: '',
  message: (
    <>
      <h2>Searching...</h2>
      <p>Please wait while we are searching for &apos;term&apos; projects</p>
    </>
  ),
  curtain: false,
};
