import '@testing-library/jest-dom';
import convertUtcToTimezone from '.';

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
