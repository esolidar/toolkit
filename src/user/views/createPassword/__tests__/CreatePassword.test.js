import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, {
  SetPassword as SetPasswordStory,
  RecoverPassword as RecoverPasswordStory,
} from '../CreatePassword.stories';

const SetPassword = composeStory(SetPasswordStory, Meta);
const RecoverPassword = composeStory(RecoverPasswordStory, Meta);

it('renders Title default component', () => {
  const { getByText, getByClass } = render(<SetPassword />);

  expect(getByText('Create your password')).toBeTruthy();
  expect(getByText('Create a password for your Esolidar account')).toBeTruthy();
  expect(getByText('New password')).toBeTruthy();
  expect(getByText('Confirm new password')).toBeTruthy();
  expect(getByText('Save')).toBeTruthy();
  expect(getByClass('create-password')).toBeTruthy();
});

it('renders Title default component', () => {
  const { getByText, getByClass } = render(<RecoverPassword />);

  expect(getByText('Create new password')).toBeTruthy();
  expect(
    getByText(
      'Please use a different password than your previous one. This helps to keep your account more secure.'
    )
  ).toBeTruthy();
  expect(getByText('New password')).toBeTruthy();
  expect(getByText('Confirm new password')).toBeTruthy();
  expect(getByText('Update password')).toBeTruthy();
  expect(getByClass('create-password')).toBeTruthy();
});
