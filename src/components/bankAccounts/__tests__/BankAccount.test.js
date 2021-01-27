/* global expect */
/* global jest */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import userEvent from '@testing-library/user-event';
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
  userBankTransfer: null,
};

const propsBankAccount = {
  intl: fx,
  countryId: 231,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  userBankTransfer: {
    1: [{
      iban: '123123123123',
      bic: '123123',
    },
    {
      iban: '123123123123',
      bic: '123123',
    }],
    231: [{
      accountholder: '123123',
      banksortcode: '123123',
      accountnumber: '132123',
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
    const internationalAccounts = screen.getByTestId('international-accounts-0');
    expect(internationalAccounts).toBeInTheDocument();
  });
});

test('simulate add national bank account', async () => {
  render(<IntlProvider locale="en"><BankAccount {...propsBankAccount} /></IntlProvider>);
  await waitFor(() => {
    const internationalAccounts = screen.getByTestId('national-accounts-0');
    expect(internationalAccounts).toBeInTheDocument();
  });
});

test('simulate delete international bank account show modal', async () => {
  render(<IntlProvider locale="en"><BankAccount {...propsBankAccount} /></IntlProvider>);
  await waitFor(() => {
    const btnDelete0 = screen.getByTestId('btn-delete-international-account-0');
    const btnDelete1 = screen.getByTestId('btn-delete-international-account-1');
    expect(btnDelete0).toBeInTheDocument();

    userEvent.click(btnDelete1);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});

test('simulate delete natoinal bank account show modal', async () => {
  render(<IntlProvider locale="en"><BankAccount {...propsBankAccount} /></IntlProvider>);
  await waitFor(() => {
    const btnDelete0 = screen.getByTestId('btn-delete-national-account-0');
    const btnDelete1 = screen.getByTestId('btn-delete-international-account-1');
    expect(btnDelete0).toBeInTheDocument();

    userEvent.click(btnDelete1);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
