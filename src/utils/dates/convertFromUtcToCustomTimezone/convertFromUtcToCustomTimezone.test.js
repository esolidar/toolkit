import '@testing-library/jest-dom';

import timezoneMock from 'timezone-mock';
import convertFromUtcToCustomTimezone from './convertFromUtcToCustomTimezone';

const mockDateInTimezone = (date, timezone) => {
  timezoneMock.register(timezone);
  return new Date(date);
};

test('convertFromUtcToCustomTimezone function winter time', () => {
  expect(
    convertFromUtcToCustomTimezone(
      mockDateInTimezone('2022-01-14 00:00:00', 'Europe/London'),
      'Europe/Lisbon',
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-01-14 00:00:00');

  expect(
    convertFromUtcToCustomTimezone('2022-01-14 00:00:00', 'Europe/Madrid', 'YYYY/MM/DD HH:mm:ss')
  ).toEqual('2022/01/14 01:00:00');

  expect(
    convertFromUtcToCustomTimezone(
      '2022-01-14 00:00:00',
      'America/Sao_Paulo',
      'YYYY/MM/DD HH:mm:ss'
    )
  ).toEqual('2022/01/13 21:00:00');
});

test('convertFromUtcToCustomTimezone function summer time', () => {
  expect(
    convertFromUtcToCustomTimezone(
      mockDateInTimezone('2022-05-14 00:00:00', 'Europe/London'),
      'America/Sao_Paulo',
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-05-13 20:00:00');

  expect(
    convertFromUtcToCustomTimezone('2022-06-14 00:00:00', 'Europe/Lisbon', 'YYYY/MM/DD HH:mm:ss')
  ).toEqual('2022/06/14 01:00:00');

  expect(
    convertFromUtcToCustomTimezone('2022-06-14 00:00:00', 'Europe/Madrid', 'YYYY/MM/DD HH:mm:ss')
  ).toEqual('2022/06/14 02:00:00');
});
