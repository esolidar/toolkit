import '@testing-library/jest-dom';
import formatDate from '.';

const date = '2003-02-04 15:33:19';

test('formatDate with default params', () => {
  expect(formatDate(date, 'en')).toEqual('2003-02-04');
  expect(formatDate(date, 'pt')).toEqual('04/02/2003');
});

test('formatDate with size 2', () => {
  expect(formatDate(date, 'en', { size: 2 })).toEqual('Feb 4, 2003');
  expect(formatDate(date, 'pt', { size: 2 })).toEqual('fev 4, 2003');
});

test('formatDate with size 3', () => {
  expect(formatDate(date, 'en', { size: 3 })).toEqual('4th February 2003');
  expect(formatDate(date, 'pt', { size: 3 })).toEqual('4 fevereiro 2003');
});

test('formatDate with show hours', () => {
  expect(formatDate(date, 'en', { showHours: true })).toEqual('2003-02-04, 3:33 PM');
  expect(formatDate(date, 'pt', { showHours: true })).toEqual('04/02/2003, 15:33');
});
