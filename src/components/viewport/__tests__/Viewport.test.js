import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Viewport.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Viewport default component', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass(/esolidar-viewport/)).toBeTruthy();
});
