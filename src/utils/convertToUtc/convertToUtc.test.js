import '@testing-library/jest-dom';
import { advanceTo } from 'jest-date-mock';
import convertToUtc from '.';

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
