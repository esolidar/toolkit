import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../InputTags.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders inputTags with default props', async () => {
  const { getByClass, getAllByClass } = render(<Default />);

  expect(getByClass('inputTags')).toBeInTheDocument();
  expect(getAllByClass('tag-component__item')).toHaveLength(2);
  expect(getAllByClass(/icon-component/)).toHaveLength(2);
  expect(getByClass('inputTags__input')).toBeInTheDocument();
});

it('renders inputTags remove tag', async () => {
  const { getAllByClass } = render(<Default />);

  const element = getAllByClass(/icon-component/);
  fireEvent.click(element[1]);
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
