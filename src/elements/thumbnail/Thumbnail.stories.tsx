import React from 'react';
import { Story, Meta } from '@storybook/react';
import Thumbnail from './Thumbnail';
import Props from './Thumbnail.types';

export default {
  title: 'Elements/Thumbnail',
  component: Thumbnail,
  parameters: {
    jest: ['Slider.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <Thumbnail {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const NoImage: Story<Props> = Template.bind({});
export const WithLabel: Story<Props> = Template.bind({});

Default.args = {
  img: {
    src: 'https://static.testesolidar.com/frontend/assets/esolidar-cover.png',
    alt: 'Imagem de teste',
  },
  url: 'jwsjwnsws',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum lhmet lspelro meto',
};

NoImage.args = {
  img: {
    src: '',
    alt: 'Imagem de teste',
  },
  url: 'jwsjwnsws',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum lhmet lspelro meto',
};

WithLabel.args = {
  img: {
    src: 'https://static.testesolidar.com/frontend/assets/esolidar-cover.png',
    alt: 'Imagem de teste',
  },
  url: 'jwsjwnsws',
  title: 'Lorem ipsum',
  description: 'Lorem ipsum lhmet lspelro meto',
  inputLabelProps: {
    field: 'tags',
    label: 'Lorem Ipsum',
    help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie justo at risus rutrum luctus.',
    showOptionalLabel: true,
  },
};
