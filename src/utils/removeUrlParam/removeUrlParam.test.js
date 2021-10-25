import '@testing-library/jest-dom';
import removeUrlParam from '.';
import addUrlParam from '../addUrlParam';

test('call removeUrlParam to remove url parameter', () => {
  addUrlParam('page', '2');
  addUrlParam('id', '1');
  removeUrlParam('page');
  expect(global.window.location.search).toEqual('?id=1');
});
