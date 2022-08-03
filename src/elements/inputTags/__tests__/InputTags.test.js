import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Disabled as DisabledStory,
  HelperText as HelperTextStory,
  WithLabel as WithLabelStory,
} from '../InputTags.stories';

const Default = composeStory(DefaultStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const HelperText = composeStory(HelperTextStory, Meta);
const WithLabel = composeStory(WithLabelStory, Meta);

it('renders inputTags default', () => {
  const { getByClass, getAllByClass } = render(<Default />);

  expect(getByClass('inputTags')).toBeInTheDocument();
  expect(getAllByClass('tag-component__item')).toHaveLength(2);
  expect(getAllByClass(/icon-component/)).toHaveLength(2);
  expect(getByClass('inputTags__input')).toBeInTheDocument();
});

it('renders inputTags click remove tag', async () => {
  const { getAllByClass } = render(<Default />);

  const element = getAllByClass(/icon-component/);
  fireEvent.click(element[0]);
  await waitFor(() => {
    expect(getAllByClass(/icon-component/)).toHaveLength(1);
  });
});

it('renders inputTags add new tag', async () => {
  const { getByClass, getAllByClass } = render(<Default />);

  const input = getByClass('inputTags__input');
  fireEvent.change(input, { target: { value: 'Good' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

  await waitFor(() => {
    expect(getAllByClass(/icon-component/)).toHaveLength(3);
  });
});

it('renders inputTags Disabled', () => {
  const { getByClass, getAllByClass } = render(<Disabled />);

  expect(getByClass('inputTags disabled')).toBeInTheDocument();
  expect(getAllByClass('tag-component__item disabled')).toHaveLength(2);
  expect(getAllByClass(/icon-component/)).toHaveLength(2);
  expect(getByClass('inputTags__input')).toBeInTheDocument();
});

it('renders inputTags HelperText', () => {
  const { getByClass, getAllByClass } = render(<HelperText />);

  expect(getByClass('inputTags')).toBeInTheDocument();
  expect(getAllByClass('tag-component__item')).toHaveLength(2);
  expect(getAllByClass(/icon-component/)).toHaveLength(2);
  expect(getByClass('inputTags__input')).toBeInTheDocument();
  expect(getByClass('inputTags-helper')).toBeInTheDocument();
});

it('renders inputTags WithLabel', () => {
  const { getByClass, getAllByClass } = render(<WithLabel />);

  expect(getByClass('control-label')).toBeInTheDocument();
  expect(getByClass('label-optional')).toBeInTheDocument();
  expect(getByClass('help size-lg')).toBeInTheDocument();
  expect(getByClass('inputTags')).toBeInTheDocument();
  expect(getAllByClass('tag-component__item')).toHaveLength(2);
  expect(getAllByClass(/icon-component/)).toHaveLength(2);
  expect(getByClass('inputTags__input')).toBeInTheDocument();
});
