/* global expect */
/* global jest */
/* global beforeAll */
/* global afterAll */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AuctionDetail from '../AuctionDetail';

const fx = jest.fn();
const props = {
  auctionId: 299,
  getAuctionDetail: fx,
  getAuctionBidList: fx,
  getAuctionList: fx,
  getAuctionComment: fx,
  getAuctionSubscribe: fx,
  getStripeCreditCardlist: fx,
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
      payment_description: 'O pagamento é realizado por transferência bancária. No final do leilão, será comunicado ao vencedor por email os dados bancários. O pagamento deve ser efetuado no prazo de quarenta e oito horas.',
      payment_description_en: 'The method of payment is bank transfer. At the end of the auction the winner shall be served notice by email of the bank details. The payment must be made within forty-eight hours.',
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
          image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/9/1606232953.jpg',
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
          image_name: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
          image_type: 'image/jpeg',
          image_size: '140004',
          default: 1,
          thumb: 0,
          position: 0,
          fb_image: 0,
          lastUpdated: '2020-03-10 11:24:57',
          dateAdded: '2019-09-16 10:51:01',
          thumbs: {
            standard: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg',
            detail: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg',
            pin: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg',
            thumb: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg',
          },
          s3_key: 'products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
        },
        {
          id: 200,
          auction_id: 299,
          streamImage: 'amazons3',
          image_name: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2.jpg',
          image_type: 'image/jpeg',
          image_size: '140004',
          default: 1,
          thumb: 0,
          position: 0,
          fb_image: 0,
          lastUpdated: '2020-03-10 11:24:57',
          dateAdded: '2019-09-16 10:51:01',
          thumbs: {
            standard: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-STANDARD.jpg',
            detail: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-DETAIL.jpg',
            pin: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-PIN.jpg',
            thumb: 'https://cdn.testesolidar.com/products/0bbf216d-f9ed-4836-8873-33c5eaf6d3e2-THUMB.jpg',
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
          image: 'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/users/9/1606232953.jpg',
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
          description: 'A Planeta Limpo Recicláveis é uma empresa em expansão, que trabalha no ramo de reciclagem desde de 2003 e atua especificamente.',
        },
        phones: [],
      },
      brand: {
        id: 3,
        name: 'A marca da Cátia Catita',
        username: 'catita',
        logo: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d.png',
        cover: 'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716.jpeg',
        logo_thumbs: {
          standard: 'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-STANDARD.png',
          detail: 'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-DETAIL.png',
          thumb: 'https://cdn.testesolidar.com/brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d-THUMB.png',
        },
        cover_thumbs: {
          standard: 'https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716-STANDARD.jpeg',
          detail: 'https://cdn.testesolidar.com/brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716-DETAIL.jpeg',
        },
        s3_logo_key: 'brands/cb3cc713-eca6-4b84-a16d-e40a64d20b5d.png',
        s3_cover_key: 'brands/cover/ae225554-9657-4e9a-863d-6fc4c399a716.jpeg',
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
  },
  auctionSubscribeList: {
    code: 200,
    data: {
      auction_on_start: 1,
      auction_first_bid: 0,
      auction_24h_end: 1,
    },
  },
};

const user = {
  phones: [
    {
      code: '6121',
      phone: '+351919552199',
      user_id: 51792,
      verified: 1,
    },
  ],
};

beforeAll(() => {
  localStorage.setItem('user', JSON.stringify(user));
});

afterAll(() => {
  localStorage.clear();
});

test('should render component AuctionDetail and verify checkboxs', async () => {
  render(<IntlProvider locale="en"><AuctionDetail {...props} /></IntlProvider>);

  await waitFor(() => {
    fireEvent.click(screen.getByText('Subscribe the auction.'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('checkStart').checked).toEqual(true);
    expect(screen.getByTestId('checkEmailBid').checked).toEqual(false);
    expect(screen.getByTestId('checkEmail24').checked).toEqual(true);
  });
});
