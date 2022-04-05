import '@testing-library/jest-dom';
import resizeArray from '.';

test('test getFNSDateLocale', () => {
  expect(resizeArray([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  expect(resizeArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
});
