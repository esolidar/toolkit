import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Toggle.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Toggle with default props', () => {
  const { getByClass, queryByClass } = render(<Default />);
  expect(getByClass('toggle')).toBeInTheDocument();
  expect(queryByClass(/react-toggle checked/)).not.toBeInTheDocument();

  fireEvent.click(getByClass('react-toggle-screenreader-only'));
  expect(queryByClass(/ react-toggle--checked/)).toBeInTheDocument();
});
