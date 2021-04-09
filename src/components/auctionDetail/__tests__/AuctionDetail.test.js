import '@testing-library/jest-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { advanceTo } from 'jest-date-mock';
import { IntlProvider } from 'react-intl';
import AuctionDetail from '../index';

const fx = jest.fn();
const props = {
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
    code: 200,
    data: {
      private: 0,
      id: 299,
      user_id: 1124,
      cause_id: null,
      cc: 1,
      currency_id: 1,
      title: "Work: Gustavo Massola's Collective Move",
      title_en: "Work: Gustavo Massola's Collective Move",
      bid_start: 3,
      dateStart: '2020-02-08 07:00:00',
      dateLimit: '2020-12-30 16:00:00',
      bid_interval: 10,
      bid_max_interval: 100,
      status: 'A',
      goal: 1000,
      description: 'Uma descrição teste',
      description_en: 'Description test',
      shipping_description: 'Os portes de envio serão à responsabilidade do vencedor.',
      shipping_description_en: 'Please note postage is not included as part of the final bid.',
      payment_description:
        'O pagamento é realizado por transferência bancária. No final do leilão, será comunicado ao vencedor por email os dados bancários. O pagamento deve ser efetuado no prazo de quarenta e oito horas.',
      payment_description_en:
        'The method of payment is bank transfer. At the end of the auction the winner shall be served notice by email of the bank details. The payment must be made within forty-eight hours.',
      last_bid: {
        id: 1241,
        auction_id: 299,
        value: 31,
        hidden: 0,
        stripelast4: null,
        dateAdded: '2020-04-20 14:25:58',
        user: {
          id: 9,
          institution_id: null,
          firstName: 'Joel F.',
          lastName: 'Calheiros',
          image: 'https://static.esolidar.com/users/9/1606232953.jpg',
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.19',
            symbol: '€',
            status: true,
            lastUpdate: '2020-11-26 12:00:05',
          },
          language: {
            id: 2,
            name: 'pt',
            translate: 'Português (PT)',
            status: 1,
            locale: 'pt_PT',
            dateAdded: '2015-02-24 11:02:06',
          },
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/9/1606232953.jpg',
            standard: 'https://cdn.testesolidar.com/users/9/1606232953-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/9/1606232953-THUMB.jpg',
          },
          work_email: [
            {
              company_id: 1,
              name: '',
              role: 'admin',
              department: null,
              user: null,
            },
          ],
          name: 'Joel F. Calheiros',
          s3_key: 'users/9/1606232953.jpg',
          institution: null,
          phones: [
            {
              id: 77,
              user_id: 9,
              phone: '+351965790981',
              code: '7597',
              main: 1,
              twilio_sid: 'SM05d868fe86a44bd3b49cc2d11bc67ff2',
              verified: 1,
              updatedDate: '2016-10-14 13:46:02',
              dateAdded: '2016-10-14 14:45:51',
            },
          ],
        },
      },
      images: [
        {
          id: 200,
          auction_id: 299,
          streamImage: 'amazons3',
          image_name:
            'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
          image_type: 'image/jpeg',
          image_size: '140004',
          default: 1,
          thumb: 0,
          position: 0,
          fb_image: 0,
          lastUpdated: '2020-03-10 11:24:57',
          dateAdded: '2019-09-16 10:51:01',
          thumbs: {
            standard:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg',
            detail:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg',
            pin:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg',
            thumb:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg',
          },
          s3_key: 'products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
        },
        {
          id: 200,
          auction_id: 299,
          streamImage: 'amazons3',
          image_name:
            'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
          image_type: 'image/jpeg',
          image_size: '140004',
          default: 1,
          thumb: 0,
          position: 0,
          fb_image: 0,
          lastUpdated: '2020-03-10 11:24:57',
          dateAdded: '2019-09-16 10:51:01',
          thumbs: {
            standard:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg',
            detail:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg',
            pin:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg',
            thumb:
              'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg',
          },
          s3_key: 'products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
        },
      ],
      video: 'https://www.youtube.com/watch?v=cVFzblT5VPE',
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
        hidden: 0,
        stripelast4: null,
        dateAdded: '2020-04-20 14:25:58',
        user: {
          id: 9,
          institution_id: null,
          firstName: 'Joel F.',
          lastName: 'Calheiros',
          image: 'https://static.esolidar.com/users/9/1606232953.jpg',
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.19',
            symbol: '€',
            status: true,
            lastUpdate: '2020-11-26 12:00:05',
          },
          language: {
            id: 2,
            name: 'pt',
            translate: 'Português (PT)',
            status: 1,
            locale: 'pt_PT',
            dateAdded: '2015-02-24 11:02:06',
          },
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/9/1606232953.jpg',
            standard: 'https://cdn.testesolidar.com/users/9/1606232953-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/9/1606232953-THUMB.jpg',
          },
          work_email: [
            {
              company_id: 1,
              name: '',
              role: 'admin',
              department: null,
              user: null,
            },
          ],
          name: 'Joel F. Calheiros',
          s3_key: 'users/9/1606232953.jpg',
          institution: null,
          phones: [
            {
              id: 77,
              user_id: 9,
              phone: '+351965790981',
              code: '7597',
              main: 1,
              twilio_sid: 'SM05d868fe86a44bd3b49cc2d11bc67ff2',
              verified: 1,
              updatedDate: '2016-10-14 13:46:02',
              dateAdded: '2016-10-14 14:45:51',
            },
          ],
        },
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
        work_email: [],
        name: null,
        s3_key: null,
        institution: {
          id: 30,
          name: 'Helpo',
          image:
            'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe.jpeg',
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
          description:
            'A Planeta Limpo Recicláveis é uma empresa em expansão, que trabalha no ramo de reciclagem desde de 2003 e atua especificamente.',
        },
        phones: [],
      },
      brand: {
        id: 3,
        name: 'A marca da Cátia Catita',
        username: 'catita',
        logo: 'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d.png',
        cover:
          'https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716.jpeg',
        logo_thumbs: {
          standard:
            'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-STANDARD.png',
          detail:
            'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-DETAIL.png',
          thumb:
            'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-THUMB.png',
        },
        cover_thumbs: {
          standard:
            'https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716-STANDARD.jpeg',
          detail:
            'https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716-DETAIL.jpeg',
        },
        s3_logo_key: 'brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d.png',
        s3_cover_key: 'brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716.jpeg',
      },
      project: {
        id: 56,
        whitelabel_id: 5,
        category_id: 17,
        as_company: 0,
        description: 'Lorem ipsum dolor sit amet',
        cover: null,
        title: 'Projeto para ajudar a malta',
        user_id: 51790,
        review_average: 5,
        whitelabel_config: {
          id: 5,
          company_id: 1,
          company: {
            id: 1,
            name: 'Webankor (eSolidar)',
            logo: 'https://static.esolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
            cover_image:
              'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            thumbs: {
              detail:
                'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-DETAIL.jpg',
              thumb:
                'https://cdn.testesolidar.com/companies/28eb9ced-4b5f-4503-8d82-486e292bb312-THUMB.jpg',
              cover_image:
                'https://cdn.testesolidar.com/companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            },
            s3_logo_key: 'companies/28eb9ced-4b5f-4503-8d82-486e292bb312.jpg',
            s3_cover_key: 'companies/1/cover/3f91a5b1-8620-4cd5-aec7-f76a05454bf7.jpg',
            country: null,
            currency: null,
          },
        },
        ods: [
          {
            id: 1,
            ods_id: 1,
            tag_name: 'ods-1',
            status: true,
            updated_at: '2020-02-05 17:26:34',
            created_at: '2020-02-05 17:26:27',
            laravel_through_key: 56,
            name: '1-ods-1',
          },
          {
            id: 8,
            ods_id: 8,
            tag_name: 'ods-8',
            status: true,
            updated_at: '2020-02-05 18:03:49',
            created_at: '2020-02-05 18:03:49',
            laravel_through_key: 56,
            name: '8-ods-8',
          },
        ],
        user: {
          id: 51790,
          institution_id: null,
          firstName: 'António',
          lastName: 'Joaquim',
          image: 'https://cdn.testesolidar.com/users/51790/1593441499.jpg?v=1593441500',
          streamImage: 'amazons3',
          language: {
            id: 2,
            name: 'pt',
            translate: 'Português (PT)',
            status: 1,
            locale: 'pt_PT',
            dateAdded: '2015-02-24 11:02:06',
          },
          currency: {
            id: 1,
            name: 'Euro',
            small: 'EUR',
            value: '1.203',
            symbol: '€',
            status: true,
            lastUpdate: '2021-02-02 12:00:04',
          },
          thumbs: {
            original: 'https://cdn.testesolidar.com/users/51790/1593441499.jpg?v=1593441500',
            standard: 'https://cdn.testesolidar.com/users/51790/1593441499-STANDARD.jpg',
            thumb: 'https://cdn.testesolidar.com/users/51790/1593441499-THUMB.jpg',
          },
          work_email: [],
          name: 'António Joaquim',
          s3_key: 'users/51790/1593441499.jpg?v=1593441500',
          institution: null,
          phones: [],
        },
        images: [
          {
            id: 167,
            project_id: 56,
            streamImage: 'amazons3',
            image: 'whitelabel/5/projects/78756737-26a6-4976-b454-c5c679f1e1a8.jpg',
            image_type: 'jpg',
            image_size: 501701,
            default: 1,
            position: 1,
            updated_at: '2020-07-30 08:42:05',
            created_at: '2020-07-30 08:41:54',
          },
        ],
      },
    },
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
  translateMessage: () => 'Some text',
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
  translateMessage: () => 'Some text',
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
});

