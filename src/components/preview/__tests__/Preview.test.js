import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Placeholder } from '../Preview.stories';

const DefaultComponent = composeStory(DefaultStory, Meta);
const PlaceholderComponent = composeStory(Placeholder, Meta);

it('renders Preview', () => {
  const { getByClass } = render(<DefaultComponent />);

  expect(getByClass('esolidar-preview')).toBeTruthy();
});

it('renders Preview', () => {
  const { getByClass } = render(<PlaceholderComponent />);

  expect(getByClass(/esolidar-preview__no-image/)).toBeTruthy();
});
