import React from 'react';
import ShareNetwork from './ShareNetwork';

export default {
  title: 'Components/ShareNetwork',
  component: ShareNetwork,
};

const Template = args => <ShareNetwork {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ShareNetwork.test.js'],
};
Default.args = {
  title: 'teste',
  image: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg',
  description: 'description test',
};
