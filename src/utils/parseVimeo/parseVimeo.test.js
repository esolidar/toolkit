import '@testing-library/jest-dom';
import parseVimeo from '.';

test('test parseVimeo', () => {
  expect(parseVimeo('http://vimeo.com/86164897')).toEqual('86164897');
  expect(parseVimeo('https://esolidar.com/86164897')).toEqual(null);
});
