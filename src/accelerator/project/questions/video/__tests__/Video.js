import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Video.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Video component', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText('Video')).toBeInTheDocument();
  expect(
    getByText(/An image is worth a thousand words, but we believe a video is worth a billion!/)
  ).toBeInTheDocument();
  expect(
    getByText(
      /This is optional, but having a video will help you promote and condense your concept to be easily digested by reviewers and viewers./
    )
  ).toBeInTheDocument();
  expect(getByText(/Enter the link for a Youtube or Vimeo video/)).toBeInTheDocument();
  expect(getByClass('form-group')).toBeTruthy();
  expect(getByClass('esolidar-preview__video')).toBeTruthy();
});
