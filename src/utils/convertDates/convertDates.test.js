import '@testing-library/jest-dom';

import timezoneMock from 'timezone-mock';
import {
  convertToUtcFromLocalTimezone,
  convertToUtcFromCustomTimezone,
  convertFromUtcToLocalTimezone,
  convertFromUtcToCustomTimezone,
} from '.';

const mockDateInTimezone = (date, timezone) => {
  timezoneMock.register(timezone);
  return new Date(date);
};

const moment = require('moment-timezone');

jest.doMock('moment', () => {
  moment.tz.setDefault('Europe/Lisbon');
  return moment;
});

test('convertToUtcFromLocalTimezone function winter time', () => {
  expect(convertToUtcFromLocalTimezone('2022-01-14 00:00:00')).toEqual(
    new Date('2022-01-14 00:00:00')
  );

  expect(convertToUtcFromLocalTimezone('2022-01-14 00:00:00', 'YYYY-MM-DD HH:mm:ss')).toEqual(
    '2022-01-14 00:00:00'
  );

  expect(convertToUtcFromLocalTimezone('2022-01-14 00:00:00', 'LLL')).toEqual(
    'January 14, 2022 12:00 AM'
  );
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

test('convertToUtcFromCustomTimezone function summer time', () => {
  // Timezone Lisbon
  expect(convertToUtcFromCustomTimezone('2022-05-14 00:00:00', 'Europe/Lisbon')).toEqual(
    new Date('2022-05-13T23:00:00.000Z')
  );
  // Timezone Madrid
  expect(convertToUtcFromCustomTimezone('2022-05-14 00:00:00', 'Europe/Madrid')).toEqual(
    new Date('2022-05-13T22:00:00.000Z')
  );
  // Timezone Sao_Paulo
  expect(
    convertToUtcFromCustomTimezone(
      '2022-05-14 00:00:00',
      'America/Sao_Paulo',
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-05-14 03:00:00');
});

test('convertToUtcFromCustomTimezone function winter time', () => {
  // Timezone Lisbon
  expect(convertToUtcFromCustomTimezone('2022-01-14 00:00:00', 'Europe/Lisbon')).toEqual(
    new Date('2022-01-14 00:00:00')
  );
  // Timezone Madrid
  expect(convertToUtcFromCustomTimezone('2022-01-14 00:00:00', 'Europe/Madrid')).toEqual(
    new Date('2022-01-13 23:00:00')
  );
  // Timezone Sao_Paulo
  expect(
    convertToUtcFromCustomTimezone(
      '2022-01-14 00:00:00',
      'America/Sao_Paulo',
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-01-14 03:00:00');
});

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

test('convertFromUtcToCustomTimezone function winter time', () => {
  expect(
    convertFromUtcToCustomTimezone(
      mockDateInTimezone('2022-01-14 00:00:00', 'Europe/London'),
      'Europe/Lisbon',
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-01-14 00:00:00');

  expect(
    convertFromUtcToCustomTimezone('2022-01-14 00:00:00', 'Europe/Madrid', 'YYYY-MM-DD HH:mm:ss')
  ).toEqual('2022-01-14 01:00:00');

  expect(
    convertFromUtcToCustomTimezone(
      '2022-01-14 00:00:00',
      'America/Sao_Paulo',
      'YYYY-MM-DD HH:mm:ss'
    )
  ).toEqual('2022-01-13 21:00:00');
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
    convertFromUtcToCustomTimezone('2022-06-14 00:00:00', 'Europe/Lisbon', 'YYYY-MM-DD HH:mm:ss')
  ).toEqual('2022-06-14 01:00:00');

  expect(
    convertFromUtcToCustomTimezone('2022-06-14 00:00:00', 'Europe/Madrid', 'YYYY-MM-DD HH:mm:ss')
  ).toEqual('2022-06-14 02:00:00');
});
