/* global expect */
/* global jest */

import React from 'react';
import { configure, shallow } from 'enzyme';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Adapter from 'enzyme-adapter-react-16';
import { advanceTo } from 'jest-date-mock';
import AuctionThumb from '../AuctionThumb';
import CountdownThumb from '../../countdown/Countdown';

jest.useFakeTimers();

configure({ adapter: new Adapter() });

const propsAuction = {
  private: 0,
  id: 299,
  user_id: 1124,
  cause_id: null,
  currency_id: 1,
  title: '0 - teste caracter especial 2019/2020',
  title_en: 'test caracter special 2019/2020',
  bid_start: 31,
  dateStart: '2020-02-08 07:00:00',
  dateLimit: '2020-07-20 16:00:00',
  images: [
    {
      id: 200,
      thumbs: {
        detail: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg',
      },
      s3_key: 'products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
    },
  ],
  currency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.19',
    symbol: '€',
    status: true,
    lastUpdate: '2020-11-26 12:00:05',
  },
  last_bid_value: {
    id: 1241,
    auction_id: 299,
    value: 31,
  },
  recipient: {
    id: 1124,
    institution_id: 30,
    language: {
      id: 2,
      name: 'pt',
      translate: 'Português (PT)',
      status: 1,
      locale: 'pt_PT',
      dateAdded: '2015-02-24 11:02:06',
    },
    currency: {
      id: 2,
      name: 'U. S. Dollar',
      small: 'USD',
      value: '1',
      symbol: '$',
      status: true,
      lastUpdate: '2014-02-03 15:50:54',
    },
    image: null,
    thumbs: {
      original: 'https://static.testesolidar.com/frontend/assets/no-image.png',
      standard: 'https://static.testesolidar.com/frontend/assets/no-image.png',
      thumb: 'https://static.testesolidar.com/frontend/assets/no-image.png',
    },
    institution: {
      id: 30,
      name: 'Helpo',
      image: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg',
      currency: {
        id: 2,
      },
      thumbs: {
        detail: 'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg',
        thumb: 'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg',
      },
      s3_image_key: 'institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg',
      s3_cover_key: null,
    },
    phones: [],
  },
};

describe('AuctionThumb', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper).toHaveLength(1);
  });

  it('should exist background image', () => {
    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper.find('.auction-photo').props().style.backgroundImage).toEqual('url(https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg)');
  });

  it('should exist countdown', () => {
    const wrapper = shallow(
      <CountdownThumb
        startDate={propsAuction.dateStart}
        endDate={propsAuction.dateLimit}
      />,
    );
    expect(wrapper).toHaveLength(1);
  });

  it('should appear title in english', () => {
    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper.find('.text').text()).toEqual(propsAuction.title_en);
  });

  it('should appear title in portuguese', () => {
    propsAuction.title_en = '';

    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper.find('.text').text()).toEqual(propsAuction.title);
  });

  it('should last bid auction', () => {
    advanceTo(new Date(2020, 1, 1, 0, 0, 0));

    propsAuction.dateStart = '2019-02-08 07:00:00';
    propsAuction.dateLimit = '2020-07-20 16:00:00';

    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper.find(FormattedNumber).prop('currency')).toEqual(propsAuction.currency.small);
    expect(wrapper.find(FormattedNumber).prop('value')).toEqual(propsAuction.last_bid_value.value);
    expect(wrapper.find(FormattedMessage).prop('defaultMessage')).toEqual('Starting Bid');
  });

  it('should starting bid auction', () => {
    advanceTo(new Date(2020, 1, 1, 0, 0, 0));

    propsAuction.dateStart = '2019-02-08 07:00:00';
    propsAuction.dateLimit = '2020-07-20 16:00:00';
    propsAuction.last_bid_value = null;

    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper.find(FormattedNumber).prop('currency')).toEqual(propsAuction.currency.small);
    expect(wrapper.find(FormattedNumber).prop('value')).toEqual(propsAuction.bid_start);
    expect(wrapper.find(FormattedMessage).prop('defaultMessage')).toEqual('Starting Bid');
  });

  it('should raised auction', () => {
    advanceTo(new Date(2020, 1, 1, 0, 0, 0));

    propsAuction.dateStart = '2019-02-08 07:00:00';
    propsAuction.dateLimit = '2019-07-20 16:00:00';

    const wrapper = shallow(
      <AuctionThumb auction={propsAuction} />,
    );
    expect(wrapper.find(FormattedMessage).prop('defaultMessage')).toEqual('Raised');
  });
});
