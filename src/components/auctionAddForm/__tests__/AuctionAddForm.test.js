import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AuctionAddForm from '../AuctionAddForm';

const fx = jest.fn();

const props = {
  loadingPage: false,
  action: null,
  intl: fx,
  institutions: {},
  categories: [],
  showInstitutions: true,
  showProjects: true,
  projectsList: {},
  primaryColor: 'red',
  subscription: [
    {
      created_at: '2019-09-18 10:57:37',
      description: null,
      description_en: null,
      id: 1,
      name: 'whitelabel',
      name_en: null,
      pivot: { subscription_id: 10, feature_id: 2, hide: 0 },
      status: true,
      updated_at: '2019-10-25 10:07:20',
    },
    {
      created_at: '2019-09-18 10:57:37',
      description: null,
      description_en: null,
      id: 2,
      name: 'projects',
      name_en: null,
      pivot: { subscription_id: 10, feature_id: 2, hide: 0 },
      status: true,
      updated_at: '2019-10-25 10:07:20',
    },
    {
      created_at: '2019-09-18 10:57:37',
      description: null,
      description_en: null,
      id: 3,
      name: 'auctions',
      name_en: null,
      pivot: { subscription_id: 10, feature_id: 2, hide: 0 },
      status: true,
      updated_at: '2019-10-25 10:07:20',
    },
  ],
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
  addImages: {},
  postAuction: jest.fn(),
  addAuction: {},
  postAuctionDeleteImage: jest.fn(),
  userRole: 'company',
  userBankTransfer: {},
};

const JSONData = {
  bank_transfer: '{}',
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
  render(
    <IntlProvider locale="en">
      <AuctionAddForm {...props} />
    </IntlProvider>
  );
  await waitFor(() => {
    const auctionInformation = screen.getByTestId('auction-information');
    const btnSubmit = screen.getByTestId('btn-submit');
    const selectProjects = screen.getByTestId('select-projects');
    expect(auctionInformation).toBeInTheDocument();
    expect(auctionInformation).toHaveTextContent('Auction information');
    expect(btnSubmit).toHaveTextContent('Submit auction');
    expect(selectProjects).toBeInTheDocument();
    expect(selectProjects).toHaveTextContent('Select one project');
  });
});
