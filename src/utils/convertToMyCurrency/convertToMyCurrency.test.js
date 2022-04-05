import React from 'react';
import { FormattedNumber } from 'react-intl';
import '@testing-library/jest-dom';
import convertToMyCurrency from '.';

test('convertToMyCurrency should return value without my currency', () => {
  const currency = {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.19',
    symbol: '€',
    status: true,
    lastUpdate: '2020-11-26 12:00:05',
  };

  expect(convertToMyCurrency(100, currency)).toEqual(
    <FormattedNumber value={100} style="currency" currency={currency.small} />
  );
});

test('convertToMyCurrency should return value with my currency', () => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      currency: {
        id: 2,
        name: 'Dollar',
        small: 'USD',
        value: '1.00',
        symbol: '$',
        status: true,
        lastUpdate: '2020-11-26 12:00:05',
      },
    })
  );

  const currency = {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.19',
    symbol: '€',
    status: true,
    lastUpdate: '2020-11-26 12:00:05',
  };

  expect(convertToMyCurrency(100, currency)).toEqual(
    <FormattedNumber value={119} style="currency" currency="USD" />
  );
});

test('convertToMyCurrency should return value with my currency equal to localstorage', () => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      currency: {
        id: 2,
        name: 'Dollar',
        small: 'USD',
        value: '1.00',
        symbol: '$',
        status: true,
        lastUpdate: '2020-11-26 12:00:05',
      },
    })
  );

  const currency = {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.19',
    symbol: '€',
    status: true,
    lastUpdate: '2020-11-26 12:00:05',
  };

  expect(convertToMyCurrency(100, currency)).toEqual(
    <FormattedNumber value={119} style="currency" currency="USD" />
  );
});
