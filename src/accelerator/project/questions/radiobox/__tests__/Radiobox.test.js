import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Radiobox.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Radiobox default', () => {
  const { getByClass, getByText, getAllByClass } = render(<Default />);

  expect(getByClass('page-content-checkbox')).toBeTruthy();
  expect(getByText('In in tempor velit. Morbi consectetur')).toBeInTheDocument();
  expect(getAllByClass('form-group')).toHaveLength(3);
});
