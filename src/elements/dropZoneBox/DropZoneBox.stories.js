import React from 'react';
import DropZoneBox from './DropZoneBox';

export default {
  title: 'Elements/DropZoneBox',
  component: DropZoneBox,
};

const Template = args => <DropZoneBox {...args} />;

export const Default = Template.bind({});
export const WithLabel = Template.bind({});
export const WithIcon = Template.bind({});
export const Disabled = Template.bind({});

Default.parameters = {
  jest: ['DropZoneBox.test.js'],
};

Default.args = {
  accept: '.jpg, .jpeg, .png',
  onSelect: () => {},
  showImagesPreviews: true,
  imagesList: [
    {
      crowdfunding_id: 87,
      id: 385,
      image: 'crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg',
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
  deleteImageGallery: () => {},
};

WithLabel.args = {
  accept: '.jpg, .jpeg, .png',
  onSelect: () => {},
  showImagesPreviews: true,
  imagesList: [
    {
      crowdfunding_id: 87,
      id: 385,
      image: 'crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg',
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
  deleteImageGallery: () => {},
  inputLabelProps: {
    label: 'Image',
    help: 'This will be your program main image. Select a JPG, JPEG or PNG image up to 5Mb. ',
  },
};

Disabled.args = {
  accept: '.jpg, .jpeg, .png',
  onSelect: () => {},
  showImagesPreviews: true,
  imagesList: [
    {
      crowdfunding_id: 87,
      id: 385,
      image: 'crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg',
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
  deleteImageGallery: () => {},
  inputLabelProps: {
    label: 'Image',
    help: 'This will be your program main image. Select a JPG, JPEG or PNG image up to 5Mb. ',
  },
  disabled: true,
};

WithIcon.args = {
  accept: '.jpg, .jpeg, .png',
  onSelect: () => {},
  showImagesPreviews: true,
  imagesList: [
    {
      crowdfunding_id: 87,
      id: 385,
      image: 'crowdfundings/esolidar_shop-907274bf-b6ea-4cf6-b52f-85b4a81fc1b0.jpg',
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
  deleteImageGallery: () => {},
  inputLabelProps: {
    label: 'Image',
    help: 'This will be your program main image. Select a JPG, JPEG or PNG image up to 5Mb. ',
  },
  icon: 'icon-ic-file-upload',
};
