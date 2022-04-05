import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, {
  SetPassword as SetPasswordStory,
  RecoverPassword as RecoverPasswordStory,
  SetPassword404 as SetPassword404Story,
} from '../CreatePassword.stories';

const SetPassword = composeStory(SetPasswordStory, Meta);
const RecoverPassword = composeStory(RecoverPasswordStory, Meta);
const SetPassword404 = composeStory(SetPassword404Story, Meta);

it('renders setPassword default component', () => {
  const { getByText, getByClass } = render(<SetPassword />);

  expect(getByText('Create your password')).toBeTruthy();
  expect(getByText('Create a password for your Esolidar account')).toBeTruthy();
  expect(getByText('New password')).toBeTruthy();
  expect(getByText('Confirm new password')).toBeTruthy();
  expect(getByText('Save')).toBeTruthy();
  expect(getByClass('create-password')).toBeTruthy();
});

it('renders recoverPassword default component', () => {
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

it('renders setPassword default component with 404 api', () => {
  const { getByText, getByClass } = render(<SetPassword404 />);

  expect(getByText('Create your password')).toBeTruthy();
  expect(getByText('Configuration email expired')).toBeTruthy();
  expect(getByText('Please resend the email.')).toBeTruthy();
  expect(getByText('Configuration email expired')).toBeTruthy();
  expect(
    getByClass('btn-esolidar btn-link btn-md client__primary--color client__primary--color-hover')
  ).toHaveAttribute('href', '/auth/configure-password');
});
