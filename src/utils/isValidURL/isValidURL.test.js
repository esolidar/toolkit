import isValidURL from '.';

test('should return if url is valid', () => {
  expect(isValidURL('https://www.esolidar.com')).toBe(true);
  expect(isValidURL('esolidar.com')).toBe(true);
  expect(isValidURL('esolidar')).toBe(false);
});
