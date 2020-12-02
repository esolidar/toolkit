import React from 'react';
import find from 'lodash/find';
import { FormattedNumber } from 'react-intl';

export const getEmployeeName = (companyId, user) => {
  if (user && user.work_email) {
    const workEmails = user.work_email;
    if (companyId && workEmails.length > 0) {
      const workEmail = find(workEmails, (employee) => employee.company_id === companyId);
      return workEmail && workEmail.name ? workEmail.name : `${user.firstName} ${user.lastName}`;
    }
    return `${user.firstName} ${user.lastName}`;
  }
  return '--';
};

export const isDefined = (v) => v !== undefined && v !== null;

export const clone = (v) => JSON.parse(JSON.stringify(v));

export const firstElemOf = (array) => array[0];

export const lastElemOf = (array) => array[array.length - 1];

export const addUrlParam = (param, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({ path: url.href }, '', url.href);
};

export const removeUrlParam = (param) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.pushState({ path: url.href }, '', url.href);
};

export const getUrlParam = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param);
};

export const filterUnique = (array, key) => array.filter((v, i, a) => a.findIndex((t) => (t[key] === v[key])) === i);

export const convertToMyCurrency = (value, currency) => {
  let convertedValue = value;
  const myCurrency = localStorage.currency && localStorage.currency !== 'null' ? JSON.parse(localStorage.currency) : currency;

  if (myCurrency.id !== currency.id) {
    convertedValue = (value * currency.value) / myCurrency.value;
  }

  return (
    <FormattedNumber
      value={convertedValue}
      style="currency"
      currency={myCurrency.small}
    />
  );
};
