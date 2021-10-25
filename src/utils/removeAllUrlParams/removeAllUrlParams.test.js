import '@testing-library/jest-dom';
import removeAllUrlParams from '.';

test('should return url without params', () => {
  const url = 'https//esolidar.com/teste?page=1';
  const expectedUrl = 'https//esolidar.com/teste';
  expect(removeAllUrlParams(url)).toBe(expectedUrl);
});
