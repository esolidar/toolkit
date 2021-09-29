import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultListTitle } from '../CommentCreate.stories';

const Default = composeStory(DefaultListTitle, Meta);

it('renders commentCreate component', () => {
  const { getByClass, getByText, getByPlaceholderText, getByTestId } = render(<Default />);

  expect(getByTestId('comment-create')).toBeInTheDocument();
  expect(getByClass('profile-avatar')).toBeInTheDocument();
  expect(getByClass(/comment-create__textarea/)).toBeInTheDocument();
  expect(getByTestId('text')).toBeInTheDocument();
  expect(getByPlaceholderText('Leave a comment')).toBeInTheDocument();
  expect(getByClass(/comment-create__submit/)).toBeInTheDocument();
  expect(getByText('Send')).toBeInTheDocument();
});
