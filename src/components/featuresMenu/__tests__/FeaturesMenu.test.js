import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FeaturesMenu from '../index';
import features from '../../../../__mocks__/features';
import company from '../../../../__mocks__/company';

configure({ adapter: new Adapter() });

const extraMenuLinks = [
  {
    text: 'Central de ajuda',
    url: 'https://help.esolidar.com',
    target: '_blank',
    iconItem: 'icon feed',
    liClasses: '',
  },
];
const project = 'business-frontend';
const location = 'auctions';
const translations = {
  feed: 'Social Feed',
  auctions: 'Charity Auctions',
  manageEmployees: 'Manage Employees',
  charityneeds: 'Support a Charity',
  giftCards: 'Gift Cards',
  matchDonations: 'Match Donations',
  crowdfunding: 'Crowdfunding',
  payments: 'Payments',
  impactAnalytics: 'Impact Analytics',
};

describe('FeaturesMenu page', () => {
  it('renders the FeaturesMenu component', () => {
    const component = shallow(
      <FeaturesMenu
        project={project}
        location={location}
        translations={translations}
        features={features}
      />
    );
    expect(component).toHaveLength(1);
  });

  it('expect 10 items on business', () => {
    const component = shallow(
      <FeaturesMenu
        project="business-frontend"
        location={location}
        translations={translations}
        features={features}
      />
    );
    expect(component.find('li').length).toBe(10);
  });

  it('expect 3 items on whitelabel', () => {
    const component = shallow(
      <FeaturesMenu
        project="whitelabel"
        location={location}
        translations={translations}
        features={features}
      />
    );
    expect(component.find('li').length).toBe(3);
  });

  it('expect 3 items without valid project', () => {
    const component = shallow(
      <FeaturesMenu
        project="xpto"
        location={location}
        translations={translations}
        features={features}
      />
    );
    expect(component.find('li').length).toBe(3);
  });

  it('expect 7 items on esolidar', () => {
    localStorage.setItem('company', JSON.stringify(company));
    const component = shallow(
      <FeaturesMenu
        project="esolidar"
        location={location}
        translations={translations}
        features={features}
      />
    );
    expect(component.find('li').length).toBe(7);
  });

  it('expect 1 extra links', () => {
    const component = shallow(
      <FeaturesMenu
        project={project}
        location={location}
        translations={translations}
        features={[]}
        extraMenuLinks={extraMenuLinks}
      />
    );
    expect(component.find('li').length).toBe(1);
  });
});
