/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import GalleryBox from '../GalleryBox';

const props = {
  images: [
    {
      src: 'https://static.esolidar.com/frontend/assets/our-brand-heroes/vodafone-paredes-de-coura.jpg',
      thumbnail: 'https://static.esolidar.com/frontend/assets/our-brand-heroes/vodafone-paredes-de-coura.jpg',
    },
  ],
};

describe('GalleryBox component', () => {
  it('renders GalleryBox correctly', () => {
    const component = shallow(<GalleryBox {...props} />);
    expect(component).toHaveLength(1);
  });
});
