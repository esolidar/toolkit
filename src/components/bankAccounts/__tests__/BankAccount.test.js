import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import userEvent from '@testing-library/user-event';
import BankAccount from '../index';
import {
  internationalBankAccount,
  nationalBankAccount,
  brBankAccount,
  ukBankAccount,
} from '../../../../__mocks__/bankAccount';

const fx = jest.fn();

const propsWithoutBankAccount = {
  countryId: 231,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  userBankTransfer: null,
};

const propsBankAccount = {
  countryId: 231,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  userBankTransfer: { ...internationalBankAccount, ...ukBankAccount },
};

const propsBrBankAccount = {
  countryId: 150,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  userBankTransfer: brBankAccount,
};

const propsNationalBankAccount = {
  countryId: 208,
  color: 'green',
  userId: 1,
  postBankTransfer: fx,
  updateLocalstorage: fx,
  getBankTransfer: {},
  userBankTransfer: nationalBankAccount,
};

test('simulate bank account', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsWithoutBankAccount} />
    </IntlProvider>
  );
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

test('Verify fields Brasil bank account', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsBrBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const btnAddAccount = screen.getByTestId('add-bank-account');
    userEvent.click(btnAddAccount);
    const bankNumber = screen.getByTestId('bankNumber');
    expect(bankNumber).toBeInTheDocument();
    const beneficiary = screen.getByTestId('beneficiary');
    expect(beneficiary).toBeInTheDocument();
    const cnpj = screen.getByTestId('cnpj');
    expect(cnpj).toBeInTheDocument();
    const bankBranch = screen.getByTestId('bank_branch');
    expect(bankBranch).toBeInTheDocument();
    const bankCheckingAccount = screen.getByTestId('bank_checking_account');
    expect(bankCheckingAccount).toBeInTheDocument();
  });
});

test('Verify fields National bank account', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsNationalBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const btnAddAccount = screen.getByTestId('add-bank-account');
    userEvent.click(btnAddAccount);
    const iban = screen.getByTestId('iban');
    expect(iban).toBeInTheDocument();
    const nib = screen.getByTestId('nib');
    expect(nib).toBeInTheDocument();
    const bic = screen.getByTestId('bic');
    expect(bic).toBeInTheDocument();
  });
});

test('simulate add international bank account', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const internationalAccounts = screen.getByTestId('international-accounts-0');
    expect(internationalAccounts).toBeInTheDocument();
  });
});

test('simulate add national bank account', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const internationalAccounts = screen.getByTestId('national-accounts-0');
    expect(internationalAccounts).toBeInTheDocument();
  });
});

test('simulate add national bank account without data', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsWithoutBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const btnAddAccount = screen.getByTestId('add-bank-account');
    userEvent.click(btnAddAccount);
    const nationalAccounts = screen.getByTestId('national-accounts-0');
    expect(nationalAccounts).toBeInTheDocument();

    userEvent.click(btnAddAccount);
    const secondNationalAccounts = screen.queryByText('BANK ACCOUNT #2');
    expect(secondNationalAccounts).not.toBeInTheDocument();
  });
});

test('simulate delete international bank account show modal', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const btnDelete0 = screen.getByTestId('btn-delete-international-account-1');
    const btnDelete1 = screen.getByTestId('btn-delete-international-account-1');
    expect(btnDelete0).toBeInTheDocument();

    userEvent.click(btnDelete1);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});

test('simulate delete natoinal bank account show modal', async () => {
  render(
    <IntlProvider locale="en">
      <BankAccount {...propsBankAccount} />
    </IntlProvider>
  );
  await waitFor(() => {
    const btnDelete0 = screen.getByTestId('btn-delete-national-account-1');
    const btnDelete1 = screen.getByTestId('btn-delete-international-account-1');
    expect(btnDelete0).toBeInTheDocument();

    userEvent.click(btnDelete1);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
