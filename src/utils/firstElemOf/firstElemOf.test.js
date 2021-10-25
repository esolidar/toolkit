import '@testing-library/jest-dom';
import firstElemOf from '.';

test('test firstElemOf should return first array elem', () => {
  expect(firstElemOf([0, 1, 2, 3, 4, 5, 6, 7])).toEqual(0);
  expect(firstElemOf(['a', 'b', 'c'])).toEqual('a');
  expect(firstElemOf([])).toEqual(undefined);
  expect(firstElemOf({})).toEqual(undefined);
  expect(firstElemOf('abcd')).toEqual('a');
});