afterAll(() => {
  localStorage.clear();
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
    expect(titlePrivate).toHaveTextContent(
      'Insert the access code to display and bid on the auction'
    );
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
    expect(auctionSupport).toHaveTextContent('This auctions supports:');
    const thumbImage = screen.getByAltText('thumb-supported');
    expect(thumbImage).toBeInTheDocument();
    expect(thumbImage).toHaveAttribute(
      'src',
      'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg'
    );
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
    expect(endDateInfo).toHaveTextContent(
      'This auction ended in: Wednesday, December 30, 2020 4:00 PM'
    );
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

test('should open modal bid', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    const inputBid = screen.getByTestId('inputBid');
    expect(inputBid).toBeInTheDocument();
    fireEvent.change(inputBid, { target: { value: '32' } });
    expect(inputBid.value).toBe('32');
    const btnBid = screen.getByTestId('btn-bid');
    userEvent.click(btnBid);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});

test('should render component AuctionDetail and verify checkboxs', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionDetail {...props} />
    </IntlProvider>
  );

  await waitFor(() => {
    fireEvent.click(screen.getByText('Subscribe the auction.'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('checkStart').checked).toEqual(true);
    expect(screen.getByTestId('checkEmailBid').checked).toEqual(false);
    expect(screen.getByTestId('checkEmail24').checked).toEqual(true);
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
    expect(titleDescription).toHaveTextContent('Some text');
    const descriptionText = screen.getByTestId('description-text');
    expect(descriptionText).toHaveTextContent('Uma descrição teste');

    const titleShipping = screen.getByTestId('shipping');
    expect(titleShipping).toHaveTextContent('Some text');
    const shippingText = screen.getByTestId('shipping-text');
    expect(shippingText).toHaveTextContent(
      'Os portes de envio serão à responsabilidade do vencedor.'
    );

    const titlePayment = screen.getByTestId('payment');
    expect(titlePayment).toHaveTextContent('Some text');
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
