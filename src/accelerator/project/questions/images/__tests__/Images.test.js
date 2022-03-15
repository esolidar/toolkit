import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Images.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Success default component open', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('active-page')).toBeTruthy();
  expect(
    getByText(
      /We recommend at least 3 or more images to help promote and communicate your project's value./
    )
  ).toBeInTheDocument();
  expect(
    getByText(
      /Your cover image should help you grab your viewers' attention, portraying a loyal representation of your idea./
    )
  ).toBeInTheDocument();
  expect(
    getByText(/Select at least one image with at least 123 by 123px smaller than 5 Mb/)
  ).toBeInTheDocument();
});
