import '@testing-library/jest-dom';
import clone from '.';

test('test clone should return elem', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  const string = 'string text';
  const nullVar = null;

  expect(clone(array)).toEqual(array);
  expect(clone(obj)).toEqual(obj);
  expect(clone(string)).toEqual(string);
  expect(clone(nullVar)).toEqual(nullVar);
});
