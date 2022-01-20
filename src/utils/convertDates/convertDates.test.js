import '@testing-library/jest-dom';
import { convertTimezoneToUtc, convertUtcToTimezone } from '.';

test('convertToTimezone function', () => {
  expect(convertUtcToTimezone('2022-01-14 00:00:00', 'Europe/Lisbon')).toEqual(
    new Date('2022-01-14 00:00:00')
  );
  expect(convertUtcToTimezone('2022-08-14 00:00:00', 'Europe/Lisbon')).toEqual(
    new Date('2022-08-14 01:00:00')
  );

  expect(convertUtcToTimezone('2022-01-14T00:00:00.000Z', 'America/Sao_Paulo')).toEqual(
    new Date('2022-01-13 21:00:00')
  );

  expect(convertUtcToTimezone('2022-01-14 00:00:00', 'Asia/Colombo')).toEqual(
    new Date('2022-01-14 05:30:00')
  );
});

test('convertToUtc function', () => {
  expect(convertTimezoneToUtc('2022-01-14 00:00:00', 'Europe/Lisbon')).toEqual(
    new Date('2022-01-14 00:00:00')
  );

  expect(convertTimezoneToUtc('2022-08-14 00:00:00', 'Europe/Lisbon')).toEqual(
    new Date('2022-08-13 23:00:00')
  );

  expect(convertTimezoneToUtc('2022-01-14 00:00:00', 'America/Sao_Paulo')).toEqual(
    new Date('2022-01-14 03:00:00')
  );

  expect(convertTimezoneToUtc('2022-01-14 00:00:00', 'Asia/Colombo')).toEqual(
    new Date('2022-01-13 18:30:00')
  );
});
