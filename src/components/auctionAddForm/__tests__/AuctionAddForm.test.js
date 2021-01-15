/* global expect */
/* global jest */
/* global beforeAll */
/* global afterAll */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AuctionAddForm from '../AuctionAddForm';

const fx = jest.fn();

const props = {
  loadingPage: false,
  action: null,
  intl: fx,
  institutions: [],
  categories: [],
  showInstitutions: true,
  showProjects: true,
  projectsList: [],
  primaryColor: 'red',
  subscription: [],
  timeZones: [
    'Africa/Khartoum',
    'Africa/Kigali',
    'Africa/Kinshasa',
    'Africa/Lagos',
    'Africa/Libreville',
    'Africa/Lome',
    'Africa/Luanda',
    'Africa/Lubumbashi',
    'Africa/Lusaka',
  ],
  getInstitutionCategories: jest.fn(),
  getInstitutions: jest.fn(),
  getProjectsList: jest.fn(),
  getBrandsList: jest.fn(),
  postUploadImage: jest.fn(),
  addImages: jest.fn(),
  postAuction: jest.fn(),
  addAuction: jest.fn(),
  postAuctionDeleteImage: jest.fn(),
  userRole: 'company',
};

const JSONData = {
  country: {
    auction_tax: 0.1,
  },
  currency: {
    symbol: '€',
  },
  whitelabel: {
    id: 1,
  },
};

beforeAll(() => {
  localStorage.setItem('company', JSON.stringify(JSONData));
});

afterAll(() => {
  localStorage.clear();
});

test('simulate add auction form', async () => {
  render(<IntlProvider locale="en"><AuctionAddForm {...props} /></IntlProvider>);
  await waitFor(() => {
    const auctionInformation = screen.getByTestId('auction-information');
    const btnSubmit = screen.getByTestId('btn-submit');
    expect(auctionInformation).toBeInTheDocument();
    expect(auctionInformation).toHaveTextContent('Auction information');
    expect(btnSubmit).toHaveTextContent('Submit auction');
  });
});
