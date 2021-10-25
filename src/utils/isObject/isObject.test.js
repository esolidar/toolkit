import '@testing-library/jest-dom';
import isObject from '.';

test('isObject function', () => {
  const obj = {};
  expect(isObject(obj)).toBe(true);
  const array = [];
  expect(isObject(array)).toBe(false);
  const nullVar = null;
  expect(isObject(nullVar)).toBe(false);
});
