import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuctionsList from '../AuctionsList';

configure({ adapter: new Adapter() });

const props = {
  title: 'Other auctions',
  listAuctions: [
    {
      private: 0,
      id: 299,
      user_id: 1124,
      cause_id: null,
      currency_id: 1,
      title: '0 - teste caracter especial 2019/2020',
      title_en: 'test caracter special 2019/2020',
      bid_start: 3,
      dateStart: '2020-02-08 07:00:00',
      dateLimit: '2020-07-20 16:00:00',
      images: [
        {
          id: 200,
          thumbs: {
            detail:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg',
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
          image:
            'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg',
          currency: {
            id: 2,
          },
          thumbs: {
            detail:
              'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-DETAIL.jpeg',
            thumb:
              'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg',
          },
          s3_image_key: 'institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg',
          s3_cover_key: null,
        },
        phones: [],
      },
    },
  ],
  buttonTitle: 'Sea all auctions',
};

describe('AuctionsList component', () => {
  it('render AuctionsList correctly', () => {
    const wrapper = shallow(<AuctionsList />);
    expect(wrapper).toHaveLength(1);
  });

  it('exist title', () => {
    const wrapper = shallow(<AuctionsList {...props} />);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').text()).toEqual('Other auctions');
  });

  it('exist one auction thumb', () => {
    const wrapper = shallow(<AuctionsList {...props} />);
    expect(wrapper.find('AuctionThumb').length).toBe(1);
  });

  it('exist button see all', () => {
    const wrapper = shallow(<AuctionsList {...props} />);
    expect(wrapper.find('.see-all-auctions').length).toBe(1);
    expect(wrapper.find('.see-all-auctions').dive().text()).toEqual('Sea all auctions');
  });
});
