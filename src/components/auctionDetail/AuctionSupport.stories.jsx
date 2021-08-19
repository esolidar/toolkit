import React from 'react';
import AuctionSupport from './AuctionSupport';

export default {
  title: 'Components/Auctions/AuctionSupport',
  component: AuctionSupport,
};

const Template = args => <AuctionSupport {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['AuctionSupport.test.js'],
};
Default.args = {
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
  },
};
