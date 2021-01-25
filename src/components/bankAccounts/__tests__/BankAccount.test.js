/* global expect */
/* global jest */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import BankAccount from '../BankAccount';

const fx = jest.fn();

const propsWithoutBankAccount = {
  intl: fx,
  countryId: 231,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  bankTransfer: null,
};

const propsBankAccount = {
  intl: fx,
  countryId: 231,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  bankTransfer: {
    1: [{
      iban: '',
      bic: '',
    }],
    231: [{
      accountholder: '',
      banksortcode: '',
      accountnumber: '',
    }],
  },
};

test('simulate bank account', async () => {
  render(<IntlProvider locale="en"><BankAccount {...propsWithoutBankAccount} /></IntlProvider>);
  await waitFor(() => {
    const internationalAccountTitle = screen.getByTestId('international-account-title');
    const accountTitle = screen.getByTestId('account-title');
    const noInternationalAccounts = screen.getByTestId('no-international-accounts');
    const noNationalAccounts = screen.getByTestId('no-national-accounts');
    const submitButton = screen.getByTestId('submit-button');

    expect(internationalAccountTitle).toBeInTheDocument();
    expect(accountTitle).toBeInTheDocument();
    expect(internationalAccountTitle).toHaveTextContent('International bank accounts');
    expect(accountTitle).toHaveTextContent('Bank accounts');
    expect(submitButton).toBeInTheDocument();
    expect(noInternationalAccounts).toBeInTheDocument();
    expect(noNationalAccounts).toBeInTheDocument();
  });
});

test('simulate add international bank account', async () => {
  render(<IntlProvider locale="en"><BankAccount {...propsBankAccount} /></IntlProvider>);
  await waitFor(() => {
    const internationalAccounts = screen.getByTestId('international-accounts');
    expect(internationalAccounts).toBeInTheDocument();
  });
});

test('simulate add national bank account', async () => {
  render(<IntlProvider locale="en"><BankAccount {...propsBankAccount} /></IntlProvider>);
  await waitFor(() => {
    const internationalAccounts = screen.getByTestId('national-accounts');
    expect(internationalAccounts).toBeInTheDocument();
  });
});
