import '@testing-library/jest-dom';
import isEmpty from '.';

test('return object empty true or false', () => {
  const objectEmpty = {};
  const objectNotEmpty = { id: 1, name: 'name' };
  const arrayEmpty = [];
  const arrayNotEmpty = [1, 2];
  expect(isEmpty(objectEmpty)).toBe(true);
  expect(isEmpty(objectNotEmpty)).toBe(false);
  expect(isEmpty(arrayEmpty)).toBe(true);
  expect(isEmpty(arrayNotEmpty)).toBe(false);
  expect(isEmpty('asdasd')).toBe(false);
  expect(isEmpty('')).toBe(true);
});
