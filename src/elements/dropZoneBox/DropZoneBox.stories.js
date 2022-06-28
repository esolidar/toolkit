import React from 'react';
import DropZoneBox from './DropZoneBox';
import Viewport from '../../components/viewport';

export default {
  title: 'Elements/DropZoneBox',
  component: DropZoneBox,
};

const Template = args => (
  <Viewport size="xl" centred={true}>
    <DropZoneBox {...args} />
  </Viewport>
);

export const Default = Template.bind({});
export const WithLabel = Template.bind({});
export const WithCropper = Template.bind({});
export const WithoutIcon = Template.bind({});
export const Draggable = Template.bind({});
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

WithCropper.args = {
  showFooterCropper: true,
  hasCropper: {
    showCropper: true,
    aspectRatioW: 16,
    aspectRatioH: 9,
    minWidth: 1200,
    minHeight: 675,
  },
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
  minWidth: 1200,
  minHeight: 675,
};

WithoutIcon.args = {
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
  showIcon: false,
};

Draggable.args = {
  fullWidth: true,
  sortable: true,
  accept: '.jpg, .jpeg, .png',
  onSelect: () => {},
  showImagesPreviews: true,
  imagesList: [
    {
      id: 1,
      image: 'whitelabel/20/project-config/5da1f8b5-7686-4760-9b1d-0985f4b1b9a3.jpg',
    },
    {
      id: 2,
      image: 'whitelabel/20/project-config/9c768e0f-62b2-42de-a4f7-cd628202dcce.jpg',
    },
    {
      id: 3,
      image: 'whitelabel/5/project-config/deaa24ad-b67d-4468-b27f-4993c2a4b4b7.jpg',
    },
    {
      id: 4,
      image: 'whitelabel/21/project-config/218fc584-cf8f-4c66-a438-e2699883b45f.jpg',
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
  deleteImageGallery: id => {
    alert(`delete image id - ${id}`);
  },
  handleOrderImages: array => {
    alert(JSON.stringify(array));
  },
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
