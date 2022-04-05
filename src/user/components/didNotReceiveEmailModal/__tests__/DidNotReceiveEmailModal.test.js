import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../DidNotReceiveEmailModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders DidNotReceiveEmailModal default component', () => {
  const { getByText, getByClass } = render(<Default />);

  expect(getByText('Did not receive the email?')).toBeTruthy();
  expect(
    getByText('Wait a little bit - the email takes some time to get there, so be patient 😉')
  ).toBeTruthy();
  expect(getByClass('didNotReceiveEmailModal')).toBeTruthy();
  expect(getByClass('didNotReceiveEmailModal__footer')).toBeTruthy();
});
