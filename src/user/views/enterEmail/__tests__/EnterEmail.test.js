import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Set as SetStory, Reset as ResetStory } from '../EnterEmail.stories';

const Set = composeStory(SetStory, Meta);
const Reset = composeStory(ResetStory, Meta);

it('renders EnterEmail component with set password copy', () => {
  const { getByText, getByClass } = render(<Set />);

  expect(getByClass('set-password')).toBeInTheDocument();
  expect(getByClass('set-password__title')).toBeInTheDocument();
  expect(getByText('Configure password')).toBeInTheDocument();

  expect(getByText("Don't worry, we got you!")).toBeInTheDocument();
  expect(
    getByText(
      "Enter the email address you used when registering with your Facebook account, and we'll send instructions to configure your password."
    )
  ).toBeInTheDocument();

  expect(getByClass(/set-password__form--email-input/)).toBeInTheDocument();
  expect(getByText('Email')).toBeInTheDocument();

  expect(getByClass(/btn-esolidar/)).toBeInTheDocument();
  expect(getByClass('help')).toBeInTheDocument();
  expect(getByText('Send instructions')).toBeInTheDocument();
});

it('renders EnterEmail component with reset password copy', () => {
  const { getByText, getByClass } = render(<Reset />);

  expect(getByClass('set-password')).toBeInTheDocument();
  expect(getByClass('set-password__title')).toBeInTheDocument();
  expect(getByText('Reset password')).toBeInTheDocument();

  expect(getByText('Don’t worry, it happens to everyone.')).toBeInTheDocument();
  expect(
    getByText(
      'Enter the email address you used when registering and we’ll send instructions to reset your password.'
    )
  ).toBeInTheDocument();

  expect(getByClass(/set-password__form--email-input/)).toBeInTheDocument();
  expect(getByText('Email')).toBeInTheDocument();

  expect(getByClass(/btn-esolidar/)).toBeInTheDocument();
  expect(getByText('Send instructions')).toBeInTheDocument();
});
