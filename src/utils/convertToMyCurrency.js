import React from 'react';
import { FormattedNumber } from 'react-intl';

const convertToMyCurrency = (value, currency) => {
  let convertedValue = value;
  const myCurrency =
    localStorage.user && JSON.parse(localStorage.user).currency !== 'null'
      ? JSON.parse(localStorage.user).currency
      : currency;

  if (myCurrency.id !== currency.id) {
    convertedValue = (value * currency.value) / myCurrency.value;
  }

  return <FormattedNumber value={convertedValue} style="currency" currency={myCurrency.small} />;
};

export default convertToMyCurrency;
