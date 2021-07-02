import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SliderImagesLightbox from '../index';

configure({ adapter: new Adapter() });

const images = [
  {
    id: 16,
    crowdfunding_id: 36,
    image: 'crowdfundings/e9dcf493-f8fe-4b0e-a95c-c9fb6beb3a8f.jpeg',
  },
];

const video = 'https://www.youtube.com/watch?v=i8v-rbpQBiY';

describe('SliderImagesLightbox page', () => {
  it('renders SliderImagesLightbox correctly', () => {
    const component = shallow(
      <SliderImagesLightbox
        images={images}
        video={video}
        env={{ serverlessResizeImage: 'https://image.testesolidar.com' }}
      />
    );
    expect(component).toHaveLength(1);
  });

  it('renders SliderImagesLightbox with video', () => {
    const component = shallow(
      <SliderImagesLightbox
        images={images}
        video={video}
        env={{ serverlessResizeImage: 'https://image.testesolidar.com' }}
      />
    );
    expect(component.find('iframe').length).toBe(1);
  });

  it('renders SliderImagesLightbox with no video and one image', () => {
    const component = shallow(
      <SliderImagesLightbox
        images={images}
        video={null}
        env={{ serverlessResizeImage: 'https://image.testesolidar.com' }}
      />
    );
    expect(component.find('img').length).toBe(1);
    expect(component.find('iframe').length).toBe(0);
  });

  it('renders SliderImagesLightbox with one image', () => {
    const component = shallow(
      <SliderImagesLightbox
        images={images}
        video={video}
        env={{ serverlessResizeImage: 'https://image.testesolidar.com' }}
      />
    );
    expect(component.find('img').length).toBe(1);
  });

  it('renders SliderImagesLightbox with no images and no video', () => {
    const component = shallow(
      <SliderImagesLightbox
        images={[]}
        video={null}
        env={{ serverlessResizeImage: 'https://image.testesolidar.com' }}
      />
    );
    expect(component.find('.slider-image').length).toBe(0);
    expect(component.find('iframe').length).toBe(0);
  });
});
