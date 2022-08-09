import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithReply as WithReplyStory,
  WithImages as WithImagesStory,
  WithFiles as WithFilesStory,
  WithVideo as WithVideoStory,
  WithUrl as WithUrlStory,
} from '../ViewComment.stories';

const Default = composeStory(DefaultStory, Meta);
const WithReply = composeStory(WithReplyStory, Meta);
const WithImages = composeStory(WithImagesStory, Meta);
const WithFiles = composeStory(WithFilesStory, Meta);
const WithVideo = composeStory(WithVideoStory, Meta);
const WithUrl = composeStory(WithUrlStory, Meta);

it('renders Comment default component open', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass(/view-comment view-comment--border/)).toBeTruthy();
});

it('renders Comment component open share', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass(/view-comment view-comment--border/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId(/share/));
  });

  expect(getByClass(/modal-backdrop/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId(/share-close/));
  });
});

it('renders Comment component and click comment btn', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass(/view-comment view-comment--border/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId('comment'));
  });
});

it('renders Comment component open delete modal', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass(/view-comment view-comment--border/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByClass(/esolidar-dropdown__toggle/));
  });

  act(() => {
    fireEvent.click(getByClass(/dropdown-item/));
  });

  expect(getByClass(/modal-backdrop/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId('delete-button'));
  });

  act(() => {
    fireEvent.click(getByTestId('cancel-button'));
  });
});

it('renders Comment Reply component open', () => {
  const { getAllByClass } = render(<WithReply />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();
});

it('renders Comment Reply and click in view replies', () => {
  const { getAllByClass, getByTestId } = render(<WithReply />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId('view-allReplies69'));
  });
});

it('renders Comment Images component open', () => {
  const { getAllByClass } = render(<WithImages />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();
});

it('renders Comment Files component open', () => {
  const { getAllByClass } = render(<WithFiles />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();
});

it('renders Comment Video component open', () => {
  const { getAllByClass } = render(<WithVideo />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();
});

it('renders Comment Video and open video', () => {
  const { getAllByClass, getByClass } = render(<WithVideo />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();

  act(() => {
    fireEvent.click(getByClass('esolidar-preview__video cursor-pointer'));
  });
});

it('renders Note Url component open', () => {
  const { getAllByClass } = render(<WithUrl />);

  expect(getAllByClass(/view-comment view-comment--border/)).toBeTruthy();
});
