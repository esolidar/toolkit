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
export const Placeholder: Story<Props> = Template.bind({});
export const Rounded: Story<Props> = Template.bind({});
export const VideoYoutube: Story<Props> = Template.bind({});
export const VideoVimeo: Story<Props> = Template.bind({});

Default.args = {
  hover: false,
  img: {
    src: 'https://image.testesolidar.com/crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg?width=216&height=144',
    alt: 'Imagem de teste',
    width: '216px',
    height: '144px',
  },
};

WithDeleteButton.args = {
  handleDeleteImage: () => {},
  img: {
    src: 'https://image.testesolidar.com/crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg?width=216&height=144',
    alt: 'Imagem de teste',
    width: '216px',
    height: '144px',
  },
};

Placeholder.args = {
  hover: true,
  img: {
    src: '',
    alt: 'Imagem de teste',
    width: '216px',
    height: '144px',
  },
};

Rounded.args = {
  hover: true,
  img: {
    src: '',
    alt: 'Imagem de teste',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  },
};

VideoYoutube.args = {
  type: 'video',
  hover: true,
  videoUrl: 'https://youtu.be/f7x5IeWi0v8',
  handleDeleteImage: () => {
    alert('Deleted video');
  },
  onFinishVideoValidation: isValid => {
    if (!isValid) alert('Error loading video');
  },
};

VideoVimeo.args = {
  type: 'video',
  hover: true,
  videoUrl: 'https://vimeo.com/133690861',
  handleDeleteImage: () => {
    alert('Deleted video');
  },
  onFinishVideoValidation: isValid => {
    if (!isValid) alert('Error loading video');
  },
};
