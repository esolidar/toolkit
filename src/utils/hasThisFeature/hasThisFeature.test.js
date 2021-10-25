import '@testing-library/jest-dom';
import hasThisFeature from '.';
import subscription from '../../../__mocks__/subscription';

test('test hasThisFeature', () => {
  localStorage.setItem('subscription', JSON.stringify(subscription));

  expect(hasThisFeature('feed')).toBe(true);
  expect(hasThisFeature('no-feature')).toBe(false);
});
