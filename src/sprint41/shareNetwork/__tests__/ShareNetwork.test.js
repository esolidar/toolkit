import React from 'react';
import { render } from '../../../../__customQueries__/test-utils';
import ShareNetwork from '../index';

it('renders ShareNetwork default', () => {
  const { queryByArialLabel } = render(<ShareNetwork />);

  expect(queryByArialLabel('facebook')).toBeTruthy();
  expect(queryByArialLabel('twitter')).toBeTruthy();
  expect(queryByArialLabel('whatsapp')).toBeTruthy();
  expect(queryByArialLabel('share-link')).toBeTruthy();
});
