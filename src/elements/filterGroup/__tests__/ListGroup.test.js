import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default, WithCounter } from '../FilterGroup.stories';

const DefaultComponent = composeStory(Default, Meta);
const WithCounterComponent = composeStory(WithCounter, Meta);

it('renders FilterGroup default component', () => {
  const { getByClass, getAllByClass } = render(<DefaultComponent />);

  expect(getByClass('filter-group')).toBeTruthy();
  expect(getAllByClass('filter-group-btn-label')).toHaveLength(4);
});

it('renders FilterGroup with counter', () => {
  const { getByClass, getAllByClass } = render(<WithCounterComponent />);

  expect(getByClass('filter-group')).toBeTruthy();
  expect(getAllByClass(/counter/)).toHaveLength(3);
});
