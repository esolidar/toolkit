import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Reply as ReplyStory } from '../CreateComment.stories';

const Default = composeStory(DefaultStory, Meta);
const Reply = composeStory(ReplyStory, Meta);

const videoResponse = {
  status: 200,
  data: {
    title: 'Como fazer um Programa de Aceleração com a esolidar?',
    author_name: 'esolidar',
    author_url: 'https://www.youtube.com/c/Esolidar',
    type: 'video',
    height: 200,
    width: 356,
    version: '1.0',
    provider_name: 'YouTube',
    provider_url: 'https://www.youtube.com/',
    thumbnail_height: 360,
    thumbnail_width: 480,
    thumbnail_url: 'https://i.ytimg.com/vi/f7x5IeWi0v8/hqdefault.jpg',
    html: '<iframe width="356" height="200" src="https://www.youtube.com/embed/f7x5IeWi0v8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(videoResponse.data),
  })
);

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
    fireEvent.change(getById('text-0'), {
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
