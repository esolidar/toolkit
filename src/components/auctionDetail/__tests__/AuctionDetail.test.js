import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { advanceTo } from 'jest-date-mock';
import { IntlProvider } from 'react-intl';
import AuctionDetail from '../index';
import user from '../../../../__mocks__/user';
import auction from '../../../../__mocks__/auction';

const fx = jest.fn();
const props = {
  auctionId: '299',
  getAuctionDetail: fx,
  getAuctionUserCommentResponse: fx,
  getAuctionBidList: fx,
  getAuctionList: fx,
  getAuctionComment: fx,
  getAuctionSubscribe: fx,
  getStripeCreditCardlist: fx,
  postStripeCreditCard: fx,
  requireLogin: fx,
  showAlert: fx,
  auctionDetail: {
    code: 200,
    data: auction,
  },
  auctionBidList: {
    code: 404,
  },
  auctionList: {
    code: 200,
    data: {
      data: [
        {
          id: 1,
          title: 'Auction 1',
          dateStart: '2020-02-08 07:00:00',
          dateLimit: '2020-12-30 16:00:00',
          recipient: {
            institution: {
              thumbs: {
                thumb:
                  'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg',
              },
            },
          },
          last_bid_value: {
            value: 1,
          },
        },
        {
          id: 2,
          title: 'Auction 2',
          dateStart: '2020-02-09 07:00:00',
          dateLimit: '2020-12-21 16:00:00',
          recipient: {
            institution: {
              thumbs: {
                thumb:
                  'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg',
              },
            },
          },
          last_bid_value: {
            value: 2,
          },
        },
      ],
    },
  },
  auctionComments: {
    code: 200,
    data: {
      data: [
        {
          auction_id: 443,
          comment: 'teste',
          comment_id: null,
          company: null,
          company_id: null,
          dateAdded: '2021-06-30 13:10:51',
          deleted_at: null,
          id: 366,
          user,
          user_id: 9,
        },
      ],
    },
  },
  newBid: {
    code: 200,
    data: {
      auction_id: 443,
      dateAdded: '2021-06-30 13:19:30',
      dateLimit: '2021-07-03 23:00:00',
      hidden: 1,
      id: 1677,
      stripelast4: null,
      user,
      value: 10,
    },
  },
  auctionUserCommentsResponse: {
    code: 404,
  },
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  },
  user: null,
  auctionSubscribeList: {
    code: 200,
    data: {
      auction_on_start: 1,
      auction_first_bid: 0,
      auction_24h_end: 1,
    },
  },
  auctionSubscribe: {
    code: 200,
  },
  deleteComment: {
    code: 200,
  },
  confirmPhone: {
    code: 200,
  },
};

const propsAuctionPrivate = {
  auctionId: '299',
  getAuctionDetail: fx,
  getAuctionBidList: fx,
  getAuctionList: fx,
  getAuctionComment: fx,
  getAuctionSubscribe: fx,
  getStripeCreditCardlist: fx,
  postStripeCreditCard: fx,
  requireLogin: fx,
  showAlert: fx,
  auctionDetail: {
    data: {
      code: 403,
      data: {
        private: 1,
      },
    },
  },
  auctionBidList: {
    code: 404,
  },
  auctionList: {
    code: 404,
  },
  auctionComments: {
    code: 404,
  },
  newBid: {
    code: 404,
  },
  auctionUserCommentsResponse: {
    code: 404,
  },
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdn_static_url: 'https://static.esolidar.com',
  },
  user: {
    email: 'rocha@esolidar.com',
    currency: {
      small: 'EUR',
    },
    thumbs: {
      thumb: 'https://cdn.testesolidar.com/users/51792/1601463876-THUMB.jpg',
    },
    phones: [
      {
        code: '6121',
        phone: '+351919552199',
        user_id: 51792,
        verified: 1,
      },
    ],
  },
  auctionSubscribeList: {
    code: 200,
    data: {
      auction_on_start: 1,
      auction_first_bid: 0,
      auction_24h_end: 1,
    },
  },
  auctionSubscribe: {
    code: 200,
  },
  deleteComment: {
    code: 200,
  },
  confirmPhone: {
    code: 200,
  },
};

beforeAll(() => {
  localStorage.setItem('lang', 'pt');

  const auctionDetailInfo = auction;
  React.useState = jest.fn().mockReturnValue([auctionDetailInfo, () => {}]);
});

afterAll(() => {
  localStorage.clear();

  const auctionDetailInfo = {};
  React.useState = jest.fn().mockReturnValue([auctionDetailInfo, () => {}]);
});

