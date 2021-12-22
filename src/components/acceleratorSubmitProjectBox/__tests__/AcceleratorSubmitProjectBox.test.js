import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Soon as SoonStory,
  Running as RunningStory,
  Ended as EndedStory,
} from '../AcceleratorSubmitProjectBox.stories';

const Soon = composeStory(SoonStory, Meta);
const Running = composeStory(RunningStory, Meta);
const Ended = composeStory(EndedStory, Meta);

it('renders AcceleratorSubmitProjectBox default component', () => {
  const { getByClass, getByText } = render(<Soon />);

  expect(getByClass('acceleratorSubmitProjectBox__submit')).toBeTruthy();
  expect(getByText("Application period hasn't started yet")).toBeInTheDocument();
  expect(getByText(/We will start accepting applications on the/)).toBeInTheDocument();
});

it('renders AcceleratorSubmitProjectBox default component', () => {
  const { getByClass } = render(<Running />);

  expect(getByClass('acceleratorSubmitProjectBox__submit')).toBeTruthy();
  expect(getByClass('text')).toHaveTextContent('Submit Project');
});

it('renders AcceleratorSubmitProjectBox default component', () => {
  const { getByClass, getByText } = render(<Ended />);

  expect(getByClass('acceleratorSubmitProjectBox__submit')).toBeTruthy();
  expect(getByText('Applications are now closed')).toBeInTheDocument();
  expect(
    getByText(
      'We are no longer accepting applications for our program. Stay tuned for our future programs!'
    )
  ).toBeInTheDocument();
});
