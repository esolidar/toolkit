/* global expect */
/* global beforeAll */
/* global afterAll */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AuctionSupport from '../AuctionSupport';

const propsAuctionSupport = {
  auction: {
    recipient: {
      institution: {
        id: 30,
        name: 'Helpo',
        thumbs: {
          thumb: 'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg',
        },
        description: 'A Planeta Limpo Recicláveis é uma empresa em expansão, que trabalha no ramo de reciclagem desde de 2003 e atua especificamente.',
      },
      phones: [],
    },
  },
  translateMessage: () => 'Some text',
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
  localStorage.setItem('lang', 'en');
});

afterAll(() => {
  localStorage.clear();
});

test('should exist section supported with thumb, name, description and button', () => {
  render(<IntlProvider locale="en"><AuctionSupport {...propsAuctionSupport} /></IntlProvider>);

  const supported = screen.getByTestId('supported-section');
  expect(supported).toBeInTheDocument();
  const thumbImage = screen.getByAltText('thumb');
  expect(thumbImage).toBeInTheDocument();
  expect(thumbImage).toHaveAttribute('src', 'https://cdn.testesolidar.com/institutions/511ca19c-c9a7-4d18-a735-d08e1906dbbe-THUMB.jpeg');
  const supportedName = screen.getByTestId('supported-name');
  expect(supportedName).toBeInTheDocument();
  expect(supportedName).toHaveTextContent('Helpo');
  const supportedDescription = screen.getByTestId('supported-summary');
  expect(supportedDescription).toBeInTheDocument();
  expect(supportedDescription).toHaveTextContent('A Planeta Limpo Recicláveis é uma empresa em expansão, que trabalha no ramo de reciclagem desde de 2003 e atua especificamente.');
  const supportedBtn = screen.getByTestId('btn-support-charity');
  expect(supportedBtn).toBeInTheDocument();
});
