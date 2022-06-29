import '@testing-library/jest-dom';
import validateImageSrc from '.';

test('test validateImageSrc', () => {
  expect(validateImageSrc('requests/43dffe5e-1b23-4217-9e58-5c187fa129b7.jpg')).toEqual(
    'https://image.testesolidar.com/requests/43dffe5e-1b23-4217-9e58-5c187fa129b7.jpg'
  );

  expect(
    validateImageSrc('requests/43dffe5e-1b23-4217-9e58-5c187fa129b7.jpg', 'CDN_UPLOADS_URL')
  ).toEqual('https://cdn.testesolidar.com/requests/43dffe5e-1b23-4217-9e58-5c187fa129b7.jpg');

  expect(validateImageSrc('https://picsum.photos/id/1018/1000/600/')).toEqual(
    'https://picsum.photos/id/1018/1000/600/'
  );
});
