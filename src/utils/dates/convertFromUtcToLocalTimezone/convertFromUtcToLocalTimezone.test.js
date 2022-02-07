import '@testing-library/jest-dom';

import timezoneMock from 'timezone-mock';
import convertFromUtcToLocalTimezone from './convertFromUtcToLocalTimezone';

const mockDateInTimezone = (date, timezone) => {
  timezoneMock.register(timezone);
  return new Date(date);
};

test('convertFromUtcToLocalTimezone function winter time', () => {
  expect(convertFromUtcToLocalTimezone('2022-01-14 00:00:00')).toEqual(
    new Date('2022-01-14T00:00:00.000Z')
  );
});

test('convertFromUtcToLocalTimezone function summer time', () => {
  expect(
    convertFromUtcToLocalTimezone(
      mockDateInTimezone('2022-05-14 00:00:00', 'Europe/London'),
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-05-14 00:00:00');
});
