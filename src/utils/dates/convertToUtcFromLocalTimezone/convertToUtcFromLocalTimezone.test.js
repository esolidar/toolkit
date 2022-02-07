import '@testing-library/jest-dom';

import timezoneMock from 'timezone-mock';
import convertToUtcFromLocalTimezone from './convertToUtcFromLocalTimezone';

const mockDateInTimezone = (date, timezone) => {
  timezoneMock.register(timezone);
  return new Date(date);
};

test('convertToUtcFromLocalTimezone function winter time', () => {
  expect(convertToUtcFromLocalTimezone('2022-01-14 00:00:00')).toEqual(
    new Date('2022-01-14 00:00:00')
  );

  expect(
    convertToUtcFromLocalTimezone(
      mockDateInTimezone('2022-01-14 00:00:00', 'Europe/London'),
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-01-14 00:00:00');

  expect(
    convertToUtcFromLocalTimezone(mockDateInTimezone('2022-01-14 00:00:00', 'Europe/London'), 'LLL')
  ).toEqual('January 14, 2022 12:00 AM');
});

test('convertToUtcFromLocalTimezone function summer time', () => {
  expect(
    convertToUtcFromLocalTimezone(
      mockDateInTimezone('2022-05-14 00:00:00', 'Europe/London'),
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-05-13 23:00:00');

  expect(
    convertToUtcFromLocalTimezone(mockDateInTimezone('2022-05-14 00:00:00', 'Europe/London'))
  ).toEqual(new Date('2022-05-13T23:00:00.000Z'));
});
