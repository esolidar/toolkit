import '@testing-library/jest-dom';
import lastElemOf from '.';

test('test lastElemOf should return last array elem', () => {
  expect(lastElemOf([0, 1, 2, 3, 4, 5, 6, 7])).toEqual(7);
  expect(lastElemOf(['a', 'b', 'c'])).toEqual('c');
  expect(lastElemOf([])).toEqual(undefined);
  expect(lastElemOf({})).toEqual(undefined);
  expect(lastElemOf('abcd')).toEqual('d');
});
