import { Story, Meta } from '@storybook/react';
import Preview from './Preview';
import Props from './Preview.types';

export default {
  title: 'Components/Preview',
  component: Preview,
  parameters: {
    jest: ['Slider.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <Preview {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithDeleteButton: Story<Props> = Template.bind({});
export const WithFullSreenButton: Story<Props> = Template.bind({});

Default.args = {
  img: {
    src: 'https://image.testesolidar.com/whitelabel/5/project-config/412d1879-67ae-4f3d-b030-6ee69b6af78d.jpg?width=216&height=144',
    alt: 'Imagem de teste',
    width: '216px',
    height: '144px',
  },
};

WithDeleteButton.args = {
  handleDeleteImage: () => {},
  img: {
    src: 'https://image.testesolidar.com/whitelabel/5/project-config/412d1879-67ae-4f3d-b030-6ee69b6af78d.jpg?width=216&height=144',
    alt: 'Imagem de teste',
    width: '216px',
    height: '144px',
  },
};

WithFullSreenButton.args = {
  badgeText: 'Cover',
  fullScreen: true,
  img: {
    src: 'https://image.testesolidar.com/crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg',
    alt: 'Imagem de teste',
    width: '216px',
    height: '144px',
  },
};
