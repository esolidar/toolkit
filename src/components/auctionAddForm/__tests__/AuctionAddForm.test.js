/* global expect */
/* global jest */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
};

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
