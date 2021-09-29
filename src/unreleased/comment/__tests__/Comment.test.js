import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultListTitle,
  WithResponses as WithResponsesStory,
} from '../Comment.stories';

const Default = composeStory(DefaultListTitle, Meta);
const WithResponses = composeStory(WithResponsesStory, Meta);

it('renders comment component', () => {
  const { getByClass, getByText, getByTestId } = render(<Default />);

  expect(getByClass('component-comment')).toBeInTheDocument();
  expect(getByClass('comment-header')).toBeInTheDocument();
  expect(getByClass('component-comment__body')).toBeInTheDocument();
  expect(
    getByText('Este comentário foi escrito pelo user loggado e não tem respostas')
  ).toBeInTheDocument();
  expect(getByClass('component-comment__footer')).toBeInTheDocument();
  expect(getByTestId('comment-create')).toBeInTheDocument();
});

it('renders comment component with responses', async () => {
  const { getByClass, getByText, getByTestId, queryAllByClass } = render(<WithResponses />);

  expect(getByClass('component-comment')).toBeInTheDocument();
  expect(getByClass('comment-header')).toBeInTheDocument();
  expect(getByClass('component-comment__body')).toBeInTheDocument();
  expect(
    getByText('Este comentário foi escrito pelo user loggado e tem 2 respostas')
  ).toBeInTheDocument();
  expect(getByClass('component-comment__footer')).toBeInTheDocument();
  expect(getByClass(/component-comment__footer--reply/)).toBeInTheDocument();
  expect(getByText('Reply')).toBeInTheDocument();
  expect(getByClass(/component-comment__footer--see-replies/)).toBeInTheDocument();
  expect(getByText('See 2 replies')).toBeInTheDocument();
  expect(getByTestId('comment-create')).toBeInTheDocument();

  fireEvent.click(getByClass(/component-comment__footer--see-replies/));
  await waitFor(() => {
    expect(queryAllByClass('component-comment')).toHaveLength(3);
    expect(getByText('Esta resposta foi escrita pelo user loggado')).toBeInTheDocument();
    expect(getByText('Esta resposta também foi escrita pelo user loggado')).toBeInTheDocument();
  });
});
