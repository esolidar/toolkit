import React from 'react';
import ShareNetwork from './ShareNetwork';

export default {
  title: 'Sprint41/ShareNetwork',
  component: ShareNetwork,
};

const Template = args => (
  <div className="w-25 mt-5">
    <ShareNetwork {...args} />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ShareNetwork.test.js'],
};
Default.args = {
  title: 'teste',
};
