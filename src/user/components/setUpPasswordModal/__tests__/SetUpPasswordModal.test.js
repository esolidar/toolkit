import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../SetUpPasswordModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Title default component', () => {
  const { getByText, getByClass } = render(<Default />);

  expect(getByText('You need to configure a password')).toBeTruthy();
  expect(
    getByText(
      'We noted that you only use Facebook to access your account, and as such have no password configured.'
    )
  ).toBeTruthy();
  expect(
    getByText(
      'The esolidar team is working hard to make our platform a safer place, and from now on, passwords will be mandatory for all accounts.'
    )
  ).toBeTruthy();
  expect(getByClass('custom-modal__title-icon')).toBeTruthy();
});
