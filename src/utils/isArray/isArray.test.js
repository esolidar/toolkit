import '@testing-library/jest-dom';
import isArray from '.';

test('isArray function', () => {
  const array = [];
  expect(isArray(array)).toBe(true);
  const obj = {};
  expect(isArray(obj)).toBe(false);
  const nullVar = null;
  expect(isArray(nullVar)).toBe(false);
});
