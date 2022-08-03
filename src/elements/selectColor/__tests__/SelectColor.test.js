import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithLabel as WithLabelStory,
  Disabled as DisabledStory,
  Error as ErrorStory,
} from '../SelectColor.stories';

const Default = composeStory(DefaultStory, Meta);
const WithLabel = composeStory(WithLabelStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const Error = composeStory(ErrorStory, Meta);

it('renders SelectColor Default', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass('size-lg form-group selectColor')).toBeInTheDocument();
  expect(getByClass('form-group selectColor__input')).toBeInTheDocument();
  expect(getByClass('icon left')).toBeInTheDocument();
  expect(getByClass('previewColor')).toBeInTheDocument();
  expect(getByTestId('input-right-icon')).toBeInTheDocument();
});

it('renders SelectColor WithLabel', () => {
  const { getByClass } = render(<WithLabel />);

  expect(getByClass('control-label')).toBeInTheDocument();
  expect(getByClass('label-optional')).toBeInTheDocument();
  expect(getByClass('help size-lg')).toBeInTheDocument();
});

it('renders SelectColor Disabled', () => {
  const { getByClass, getByTestId } = render(<Disabled />);

  expect(getByClass('size-lg form-group selectColor')).toBeInTheDocument();
  expect(getByClass('form-group selectColor__input')).toBeInTheDocument();
  expect(getByTestId('input-disabled')).toHaveAttribute('disabled');
});

it('renders SelectColor Error', () => {
  const { getByClass } = render(<Error />);

  expect(getByClass('size-lg form-group selectColor error')).toBeInTheDocument();
  expect(getByClass(/ has-error /)).toBeInTheDocument();
  expect(getByClass('help-block')).toBeInTheDocument();
});

it('renders SelectColor click to open react-color', async () => {
  const { getByClass, getByTestId } = render(<Default />);

  const element = getByTestId('input-disabled');
  fireEvent.click(element);
  await waitFor(() => {
    expect(getByClass('twitter-picker')).toBeInTheDocument();
  });
});
