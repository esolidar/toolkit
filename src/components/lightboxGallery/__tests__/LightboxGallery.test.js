/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import LightboxGallery from '../LightboxGallery';

const props = {
  images: [
    {
      id: 311,
      request_id: 204,
      streamImage: 'amazons3',
      image: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7.jpg',
      image_type: 'image/jpeg',
      image_size: '53730',
      position: 1,
      updated_at: '2020-01-31 14:17:20',
      created_at: '2020-01-31 14:16:37',
      thumbs: {
        standard: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-STANDARD.jpg',
        detail: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-DETAIL.jpg',
        thumb: 'requests/43dffe5e-1b23-4217-9e58-5c187fa129b7-THUMB.jpg',
      },
    },
  ],
  serverlessResizeImage: 'https://image.testesolidar.com',
};

const noImageProps = {
  images: [],
  serverlessResizeImage: 'https://image.testesolidar.com',
};

describe('BoxInfo component', () => {
  it('renders BoxInfo correctly', () => {
    const component = shallow(<LightboxGallery {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders BoxInfo with no images', () => {
    const component = shallow(<LightboxGallery {...noImageProps} />);
    expect(component.find('.no-image').length).toBe(1);
  });

  it('renders BoxInfo with no images', () => {
    const wrapper = shallow(<LightboxGallery {...props} />);
    const inst = wrapper.instance();
    expect(inst.toggleModal());
    expect(wrapper.state('modalIsOpen')).toBe(true);
  });
});
