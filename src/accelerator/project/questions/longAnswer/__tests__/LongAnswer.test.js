import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../LongAnswer.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders LongAnswer component', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText(/Vestibulum efficitur risus vitae eros ultrices lobortis./)).toBeInTheDocument();
  expect(
    getByText(
      /In in tempor velit. Morbi consectetur, ex sit amet aliquam sollicitudin, orci neque sodales lorem, sed scelerisque nulla ante vel justo./
    )
  ).toBeInTheDocument();
  expect(getByClass('text-area-field form-group')).toBeTruthy();
});
