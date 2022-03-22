import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Description.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Description component', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText('Description')).toBeInTheDocument();
  expect(getByText(/Welcome aboard Joel F../)).toBeInTheDocument();
  expect(
    getByText(
      /Describe your project idea in a concise and descriptive manner, sharing all the amazing things you want to achieve!/
    )
  ).toBeInTheDocument();
  expect(getByClass('text-area-field form-group')).toBeTruthy();
});
