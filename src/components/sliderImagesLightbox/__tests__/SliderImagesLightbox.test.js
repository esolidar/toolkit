/* global expect */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SliderImagesLightbox from '../SliderImagesLightbox';

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
    const component = shallow(<SliderImagesLightbox images={images} video={video} env={{ serverlessResizeImage: 'https://image.testesolidar.com' }} />);
    expect(component).toHaveLength(1);
  });
});
