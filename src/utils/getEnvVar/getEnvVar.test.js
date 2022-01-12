import '@testing-library/jest-dom';
import getEnvVar from '.';

test('test getEnvVar', () => {
  expect(getEnvVar('PUBLIC_CDN_UPLOADS_URL')).toEqual('https://cdn.testesolidar.com');
});
