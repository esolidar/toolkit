import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Reply as ReplyStory } from '../CreateComment.stories';

const Default = composeStory(DefaultStory, Meta);
const Reply = composeStory(ReplyStory, Meta);

it('renders Success default component open', () => {
  const { getByClass, getByText, getByTestId } = render(<Default />);

  expect(getByClass('accelerator-comment-create')).toBeTruthy();
  expect(
    getByText(/Share ideas, suggestions or initiaves for this project.../)
  ).toBeInTheDocument();

  act(() => {
    fireEvent.click(getByClass('accelerator-comment-create'));
  });

  expect(getByText('Joel F. Calheiros')).toBeInTheDocument();

  act(() => {
    fireEvent.click(getByTestId('cancel-btn'));
  });

  expect(
    getByText(/Share ideas, suggestions or initiaves for this project.../)
  ).toBeInTheDocument();
});

it('Test get url data', () => {
  const { getByClass, getByText, getById } = render(<Default />);

  fireEvent.click(getByClass('accelerator-comment-create'));

  act(() => {
    fireEvent.change(getById('text'), {
      target: { value: 'https://www.youtube.com/watch?v=f7x5IeWi0v8&t=1s' },
    });
  });

  act(() => {
    fireEvent.change(getById('text'), {
      target: { value: '' },
    });
  });

  act(() => {
    fireEvent.change(getById('text'), {
      target: { value: 'https://vimeo.com/164265382' },
    });
  });

  act(() => {
    fireEvent.change(getById('text'), {
      target: { value: '' },
    });
  });

  act(() => {
    fireEvent.change(getById('text'), {
      target: { value: 'https://www.esolidar.com' },
    });
  });

  expect(getByText('esolidar | Ajudando a ajudar!')).toBeInTheDocument();
});

it('renders Success default component open', () => {
  const { getByClass } = render(<Reply />);

  expect(getByClass(/comment-reply-box/)).toBeTruthy();
});
