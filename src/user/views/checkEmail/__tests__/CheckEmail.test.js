import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../CheckEmail.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders CheckEmail default component', () => {
  const { getByText, getByClass } = render(<Default />);

  expect(getByText('Check your mailbox')).toBeTruthy();
  expect(getByText('email@esolidar.com')).toBeTruthy();
  expect(
    getByText('Open the email and follow the instructions to configure your password.')
  ).toBeTruthy();
  expect(getByText('Change the email address')).toBeTruthy();
  expect(getByText('Did not receive the email?')).toBeTruthy();
  expect(getByClass('set-password')).toBeTruthy();
});
