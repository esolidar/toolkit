import React from 'react';
import SliderImagesLightbox from './SliderImagesLightbox';

export default {
  title: 'Components/SliderImages/SliderImagesLightbox',
  component: SliderImagesLightbox,
};

const Template = args => <SliderImagesLightbox {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['SliderImagesLightbox.test.js'],
};
Default.args = {
  video: 'https://www.youtube.com/watch?v=xF_QkfZI1mM',
  images: [
    {
      crowdfunding_id: 61,
      id: 159,
      image:
        'crowdfundings/1-4372bb2b-b9d7-44b6-b2da-ae0c6af81daf-c7c2c853-0853-4c96-8cac-1ae51da7f1c2.jpg',
    },
    {
      crowdfunding_id: 61,
      id: 160,
      image:
        'crowdfundings/4ac3fa5b-b82f-40aa-86f9-b1acab3ddd51-b4e830ac-ec36-4141-af9d-056b1af217f4.jpg',
    },
    {
      crowdfunding_id: 44,
      id: 156,
      image:
        'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723.jpeg',
      thumbs: {
        detail:
          'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-DETAIL.jpeg',
        pin: 'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-PIN.jpeg',
        standard:
          'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-STANDARD.jpeg',
        thumb:
          'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-THUMB.jpeg',
      },
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  },
};
