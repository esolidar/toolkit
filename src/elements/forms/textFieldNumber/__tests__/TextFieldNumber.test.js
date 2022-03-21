import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../TextFieldNumber.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders TextFieldNumberForm with error', () => {
  const { queryByClass, getByClass } = render(<Default />);

  expect(queryByClass(/ textfield-number/)).toBeInTheDocument();
  expect(getByClass('form-control')).toBeInTheDocument();

  fireEvent.change(getByClass('form-control'), { target: { value: '23' } });
  expect(getByClass('form-control').value).toBe('23');
});
