import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../LoginToInteract.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders LoginToInteract default', () => {
  const { getByTestId, getByText } = render(<Default />);

  expect(getByTestId('login-to-interact')).toBeInTheDocument();
  expect(
    getByText('You must have an account to comment. Already have an account?')
  ).toBeInTheDocument();
  expect(getByTestId('login-button')).toBeInTheDocument();
  expect(getByText('Log in')).toBeInTheDocument();
});
