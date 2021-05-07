import AuctionDetailRigth from './AuctionDetailRigth';

export default {
  title: 'Components/Auctions/AuctionDetailRigth',
  component: AuctionDetailRigth,
};

const Template = args => <AuctionDetailRigth {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['AuctionDetailRigth.test.js'],
};
Default.args = {
  auctionTitle: 'Titulo',
  auction: {
    id: 279,
    recipient: {
      id: 1073,
      institution_id: 51,
      institution: {
        id: 51,
        name: 'Fundo Brasileiro para a Biodiversidade',
        image: 'https://static.esolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        currency: {
          id: 1,
        },
        thumbs: {
          detail:
            'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-DETAIL.JPG',
          thumb:
            'https://cdn.testesolidar.com/institutions/5f746beb-5fd0-4ae3-9679-0011ac120002-THUMB.JPG',
        },
        s3_image_key: 'institutions/5f746beb-5fd0-4ae3-9679-0011ac120002.JPG',
        s3_cover_key: null,
      },
      phones: [],
    },
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
  error: '',
  minValue: 10,
  showModalSubscribe: () => {},
  user: {
    currency: {
      small: 'EUR',
    },
  },
  inputBidValue: 10,
  valueBidTextField: () => {},
  primaryColor: '05c6e5',
  inputRef: {},
  env: {
    cdn_uploads_url: '',
  },
};
