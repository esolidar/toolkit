import React from 'react';
import LightboxGallery from './LightboxGallery';

export default {
  title: 'Components/LightboxGallery',
  component: LightboxGallery,
};

const Template = args => <LightboxGallery {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['LightboxGallery.test.js'],
};
Default.args = {
  images: [
    {
      image: 'requests/14392756-2993-4102-a52c-480569468fca.jpg',
    },
    {
      image: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-STANDARD.jpg',
    },
  ],
  serverlessResizeImage: 'https://image.testesolidar.com',
  thumbs: false,
};
