/* global expect */
import React from 'react';
import { FormattedNumber } from 'react-intl';
import {
  getEmployeeName, addUrlParam, removeUrlParam, getUrlParam, filterUnique, convertToMyCurrency, getLocalStorageAuctionPrivateCode, isCompanyAdmin, isValidURL,
} from '../index';

describe('test utils functions', () => {
  test('should return getEmployeeName', () => {
    const userEmployee = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [
        {
          company_id: 1, name: 'António Santos', role: 'admin', department: null, user: null,
        }, {
          company_id: 2, name: 'João Paulo', role: null, department: null, user: null,
        }, {
          company_id: 3, name: 'Manuel Silva', role: null, department: null, user: null,
        },
      ],
    };
    const user = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [],
    };
    expect(getEmployeeName(1, userEmployee)).toEqual('António Santos');
    expect(getEmployeeName(2, userEmployee)).toEqual('João Paulo');
    expect(getEmployeeName(3, userEmployee)).toEqual('Manuel Silva');
    expect(getEmployeeName(4, user)).toEqual('António Santos');
  });

  test('call addUrlParam to add url parameter', () => {
    addUrlParam('page', '2');
    addUrlParam('id', '1');
    expect(global.window.location.search).toEqual('?page=2&id=1');
  });

  test('call removeUrlParam to remove url parameter', () => {
    addUrlParam('page', '2');
    addUrlParam('id', '1');
    removeUrlParam('page');
    expect(global.window.location.search).toEqual('?id=1');
  });

  test('should return addUrlParam', () => {
    addUrlParam('page', '2');
    expect(getUrlParam('page')).toEqual('2');
  });

  test('should return array without duplicate keys', () => {
    const array = [{
      id: 1,
      name: 'Name1',
    }, {
      id: 2,
      Name: 'Name2',
    }, {
      id: 1,
      name: 'Name3',
    }];

    const expectArray = [{
      id: 1,
      name: 'Name1',
    }, {
      id: 2,
      Name: 'Name2',
    }];

    filterUnique(array, 'id');
    expect(filterUnique(array, 'id')).toEqual(expectArray);
  });

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

    expect(convertToMyCurrency(100, currency)).toEqual(<FormattedNumber
      value={100}
      style="currency"
      currency={currency.small}
    />);
  });

  test('convertToMyCurrency should return value with my currency', () => {
    localStorage.setItem('currency', JSON.stringify({
      id: 2,
      name: 'Dollar',
      small: 'USD',
      value: '1.00',
      symbol: '$',
      status: true,
      lastUpdate: '2020-11-26 12:00:05',
    }));

    const currency = {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.19',
      symbol: '€',
      status: true,
      lastUpdate: '2020-11-26 12:00:05',
    };

    expect(convertToMyCurrency(100, currency)).toEqual(<FormattedNumber
      value={119}
      style="currency"
      currency="USD"
    />);
  });

  test('convertToMyCurrency should return value with my currency equal to localstorage', () => {
    localStorage.setItem('currency', JSON.stringify({
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.19',
      symbol: '€',
      status: true,
      lastUpdate: '2020-11-26 12:00:05',
    }));

    const currency = {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.19',
      symbol: '€',
      status: true,
      lastUpdate: '2020-11-26 12:00:05',
    };

    expect(convertToMyCurrency(100, currency)).toEqual(<FormattedNumber
      value={100}
      style="currency"
      currency={currency.small}
    />);
  });

  test('getlocalstorage', () => {
    localStorage.setItem('privateCode', JSON.stringify([{
      id: 1,
      code: 123456,
    }]));

    expect(getLocalStorageAuctionPrivateCode(1)).toEqual(123456);
    expect(getLocalStorageAuctionPrivateCode(2)).toEqual(null);
  });

  test('should return isCompanyAdmin', () => {
    const userWithWorkEmail = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [
        {
          company_id: 1, name: 'António Santos', role: 'admin', department: null, user: null,
        }, {
          company_id: 2, name: 'João Paulo', role: 'owner', department: null, user: null,
        }, {
          company_id: 3, name: 'Manuel Silva', role: null, department: null, user: null,
        },
      ],
    };

    const userWithWorkEmailEmpty = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [],
    };

    const withoutWithWorkEmail = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
    };

    expect(isCompanyAdmin(1, userWithWorkEmail)).toBe(true);
    expect(isCompanyAdmin(2, userWithWorkEmail)).toBe(true);
    expect(isCompanyAdmin(3, userWithWorkEmail)).toBe(false);
    expect(isCompanyAdmin(4, userWithWorkEmail)).toBe(false);
    expect(isCompanyAdmin(1, userWithWorkEmailEmpty)).toBe(false);
    expect(isCompanyAdmin(1, withoutWithWorkEmail)).toBe(false);
  });

  test('should return if url is valid', () => {
    expect(isValidURL('https://www.esolidar.com')).toBe(true);
    expect(isValidURL('esolidar.com')).toBe(true);
    expect(isValidURL('esolidar')).toBe(false);
  });
});
