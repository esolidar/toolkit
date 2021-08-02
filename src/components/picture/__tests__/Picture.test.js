import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Meta, { Default } from '../Picture.stories';

const DefaultTemplate = composeStory(Default, Meta);

it('Without Pagination', () => {
  render(<DefaultTemplate />);

  const picture = screen.queryByTestId('picture');
  expect(picture).toBeInTheDocument();
});
