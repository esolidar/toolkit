/* global expect */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CrowdfundingContributesList from '../CrowdfundingContributesList';

configure({ adapter: new Adapter() });

const props = {
  contributesListTotal: 10,
  contributes: [
    {
      id: 140,
      company_id: null,
      payment_product_id: 468,
      message: '',
      hidden: 1,
      updated_at: '2020-04-09 16:30:18',
      created_at: '2020-04-09 16:30:18',
      laravel_through_key: 39,
      contributor: null,
      payment_product: {
        id: 468,
        payment_id: 337,
        product_id: 39,
        quantity: 1,
        amount: 26,
        currency_id: 1,
        info: '{"hidden":"1","message":"","checked":1}',
        updated_at: '2020-04-09 16:30:17',
        created_at: '2020-04-09 16:30:17',
        currency: {
          id: 1,
          name: 'Euro',
          small: 'EUR',
          value: '1.174',
          symbol: '€',
          status: true,
          lastUpdate: '2020-10-14 00:00:03',
        },
      },
    },
    {
      id: 140,
      company_id: null,
      payment_product_id: 468,
      message: '',
      hidden: 0,
      updated_at: '2020-04-09 16:30:18',
      created_at: '2020-04-09 16:30:18',
      laravel_through_key: 39,
      contributor: {
        firstName: 'Miguel',
        id: 1,
        image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/1/1602528294.jpg',
        institution: null,
        institution_id: null,
        lastName: 'Vieira',
        name: 'Miguel Vieira',
        s3_key: 'users/1/1602528294.jpg',
        streamImage: 'amazons3',
        thumbs: {
          original: 'https://cdn.testesolidar.com/users/1/1602528294.jpg',
          standard: 'https://cdn.testesolidar.com/users/1/1602528294-STANDARD.jpg',
          thumb: 'https://cdn.testesolidar.com/users/1/1602528294-THUMB.jpg',
        },
      },
      payment_product: {
        id: 468,
        payment_id: 337,
        product_id: 39,
        quantity: 1,
        amount: 26,
        currency_id: 1,
        info: '{"hidden":"1","message":"","checked":1}',
        updated_at: '2020-04-09 16:30:17',
        created_at: '2020-04-09 16:30:17',
        currency: {
          id: 1,
          name: 'Euro',
          small: 'EUR',
          value: '1.174',
          symbol: '€',
          status: true,
          lastUpdate: '2020-10-14 00:00:03',
        },
      },
    },
  ],
  loadingContributes: false,
  showMoreContributes: () => {},
  env: {
    cdn_static_url: 'https://static.esolidar.com',
    cdn_uploads_url: 'https://cdn.testesolidar.com',
  },
};

describe('CrowdfundingContributesList', () => {
  it('renders the CrowdfundingContributesList component', () => {
    const component = shallow(<CrowdfundingContributesList />);
    expect(component).toHaveLength(1);
  });

  it('renders the CrowdfundingContributesList component', () => {
    const component = shallow(<CrowdfundingContributesList
      contributesListTotal={0}
      contributes={[]}
      loadingContributes={false}
      showMoreContributes={props.showMoreContributes}
      env={props.env}
    />);
    expect(component.find('.no-contributions').length).toBe(1);
  });

  it('show link see more', () => {
    const component = shallow(<CrowdfundingContributesList
      contributesListTotal={10}
      contributes={props.contributes}
      loadingContributes={false}
      showMoreContributes={props.showMoreContributes}
      env={props.env}
    />);
    expect(component.find('.see-more-contributors').length).toBe(1);
  });
});
