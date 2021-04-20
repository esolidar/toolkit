import AuctionLastBid from './AuctionLastBid';

export default {
  title: 'Components/Auctions/AuctionLastBid',
  component: AuctionLastBid,
};

const Template = args => <AuctionLastBid {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['AuctionLastBid.test.js'],
};
Default.args = {
  auction: {
    id: 279,
    last_bid: {
      id: 1606,
      auction_id: 279,
      value: 73,
    },
    currency: {
      small: 'EUR',
    },
  },
  isEnded: false,
  isCommingSoon: false,
  handleClickBid: () => {},
  isShowModal: () => {},
  error: '',
  minValue: 10,
  inputBidValue: 10,
  valueBidTextField: () => {},
  primaryColor: 'red',
};
