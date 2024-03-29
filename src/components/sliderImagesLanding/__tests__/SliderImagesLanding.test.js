/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import SliderImagesLanding from '../index';
import { cdnStaticUrl } from '../../../constants/env';

const props = {
  autoPlay: true,
  imgList: [
    {
      id: 1,
      alt: 'Delfim',
      src: `${cdnStaticUrl}/frontend/assets/landing/delfim.png`,
      url: 'https://delfim.esolidar.com',
    },
    {
      id: 2,
      alt: 'Happiness',
      src: `${cdnStaticUrl}/frontend/assets/landing/happiness.png`,
      url: 'https://happiness.esolidar.com',
    },
    {
      id: 3,
      alt: 'Human Power Hub',
      src: `${cdnStaticUrl}/frontend/assets/landing/hph.png`,
      url: 'https://www.humanpowerhub.org',
    },
    {
      id: 4,
      alt: 'Instituto CPFL',
      src: `${cdnStaticUrl}/frontend/assets/landing/instituto_cpfl.png`,
      url: 'https://www.institutocpfl.org.br',
    },
    {
      id: 5,
      alt: 'Liga Portugal',
      src: `${cdnStaticUrl}/frontend/assets/landing/liga_portugal.png`,
      url: 'https://www.ligaportugal.pt/pt/homepage',
    },
    {
      id: 6,
      alt: 'Odontoprev',
      src: `${cdnStaticUrl}/frontend/assets/landing/odontoprev.png`,
      url: 'https://www.odontoprevonline.com.br',
    },
  ],
  imgWidth: '150px',
  title: 'Clientes',
};

describe('SliderImagesLanding', () => {
  it('renders SliderImagesLanding correctly', () => {
    const component = shallow(<SliderImagesLanding {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders one slider component correctly', () => {
    const component = shallow(<SliderImagesLanding {...props} />);
    expect(component.find('Slider').length).toBe(1);
  });

  it('renders as many images as received in props', () => {
    const component = shallow(<SliderImagesLanding {...props} />);
    expect(component.find('img').length).toBe(props.imgList.length);
  });
});
