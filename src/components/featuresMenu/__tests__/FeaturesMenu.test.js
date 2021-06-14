import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FeaturesMenu from '../index';

configure({ adapter: new Adapter() });

const features = [
  {
    id: 1,
    name: 'feed',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-25 11:07:12',
    created_at: '2019-09-12 14:09:33',
    pivot: {
      subscription_id: 1,
      feature_id: 1,
      hide: 0,
    },
  },
  {
    id: 2,
    name: 'auctions',
    name_en: null,
    description: null,
    status: true,
    description_en: null,
    updated_at: '2019-10-25 11:07:20',
    created_at: '2019-09-18 11:57:37',
    pivot: {
      subscription_id: 1,
      feature_id: 2,
      hide: 0,
    },
  },
];
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

  it('expect 4 items', () => {
    const component = shallow(
      <FeaturesMenu
        project={project}
        location={location}
        translations={translations}
        features={features}
      />
    );
    expect(component.find('li').length).toBe(2);
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
