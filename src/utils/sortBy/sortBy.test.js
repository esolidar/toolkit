import '@testing-library/jest-dom';
import sortBy from '.';

test('test sortBy', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  const arrayObj = [
    { a: 3, b: 2 },
    { a: 1, b: 3 },
    { a: 2, b: 1 },
  ];

  expect(sortBy(array)).toEqual(array);
  expect(sortBy(arrayObj, 'a')).toEqual([
    { a: 1, b: 3 },
    { a: 2, b: 1 },
    { a: 3, b: 2 },
  ]);
  expect(sortBy(arrayObj, 'b')).toEqual([
    { a: 2, b: 1 },
    { a: 3, b: 2 },
    { a: 1, b: 3 },
  ]);
});
