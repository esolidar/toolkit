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
export const VideoLoading: Story<Props> = Template.bind({});

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
  videoDetails: {
    providerName: 'youtube',
    title: 'Como fazer um Programa de Aceleração com a esolidar?',
    thumbnailUrl: 'url(https://img.youtube.com/vi/f7x5IeWi0v8/maxresdefault.jpg)',
    videoUrl: '',
  },
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
  videoDetails: {
    providerName: 'vimeo',
    title: 'Leilão de Convívio com Ruy de Carvalho + livro apoia o Grupo Lobo',
    thumbnailUrl:
      'url(https://i.vimeocdn.com/video/526856989-de0b3e28b396cb957091ade1f5fe568fe433042c74e1f01068e29ddb71fd0e2a-d_640)',
    videoUrl: '',
  },
  handleDeleteImage: () => {
    alert('Deleted video');
  },
  onFinishVideoValidation: isValid => {
    if (!isValid) alert('Error loading video');
  },
};

VideoLoading.args = {
  type: 'video',
  videoUrl: 'https://vimeo.com/133690861',
  videoDetails: {
    providerName: undefined,
    title: undefined,
    thumbnailUrl: undefined,
    videoUrl: undefined,
    isLoading: true,
    hasError: false,
  },
};
