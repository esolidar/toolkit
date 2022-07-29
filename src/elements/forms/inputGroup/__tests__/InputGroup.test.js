import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../InputGroup.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders inputGroup with default props', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('inputGroup')).toBeInTheDocument();
  expect(getByClass('inputGroup__prepend')).toBeInTheDocument();
  expect(getByClass('form-control')).toBeInTheDocument();
  expect(getByClass('inputGroup__append')).toBeInTheDocument();
});
