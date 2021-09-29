import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  LoggedOut as LoggedOutStory,
  LoggedIn as LoggedInStory,
} from '../CommentList.stories';

const LoggedOut = composeStory(LoggedOutStory, Meta);
const LoggedIn = composeStory(LoggedInStory, Meta);

it('renders comment component', () => {
  const { getByClass, getByText, queryAllByClass } = render(<LoggedOut />);

  expect(getByClass('login-to-interact')).toBeInTheDocument();
  expect(queryAllByClass('component-comment')).toHaveLength(2);
  expect(
    getByText('Este comentário foi escrito pelo user loggado e não tem respostas')
  ).toBeInTheDocument();
  expect(getByText('Este comentário foi escrito por outro user')).toBeInTheDocument();
  expect(queryAllByClass(/component-comment__footer--reply/)).toHaveLength(0);
});

it('renders comment component', () => {
  const { getByText, queryByClass, queryAllByClass, queryAllByTestId } = render(<LoggedIn />);

  expect(queryByClass('login-to-interact')).not.toBeInTheDocument();
  expect(queryAllByTestId('comment-create')).toHaveLength(3);
  expect(queryAllByClass('component-comment')).toHaveLength(2);
  expect(
    getByText('Este comentário foi escrito pelo user loggado e não tem respostas')
  ).toBeInTheDocument();
  expect(getByText('Este comentário foi escrito por outro user')).toBeInTheDocument();
  expect(queryAllByClass(/component-comment__footer--reply/)).toHaveLength(2);
});
