import '@testing-library/jest-dom';
import parseYouTube from '.';

test('test parseYouTube', () => {
  expect(parseYouTube('https://youtu.be/8Xi8hUzsWFU')).toEqual('8Xi8hUzsWFU');
  expect(parseYouTube('https://www.youtube.com/watch?v=8Xi8hUzsWFU')).toEqual('8Xi8hUzsWFU');
  expect(parseYouTube('https://www.youtube.com/embed/8Xi8hUzsWFU')).toEqual('8Xi8hUzsWFU');
  expect(parseYouTube('https://www.esolidar.com/8Xi8hUzsWFU')).toEqual(null);
});
