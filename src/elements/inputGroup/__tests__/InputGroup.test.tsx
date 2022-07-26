import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Disabled as DisabledStory,
  Error as ErrorStory,
  Prepend as PrependStory,
  Append as AppendStory,
} from '../InputGroup.stories';

const Default = composeStory(DefaultStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const Error = composeStory(ErrorStory, Meta);
const Prepend = composeStory(PrependStory, Meta);
const Append = composeStory(AppendStory, Meta);

it('renders InputGroup Default', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('inputGroup')).toBeInTheDocument();
  expect(getByClass('inputGroup__prepend')).toBeInTheDocument();
  expect(getByClass('form-control')).toBeInTheDocument();
  expect(getByClass('inputGroup__append')).toBeInTheDocument();
});

it('renders InputGroup Disabled', () => {
  const { getByClass } = render(<Disabled />);

  expect(getByClass('inputGroup disabled')).toBeInTheDocument();
  expect(getByClass('inputGroup__prepend')).toBeInTheDocument();
  expect(getByClass('form-control')).toBeInTheDocument();
  expect(getByClass('inputGroup__append')).toBeInTheDocument();
});

it('renders InputGroup Error', () => {
  const { getByClass } = render(<Error />);

  expect(getByClass('inputGroup has-error')).toBeInTheDocument();
  expect(getByClass('inputGroup__prepend')).toBeInTheDocument();
  expect(getByClass('form-control')).toBeInTheDocument();
  expect(getByClass('inputGroup__append')).toBeInTheDocument();
});

it('renders InputGroup Prepend', () => {
  const { getByClass, queryByClass } = render(<Prepend />);

  expect(getByClass('inputGroup')).toBeInTheDocument();
  expect(getByClass('inputGroup__prepend')).toBeInTheDocument();
  expect(getByClass('form-control borderRadiusRight')).toBeInTheDocument();
  expect(queryByClass('inputGroup__append')).not.toBeInTheDocument();
});

it('renders InputGroup Append', () => {
  const { getByClass, queryByClass } = render(<Append />);

  expect(getByClass('inputGroup')).toBeInTheDocument();
  expect(queryByClass('inputGroup__prepend')).not.toBeInTheDocument();
  expect(getByClass('form-control borderRadiusLeft')).toBeInTheDocument();
  expect(getByClass('inputGroup__append')).toBeInTheDocument();
});
