import React from 'react';
import { FormattedNumber } from 'react-intl';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { advanceTo } from 'jest-date-mock';
import { youtubeUrl, iban } from '../../constants/regex';
import {
  getEmployeeName,
  addUrlParam,
  removeUrlParam,
  getUrlParam,
  removeAllUrlParams,
  filterUnique,
  convertToMyCurrency,
  getLocalStorageAuctionPrivateCode,
  isCompanyAdmin,
  isValidURL,
  isEmpty,
  blinkElement,
  slugify,
  isObject,
  isArray,
  getLocalStorage,
  removeAllButLast,
  isValidRegex,
  convertToUtc,
  firstElemOf,
  lastElemOf,
  clone,
  sortBy,
  hasThisFeature,
} from '../index';
import subscription from '../../../__mocks__/subscription';

describe('test utils functions', () => {
  test('should return getEmployeeName', () => {
    const userEmployee = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [
        {
          company_id: 1,
          name: 'António Santos',
          role: 'admin',
          department: null,
          user: null,
        },
        {
          company_id: 2,
          name: 'João Paulo',
          role: null,
          department: null,
          user: null,
        },
        {
          company_id: 3,
          name: 'Manuel Silva',
          role: null,
          department: null,
          user: null,
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
    const array = [
      {
        id: 1,
        name: 'Name1',
      },
      {
        id: 2,
        Name: 'Name2',
      },
      {
        id: 1,
        name: 'Name3',
      },
    ];

    const expectArray = [
      {
        id: 1,
        name: 'Name1',
      },
      {
        id: 2,
        Name: 'Name2',
      },
    ];

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

  test('getLocalStorageAuctionPrivateCode', () => {
    localStorage.setItem(
      'privateCode',
      JSON.stringify([
        {
          id: 1,
          code: 123456,
        },
      ])
    );

    expect(getLocalStorageAuctionPrivateCode(1)).toEqual(123456);
    expect(getLocalStorageAuctionPrivateCode(2)).toEqual(null);
    localStorage.clear();
    expect(getLocalStorageAuctionPrivateCode(1)).toEqual(null);
  });

  test('should return isCompanyAdmin', () => {
    const userWithWorkEmail = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [
        {
          company_id: 1,
          name: 'António Santos',
          role: 'admin',
          department: null,
          user: null,
        },
        {
          company_id: 2,
          name: 'João Paulo',
          role: 'owner',
          department: null,
          user: null,
        },
        {
          company_id: 3,
          name: 'Manuel Silva',
          role: null,
          department: null,
          user: null,
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

  test('return object empty true or false', () => {
    const objectEmpty = {};
    const objectNotEmpty = { id: 1, name: 'name' };
    const arrayEmpty = [];
    const arrayNotEmpty = [1, 2];
    expect(isEmpty(objectEmpty)).toBe(true);
    expect(isEmpty(objectNotEmpty)).toBe(false);
    expect(isEmpty(arrayEmpty)).toBe(true);
    expect(isEmpty(arrayNotEmpty)).toBe(false);
    expect(isEmpty('asdasd')).toBe(false);
    expect(isEmpty('')).toBe(true);
  });

  test('should have class blink and then remove class blink', async () => {
    document.body.innerHTML = '<div data-testid="text-id" id="text"></div>';
    blinkElement('text', 'blink');
    const wrapper = screen.getByTestId('text-id');
    expect(wrapper).toHaveClass('blink');

    setTimeout(() => {
      expect(wrapper).not.toHaveClass('blink');
    }, 3000);
  });

  test('should return slugify url', () => {
    const expectedString = '34-projecto-de-uma-organizacao';
    expect(slugify('34 projecto de uma organização ?*_+~./,()!:@')).toBe(expectedString);
  });

  test('should return slugify url with replace arg', () => {
    const expectedString = '34projectodeumaorganizacao';
    const filters = {
      replacement: '',
    };

    expect(slugify('34 projecto de uma organização ?*_+~./,()!:@', filters)).toBe(expectedString);
  });

  test('should return slugify url with replace arg "x"', () => {
    const expectedString = '34xprojectoxdexumaxorganizacao';
    const filters = {
      replacement: 'x',
    };

    expect(slugify('34 projecto de uma organização ?*_+~./,()!:@', filters)).toBe(expectedString);
  });

  test('should return slugify url with correct casing', () => {
    const expectedString = '34-Projecto-de-uma-Organizacao';
    const filters = {
      lower: false,
    };

    expect(slugify('34 Projecto de uma Organização ?*_+~./,()!:@', filters)).toBe(expectedString);
  });

  test('should return url without params', () => {
    const url = 'https//esolidar.com/teste?page=1';
    const expectedUrl = 'https//esolidar.com/teste';
    expect(removeAllUrlParams(url)).toBe(expectedUrl);
  });

  test('isObject function', () => {
    const obj = {};
    expect(isObject(obj)).toBe(true);
    const array = [];
    expect(isObject(array)).toBe(false);
    const nullVar = null;
    expect(isObject(nullVar)).toBe(false);
  });

  test('isArray function', () => {
    const array = [];
    expect(isArray(array)).toBe(true);
    const obj = {};
    expect(isArray(obj)).toBe(false);
    const nullVar = null;
    expect(isArray(nullVar)).toBe(false);
  });

  test('getLocalStorage function', () => {
    const token = 'exemplo de token';
    const user = { nome: 'Nome do user' };

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('subscription', JSON.stringify(subscription));

    expect(getLocalStorage('token')).toEqual(token);
    expect(getLocalStorage('user')).toEqual(user);
    expect(getLocalStorage('subscription')).toEqual(subscription);
    expect(getLocalStorage('nonExistingKey')).toEqual({});
    expect(getLocalStorage('nonExistingKey', '')).toEqual('');
  });

  test('removeAllButLast function', () => {
    const value = '1,000.01';
    const token = '.';

    expect(removeAllButLast(value.replace(/[^\d,.]/g, '').replace(',', '.'), token)).toEqual(
      '1000.01'
    );
    expect(removeAllButLast('1000', '.')).toEqual('1000');
    expect(removeAllButLast('1.000.00', '.')).toEqual('1000.00');
  });

  test('verify regex', () => {
    const url = 'https://www.youtube.com/watch?v=6WUT6MMW048&t=91s&ab_channel=eSolidar';
    const urlError = 'test';

    const ibanNumber = 'PT37003506511652559496484';
    const ibanNumberError = '00350651165255949648455555';

    expect(isValidRegex(youtubeUrl, url)).toEqual(true);
    expect(isValidRegex(youtubeUrl, urlError)).toEqual(false);

    expect(isValidRegex(iban, ibanNumber)).toEqual(true);
    expect(isValidRegex(iban, ibanNumberError)).toEqual(false);
  });

  test('convert to utc winter timezone', () => {
    advanceTo(new Date(2021, 0, 1, 17, 0, 0));
    expect(convertToUtc('2021-01-07 00:00:00', 'Europe/Lisbon')).toEqual('2021-01-07 00:00:00');
    expect(convertToUtc('2021-01-07 00:00:00', 'America/Sao_Paulo')).toEqual('2021-01-07 03:00:00');
  });

  test('convert to utc summer timezone', () => {
    advanceTo(new Date(2021, 7, 1, 1, 0, 0));
    expect(convertToUtc('2021-08-07 00:00:00', 'Europe/Lisbon')).toEqual('2021-08-06 23:00:00');
    expect(convertToUtc('2021-08-07 00:00:00', 'America/Sao_Paulo')).toEqual('2021-08-07 03:00:00');
  });

  test('test firstElemOf should return first array elem', () => {
    expect(firstElemOf([0, 1, 2, 3, 4, 5, 6, 7])).toEqual(0);
    expect(firstElemOf(['a', 'b', 'c'])).toEqual('a');
    expect(firstElemOf([])).toEqual(undefined);
    expect(firstElemOf({})).toEqual(undefined);
    expect(firstElemOf('abcd')).toEqual('a');
  });

  test('test lastElemOf should return last array elem', () => {
    expect(lastElemOf([0, 1, 2, 3, 4, 5, 6, 7])).toEqual(7);
    expect(lastElemOf(['a', 'b', 'c'])).toEqual('c');
    expect(lastElemOf([])).toEqual(undefined);
    expect(lastElemOf({})).toEqual(undefined);
    expect(lastElemOf('abcd')).toEqual('d');
  });

  test('test clone should return elem', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7];
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    const string = 'string text';
    const nullVar = null;

    expect(clone(array)).toEqual(array);
    expect(clone(obj)).toEqual(obj);
    expect(clone(string)).toEqual(string);
    expect(clone(nullVar)).toEqual(nullVar);
  });

  test('test sortBy', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7];
    const arrayObj = [
      { a: 3, b: 2 },
      { a: 1, b: 3 },
      { a: 2, b: 1 },
    ];

    expect(sortBy(array)).toEqual(array);
    expect(sortBy(arrayObj, 'a')).toEqual([
      { a: 1, b: 3 },
      { a: 2, b: 1 },
      { a: 3, b: 2 },
    ]);
    expect(sortBy(arrayObj, 'b')).toEqual([
      { a: 2, b: 1 },
      { a: 3, b: 2 },
      { a: 1, b: 3 },
    ]);
  });

  test('test hasThisFeature', () => {
    localStorage.setItem('subscription', JSON.stringify(subscription));

    expect(hasThisFeature('feed')).toBe(true);
    expect(hasThisFeature('no-feature')).toBe(false);
  });
});
