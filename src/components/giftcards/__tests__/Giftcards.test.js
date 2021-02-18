/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Giftcards from '../index';

const props = {
  giftCardsList: [
    {
      id: 118,
      company_id: 1,
      name: 'Giftcard Oliver',
      description: 'Lorem ippsum',
      amount: 10,
      amount_usd: 11.8,
      currency_id: 1,
      expire_at: '2020-11-13 00:00:00',
      updated_at: '2020-04-15 10:28:14',
      created_at: '2020-04-15 10:28:14',
      laravel_through_key: 'email@gmail.com',
      giftcard_institution: [],
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: 1.091,
        symbol: '€',
        status: 1,
      },
    },
    {
      id: 119,
      company_id: 1,
      name: 'Giftcard Oliver',
      description: 'Lorem ippsum',
      amount: 10,
      amount_usd: 11.8,
      currency_id: 1,
      expire_at: '2020-11-13 00:00:00',
      updated_at: '2020-04-15 10:28:14',
      created_at: '2020-04-15 10:28:14',
      laravel_through_key: 'email@gmail.com',
      giftcard_institution: [],
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: 1.091,
        symbol: '€',
        status: 1,
      },
    },
  ],
  usedExpiredText: 'used or Expired Giftcards',
  usedTitleText: 'used Title Giftcards',
  InputPlaceholderText: 'Search text',
  causeText: 'Lorem ipsum',
  amountText: 'Amount',
  dateText: 'Date',
  onSearchTable: () => {},
  giftCardsListUsed: [
    {
      id: 118,
      company_id: 1,
      name: 'Giftcard Oliver',
      description: 'Lorem ippsum',
      amount: 10,
      amount_usd: 11.8,
      currency_id: 1,
      expire_at: '2020-11-13 00:00:00',
      updated_at: '2020-04-15 10:28:14',
      created_at: '2020-04-15 10:28:14',
      laravel_through_key: 'email@gmail.com',
      giftcard_institution: [],
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: 1.091,
        symbol: '€',
        status: 1,
      },
    },
    {
      id: 119,
      company_id: 1,
      name: 'Giftcard Oliver',
      description: 'Lorem ippsum',
      amount: 10,
      amount_usd: 11.8,
      currency_id: 1,
      expire_at: '2020-11-13 00:00:00',
      updated_at: '2020-04-15 10:28:14',
      created_at: '2020-04-15 10:28:14',
      laravel_through_key: 'email@gmail.com',
      giftcard_institution: [
        {
          created_at: '2020-06-16 15:45:47',
          donate_pack_id: null,
          donor_name: 'Joel Calheiros',
          employee_id: null,
          id: 1285,
          institution: {
            name: 'NPO do Joel',
          },
          institution_id: 1041,
          laravel_through_key: 142,
          member_id: 26,
          message: null,
          number_of_packs: null,
          updated_at: '2020-06-16 15:45:47',
        },
      ],
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: 1.091,
        symbol: '€',
        status: 1,
      },
    },
  ],
  options: {},
  renderCause: () => {},
  rendeAmount: () => {},
  giftCardsListActivePage: 1,
  giftCardsListPerPage: 10,
  giftCardsListTotal: 20,
  giftCardsListHandlePageChange: () => {},
  activePageUsed: 1,
  itemsPerPage: 10,
  totalUsed: 2,
  handlePageChangeUsed: () => {},
  loading: false,
};

describe('Giftcards component', () => {
  it('renders Giftcards correctly', () => {
    const component = shallow(<Giftcards {...props} />);
    expect(component).toHaveLength(1);
    expect(component.find('BootstrapTable')).toHaveLength(1);
    expect(component.find('Pagination')).toHaveLength(2);
  });
});
