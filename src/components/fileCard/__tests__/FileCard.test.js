import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Simple as SimpleStory } from '../FileCard.stories';

const Default = composeStory(DefaultStory, Meta);
const Simple = composeStory(SimpleStory, Meta);

it('renders FileCard', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('file-card')).toBeTruthy();
  expect(getByText('File 1')).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
  expect(
    getByText(
      /Donec eleifend erat a nibh faucibus, sit amet tempor tortor pulvinar. Sed vestibulum luctus gravida./
    )
  ).toBeInTheDocument();
  expect(getByText(/Uploaded on 2022-03-16 15:33:19 - 1.44 Mb/)).toBeInTheDocument();
});

it('renders FileCard disable', () => {
  const { getByClass, getByText, queryByText } = render(<Simple />);

  expect(getByClass('file-card disabled')).toBeTruthy();
  expect(getByClass('esolidar-preview__image')).toBeTruthy();
  expect(getByText('File 1')).toBeInTheDocument();
  expect(
    queryByText(
      /Donec eleifend erat a nibh faucibus, sit amet tempor tortor pulvinar. Sed vestibulum luctus gravida./
    )
  ).not.toBeInTheDocument();
  expect(getByText(/Uploaded on 2022-03-16 15:33:19 - 1.44 Mb/)).toBeInTheDocument();
});
