import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../../../__customQueries__/test-utils';
import Meta, { Pending as PendingStory, Approved as ApprovedStory } from '../Overview.stories';

const Pending = composeStory(PendingStory, Meta);
const Approved = composeStory(ApprovedStory, Meta);

it('renders Overview pending view', () => {
  const { getByClass, queryAllByText, queryByText } = render(<Pending />);

  expect(getByClass('project-detail-component')).toBeTruthy();
  expect(getByClass('carouselLightbox')).toBeTruthy();
  expect(getByClass('card-project-detail')).toBeTruthy();
  expect(queryByText('About')).toBeInTheDocument();
  expect(queryByText('Documents')).toBeInTheDocument();
  expect(queryByText('Updates')).toBeInTheDocument();
  expect(queryByText('Comments')).toBeInTheDocument();
  expect(queryByText('Titulo de secção')).toBeInTheDocument();
  expect(queryByText('Questão 1')).toBeInTheDocument();
  expect(queryByText('Resposta à pergunta 1')).toBeInTheDocument();
  expect(queryAllByText('Private')).toHaveLength(4);

  act(() => {
    fireEvent.click(queryByText('Documents'));
  });
});

it('renders Overview Approved view', () => {
  const { getByClass, queryByText } = render(<Approved />);
  act(() => {
    fireEvent.click(queryByText('About'));
  });

  expect(getByClass('project-detail-component')).toBeTruthy();
  expect(getByClass('project-detail-component__initiatives-list')).toBeTruthy();
});
