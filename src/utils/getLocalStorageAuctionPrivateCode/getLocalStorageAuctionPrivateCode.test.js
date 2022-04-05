import '@testing-library/jest-dom';
import getLocalStorageAuctionPrivateCode from '.';

test('getLocalStorageAuctionPrivateCode', () => {
  localStorage.setItem(
    'privateCode',
    JSON.stringify([
      {
        id: 1,
        code: 123456,
      },
    ])
  );

  expect(getLocalStorageAuctionPrivateCode(1)).toEqual(123456);
  expect(getLocalStorageAuctionPrivateCode(2)).toEqual(null);
  localStorage.clear();
  expect(getLocalStorageAuctionPrivateCode(1)).toEqual(null);
});
