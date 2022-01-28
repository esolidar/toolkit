import '@testing-library/jest-dom';
import isDefined from '.';

test('test getFNSDateLocale', () => {
  expect(isDefined(null)).toEqual(false);
  expect(isDefined(undefined)).toEqual(false);
  expect(isDefined('test')).toEqual(true);
});
