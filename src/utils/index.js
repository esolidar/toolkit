import React from 'react';
import slg from 'slugify';
import { FormattedNumber } from 'react-intl';
import { findIndex, find } from 'lodash';
import XLSX from 'xlsx';

export const getEmployeeName = (companyId, user) => {
  if (user && user.work_email) {
    const workEmails = user.work_email;
    if (companyId && workEmails.length > 0) {
      const workEmail = find(workEmails, employee => employee.company_id === companyId);
      return workEmail && workEmail.name ? workEmail.name : `${user.firstName} ${user.lastName}`;
    }
    return `${user.firstName} ${user.lastName}`;
  }
  return '--';
};

export const isDefined = v => v !== undefined && v !== null;

export const clone = v => JSON.parse(JSON.stringify(v));

export const firstElemOf = array => array[0];

export const lastElemOf = array => array[array.length - 1];

export const addUrlParam = (param, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({ path: url.href }, '', url.href);
};

export const removeUrlParam = param => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.pushState({ path: url.href }, '', url.href);
};

export const getUrlParam = param => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param);
};

export const removeAllUrlParams = url => url.substring(0, url.indexOf('?'));

export const filterUnique = (array, key) =>
  array.filter((v, i, a) => a.findIndex(t => t[key] === v[key]) === i);

export const convertToMyCurrency = (value, currency) => {
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

export const getLocalStorageAuctionPrivateCode = auctionId => {
  if (localStorage.privateCode) {
    const hasAuctionCode = JSON.parse(localStorage.privateCode);
    const auctionCode = hasAuctionCode.find(item => +item.id === +auctionId);
    return auctionCode ? auctionCode.code : null;
  }
  return null;
};

export const isCompanyAdmin = (companyId, user) => {
  const isAdmin = findIndex(
    user.work_email,
    o => o.company_id === companyId && (o.role === 'admin' || o.role === 'owner')
  );
  return isAdmin >= 0;
};

export const isValidURL = str => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};

export const isEmpty = obj => Object.keys(obj).length === 0;

export const blinkElement = (elmId, className) => {
  const element = document.getElementById(elmId);
  if (!isDefined(element)) return;
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, 3000);
};

export const slugify = v =>
  slg(v, {
    replacement: '-',
    remove: /[?$*_+~./,()'"!\-:@]/g,
    lower: true,
  });

export const downloadExcel = (translateMessage, data, columns, fileName) => {
  const listFilterColumns = data.map(item => {
    const obj = {};
    columns.forEach(col => {
      if (col.type === 'bool') {
        obj[col.text] =
          item[col.apiFieldName] === 1
            ? translateMessage({ id: 'yes' })
            : translateMessage({ id: 'no' });
      } else {
        obj[col.text] = item[col.apiFieldName];
      }
    });
    return obj;
  });

  const ws = XLSX.utils.json_to_sheet([...listFilterColumns]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'List');
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};
