import '@testing-library/jest-dom';
import getLocalStorage from '.';
import subscription from '../../../__mocks__/subscription';

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
