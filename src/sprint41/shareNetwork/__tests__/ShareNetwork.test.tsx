import React from 'react';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../ShareNetwork.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders ShareNetwork default', () => {
  const { getByLabelText, getAllByClass } = render(<Default />);

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(getByLabelText('share-link')).toBeTruthy();
  expect(getAllByClass(/share-icon/)).toHaveLength(4);
});