test('simulate private auction', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...propsAuctionPrivate} />
    </IntlProvider>
  );

  await waitFor(() => {
    const titlePrivate = screen.getByTestId('title-private');
    expect(titlePrivate).toBeInTheDocument();
    expect(titlePrivate).toHaveTextContent('auctions.private.supportes');
    const inputCode = screen.getByTestId('input-private-code');
    expect(inputCode).toBeInTheDocument();
    fireEvent.change(inputCode, { target: { value: '123456' } });
    expect(inputCode.value).toBe('123456');
    const btnCancel = screen.getByTestId('btn-private-cancel');
    expect(btnCancel).toBeInTheDocument();
    const btnValidate = screen.getByTestId('btn-private-validate');
    expect(btnValidate).toBeInTheDocument();
  });
});

test('should exist auction support', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const auctionSupport = screen.getByTestId('auction-support');
    expect(auctionSupport).toBeInTheDocument();
    expect(auctionSupport).toHaveTextContent('auctions.public.supportes');
    const thumbImage = screen.getByAltText('thumb-supported');
    expect(thumbImage).toBeInTheDocument();
    // expect(thumbImage).toHaveAttribute(
    //   'src',
    //   'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg'
    // );
  });
});

test('should exist countdown with time', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  advanceTo(new Date(2020, 1, 12, 0, 0, 0));

  await waitFor(() => {
    const divCountDown = screen.getByTestId('div-countdown');
    expect(divCountDown).toBeInTheDocument();
    const countdownHour = screen.getByTestId('auction-detail-countdown-hours');
    expect(countdownHour).toHaveTextContent('16HOUR');
    const countdownMin = screen.getByTestId('auction-detail-countdown-min');
    expect(countdownMin).toHaveTextContent('00MIN');
    const countdownSec = screen.getByTestId('auction-detail-countdown-sec');
    expect(countdownSec).toHaveTextContent('00SEC');
    const endDateInfo = screen.getByTestId('end-date-info');
    expect(endDateInfo).toHaveTextContent('auction.detail.endsSunday, July 4, 2021 12:00 AM');
  });
});

test('should exist slide image', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const auctionSlide = screen.getByTestId('slide-image-multiple');
    expect(auctionSlide).toBeInTheDocument();
  });
});

test('should exist buttons share social media', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const shareAuction = screen.getByTestId('btn-share');
    expect(shareAuction).toBeInTheDocument();
    expect(screen.getByLabelText('facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('whatsapp')).toBeInTheDocument();
    expect(screen.getByLabelText('telegram')).toBeInTheDocument();
    expect(screen.getByLabelText('linkedin')).toBeInTheDocument();
    expect(screen.getByLabelText('pinterest')).toBeInTheDocument();
    expect(screen.getByLabelText('reddit')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
  });
});

test('should exist description, shipping and payment', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const titleDescription = screen.getByTestId('description');
    expect(titleDescription).toHaveTextContent('Description');
    const descriptionText = screen.getByTestId('description-text');
    expect(descriptionText).toHaveTextContent('Uma descrição teste');

    const titleShipping = screen.getByTestId('shipping');
    expect(titleShipping).toHaveTextContent('Shipping');
    const shippingText = screen.getByTestId('shipping-text');
    expect(shippingText).toHaveTextContent(
      'Os portes de envio serão à responsabilidade do vencedor.'
    );

    const titlePayment = screen.getByTestId('payment');
    expect(titlePayment).toHaveTextContent('Payment');
    const paymentText = screen.getByTestId('payment-text');
    expect(paymentText).toHaveTextContent(
      'O pagamento é realizado por transferência bancária. No final do leilão, será comunicado ao vencedor por email os dados bancários. O pagamento deve ser efetuado no prazo de quarenta e oito horas.'
    );
  });
});

test('should exist comment box', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const createComment = screen.getByTestId('create-comment');
    expect(createComment).toBeInTheDocument();
  });
});

test('should exist 2 auction thumbs in auction list', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const titleOtherAuctions = screen.getByTestId('title-other-auctions');
    expect(titleOtherAuctions).toBeInTheDocument();
    const btnSeeAllAuction = screen.getByTestId('see-all-auctions');
    expect(btnSeeAllAuction).toBeInTheDocument();

    const auctionThumb1 = screen.getByTestId('listAuction-1');
    expect(auctionThumb1).toBeInTheDocument();

    const auctionThumb2 = screen.getByTestId('listAuction-2');
    expect(auctionThumb2).toBeInTheDocument();
  });
});

test('should exist one project thumb', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const project = screen.getByTestId('projectThumb');
    expect(project).toBeInTheDocument();
  });
});
