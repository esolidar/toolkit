import React from 'react';
import Giftcards from './Giftcards';
import giftcards from '../../../__mocks__/giftcards';

export default {
  title: 'Components/GiftCards/Giftcards',
  component: Giftcards,
};

const Template = args => <Giftcards {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Giftcards.test.js'],
};
Default.args = {
  giftCardsList: giftcards,
  usedTitleText: 'used Title Giftcards',
  onSearchTable: () => {},
  giftCardsListUsed: giftcards,
  options: {},
  giftCardsListActivePage: 1,
  giftCardsListPerPage: 10,
  giftCardsListTotal: 20,
  giftCardsListHandlePageChange: () => {},
  activePageUsed: 1,
  itemsPerPage: 10,
  totalUsed: 2,
  handlePageChangeUsed: () => {},
};
