import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AuctionAddForm from '../AuctionAddForm';
import company from '../../../../__mocks__/company';

const fx = jest.fn();

const props = {
  loadingPage: false,
  action: null,
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
  getInstitutionCategories: fx,
  getInstitutions: fx,
  getProjectsList: fx,
  getBrandsList: fx,
  postUploadImage: fx,
  addImages: {},
  postAuction: fx,
  addAuction: {},
  postAuctionDeleteImage: fx,
  userRole: 'company',
  userBankTransfer: {},
  company,
  locale: 'pt',
};

const propsEdit = {
  auctionId: 287,
  loadingPage: false,
  action: 'edit',
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
  getInstitutionCategories: fx,
  getInstitutions: fx,
  getProjectsList: fx,
  getBrandsList: fx,
  postUploadImage: fx,
  addImages: {},
  postAuction: fx,
  addAuction: {},
  postAuctionDeleteImage: fx,
  userRole: 'company',
  userBankTransfer: {},
  getAuctionDetail: fx,
  company,
  locale: 'pt',
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
    const btnCancel = screen.getByTestId('btn-cancel');
    expect(auctionInformation).toBeInTheDocument();
    expect(auctionInformation).toHaveTextContent('auctions.add.form.title');
    expect(btnSubmit).toHaveTextContent('Submit auction');
    expect(btnCancel).toHaveTextContent('Cancel');
  });
});

test('simulate edit auction form', async () => {
  render(
    <IntlProvider locale="en">
      <AuctionAddForm {...propsEdit} />
    </IntlProvider>
  );
  await waitFor(() => {
    const auctionTitle = screen.getByTestId('auction-edit-title');
    const auctionInformation = screen.getByTestId('auction-information');
    const btnSubmit = screen.getByTestId('btn-submit-edit');
    const btnCancel = screen.getByTestId('btn-cancel');
    expect(auctionTitle).toBeInTheDocument();
    expect(auctionInformation).toBeInTheDocument();
    expect(auctionInformation).toHaveTextContent('auctions.add.form.title');
    expect(btnSubmit).toHaveTextContent('Update auction');
    expect(btnCancel).toHaveTextContent('Cancel');
  });
});
