import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../CodeExpiredModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders CodeExpiredModal default component', () => {
  const { getByText, getByClass } = render(<Default />);

  expect(getByText('Configuration email expired')).toBeTruthy();
  expect(getByText(/We're sorry, but your configuration email has expired./)).toBeTruthy();
  expect(getByText(/For safety reasons, the email is valid only for 30 minutes./)).toBeTruthy();
  expect(getByText('Please resend the email.')).toBeTruthy();
  expect(getByClass('codeExpiredModal')).toBeTruthy();
});
