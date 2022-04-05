import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Success.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Success default component open', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('wizard-success')).toBeTruthy();
  expect(getByText('You successfully published your project!')).toBeInTheDocument();
  expect(getByText(/Ready Joel F.?/)).toBeInTheDocument();
  expect(getByText(/Your journey is about to start!/)).toBeInTheDocument();
  expect(getByText(/Your project is now pending approval by Company Demo./)).toBeInTheDocument();
});
