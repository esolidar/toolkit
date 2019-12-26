/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import SocialNetworks from '../SocialNetworks';

const propIcons = [
  { class: 'icon-facebook1', url: 'https://www.facebook.com/esolidar' },
  { class: 'icon-twitter1', url: '#' },
  { class: 'icon-linkedin21', url: '#' },
  { class: 'icon-google-plus1', url: '#' },
];
const propHeadingText = {
  idTranslate: 'footer.menu.join.us',
  default: 'Follow us',
};

describe('SocialNetworks component', () => {
  it('renders SocialNetworks correctly', () => {
    const component = shallow(
      <SocialNetworks
        icons={propIcons}
        headingText={propHeadingText}
      />,
    );
    expect(component).toHaveLength(1);
  });

  it('renders SocialNetworks and check if Icon exists', () => {
    const component = shallow(
      <SocialNetworks
        icons={propIcons}
        headingText={propHeadingText}
      />,
    );
    expect(component.find('Icon')).toHaveLength(4);
  });

  it('renders SocialNetworks and check title', () => {
    const component = shallow(
      <SocialNetworks
        icons={propIcons}
        headingText={propHeadingText}
      />,
    );
    expect(component.find('h5')).toHaveLength(1);
  });

  it('renders SocialNetworks and check without title', () => {
    const component = shallow(<SocialNetworks icons={propIcons} />);
    expect(component.find('h5')).toHaveLength(0);
  });
});
