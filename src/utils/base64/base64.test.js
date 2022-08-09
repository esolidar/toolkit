import '@testing-library/jest-dom';
import { encodeBase64, decodeBase64 } from '.';

const string = 'Hello world!!!';
const stringBase64 = 'IkhlbGxvIHdvcmxkISEhIg==';

const object = {
  name: 'Joel Calheiros',
  email: 'joel@esolidar.com',
};
const objectBase64 = 'eyJuYW1lIjoiSm9lbCBDYWxoZWlyb3MiLCJlbWFpbCI6ImpvZWxAZXNvbGlkYXIuY29tIn0=';

test('call encode base64', () => {
  expect(encodeBase64(string)).toEqual(stringBase64);
  expect(encodeBase64(object)).toEqual(objectBase64);
});

test('call decode base64', () => {
  expect(decodeBase64(stringBase64)).toEqual(string);
  expect(decodeBase64(objectBase64)).toEqual(object);
});
