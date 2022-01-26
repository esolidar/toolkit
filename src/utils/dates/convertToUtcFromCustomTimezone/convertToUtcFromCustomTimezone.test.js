import '@testing-library/jest-dom';
import convertToUtcFromCustomTimezone from './convertToUtcFromCustomTimezone';

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
