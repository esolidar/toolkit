/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import LightboxGallery from '../index';
import image from '../../../../__mocks__/image';

const props = {
  images: [image],
  serverlessResizeImage: 'https://image.testesolidar.com',
};

const noImageProps = {
  images: [],
  serverlessResizeImage: 'https://image.testesolidar.com',
};

describe('LightboxGallery component', () => {
  it('renders LightboxGallery correctly', () => {
    const component = shallow(<LightboxGallery {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders LightboxGallery with no images', () => {
    const component = shallow(<LightboxGallery {...noImageProps} />);
    expect(component.find('.no-image').length).toBe(1);
  });

  it('renders LightboxGallery images', () => {
    const wrapper = shallow(<LightboxGallery {...props} />);
    const inst = wrapper.instance();
    expect(inst.toggleModal());
    expect(wrapper.state('modalIsOpen')).toBe(true);
  });
});
