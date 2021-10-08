import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultListTitle } from '../Reply.stories';

const Default = composeStory(DefaultListTitle, Meta);

it('renders comment component', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('component-comment')).toBeInTheDocument();
  expect(getByClass('comment-header')).toBeInTheDocument();
  expect(getByClass('component-comment__body')).toBeInTheDocument();
  expect(
    getByText('Este comentário foi escrito pelo user loggado e não tem respostas')
  ).toBeInTheDocument();
  expect(getByClass('component-comment__footer')).toBeInTheDocument();
});
