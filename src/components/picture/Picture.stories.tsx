import React from 'react';
import { Story, Meta } from '@storybook/react';
import Picture from './Picture';
import Props from './Picture.types';

export default {
  title: 'Components/Picture',
  component: Picture,
  parameters: {
    jest: ['Picture.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <Picture {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  src: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/6e4e8530-8421-4cba-8e36-b300c53a3e1b.jpg',
  alt: 'Imagem de teste',
};
