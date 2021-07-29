import React from 'react';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Meta, { Default as DefaultStory } from '../ShareNetwork.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders ShareNetwork default', () => {
  const { getByLabelText } = render(<Default />);

  expect(getByLabelText('facebook')).toBeTruthy();
  expect(getByLabelText('twitter')).toBeTruthy();
  expect(getByLabelText('whatsapp')).toBeTruthy();
  expect(getByLabelText('share-link')).toBeTruthy();
});
