import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithReply as WithReplyStory,
  WithImages as WithImagesStory,
  WithFiles as WithFilesStory,
  WithVideo as WithVideoStory,
  WithUrl as WithUrlStory,
} from '../Note.stories';

const Default = composeStory(DefaultStory, Meta);
const WithReply = composeStory(WithReplyStory, Meta);
const WithImages = composeStory(WithImagesStory, Meta);
const WithFiles = composeStory(WithFilesStory, Meta);
const WithVideo = composeStory(WithVideoStory, Meta);
const WithUrl = composeStory(WithUrlStory, Meta);

it('renders Note default component open', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('view-comment__note')).toBeTruthy();
});

it('renders Note component and open reply', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('view-comment__note')).toBeTruthy();
});

it('renders Note component open reply and cancel', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass('view-comment__note')).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId(/reply/));
  });

  act(() => {
    fireEvent.click(getByTestId(/cancel-btn/));
  });
});

it('renders Note component open delete modal', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass('view-comment__note')).toBeTruthy();

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

it('renders Note Reply component open', () => {
  const { getAllByClass } = render(<WithReply />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();
});

it('renders Note Reply and click in view replies', () => {
  const { getAllByClass, getByTestId } = render(<WithReply />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();

  act(() => {
    fireEvent.click(getByTestId('view-replies59'));
  });

  act(() => {
    fireEvent.click(getByTestId('view-allReplies69'));
  });
});

it('renders Note Images component open', () => {
  const { getAllByClass } = render(<WithImages />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();
});

it('renders Note Files component open', () => {
  const { getAllByClass } = render(<WithFiles />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();
});

it('renders Note Video component open', () => {
  const { getAllByClass } = render(<WithVideo />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();
});

it('renders Note Video and open video', () => {
  const { getAllByClass, getByClass } = render(<WithVideo />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();

  act(() => {
    fireEvent.click(getByClass('esolidar-preview__video cursor-pointer'));
  });
});

it('renders Note Url component open', () => {
  const { getAllByClass } = render(<WithUrl />);

  expect(getAllByClass('view-comment__note')).toBeTruthy();
});
