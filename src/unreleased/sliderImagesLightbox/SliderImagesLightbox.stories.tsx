import { Story, Meta } from '@storybook/react';
import SliderImagesLightbox from './SliderImagesLightbox';
import { Props } from './sliderImagesLightbox.types';

export default {
  title: 'Unreleased/SliderImagesLightbox',
  component: SliderImagesLightbox,
  parameters: {
    jest: ['SliderImagesLightbox.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <SliderImagesLightbox {...args} />
  </div>
);

export const Default = Template.bind({});
export const SliderOneImage: Story<Props> = Template.bind({});
export const SliderNoImageNoVideo: Story<Props> = Template.bind({});
export const SliderVimeo: Story<Props> = Template.bind({});

Default.args = {
  videoProps: 'https://www.youtube.com/watch?v=xF_QkfZI1mM',
  imagesProps: [
    {
      crowdfunding_id: 61,
      id: 159,
      image:
        'crowdfundings/1-4372bb2b-b9d7-44b6-b2da-ae0c6af81daf-c7c2c853-0853-4c96-8cac-1ae51da7f1c2.jpg',
    },
    {
      crowdfunding_id: 61,
      id: 160,
      image: 'crowdfundings/16_9-743226d2-799f-4f32-8039-8a8693cb0178.jpg',
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

SliderOneImage.args = {
  videoProps: null,
  imagesProps: [
    {
      crowdfunding_id: 61,
      id: 159,
      image: 'companies/1/campaigns/756191e3-d684-44d9-ba0e-0b4f317ff0a6-DETAIL.jpeg',
    },
  ],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  },
};

SliderNoImageNoVideo.args = {
  videoProps: null,
  imagesProps: [],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  },
};

SliderVimeo.args = {
  videoProps: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
  imagesProps: [],
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  },
};
