import '@testing-library/jest-dom';
import addUrlParam from '.';

test('call addUrlParam to add url parameter', () => {
  addUrlParam('page', '2');
  addUrlParam('id', '1');
  expect(global.window.location.search).toEqual('?page=2&id=1');
});
