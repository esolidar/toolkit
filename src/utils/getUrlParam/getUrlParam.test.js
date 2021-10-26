import '@testing-library/jest-dom';
import getUrlParam from '.';
import addUrlParam from '../addUrlParam';

test('should return addUrlParam', () => {
  addUrlParam('page', '2');
  expect(getUrlParam('page')).toEqual('2');
});
