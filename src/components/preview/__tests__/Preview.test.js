import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, act, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Placeholder,
  VideoYoutube as VideoYoutubeStory,
  VideoVimeo as VideoVimeoStory,
} from '../Preview.stories';

const DefaultComponent = composeStory(DefaultStory, Meta);
const PlaceholderComponent = composeStory(Placeholder, Meta);
const VideoYoutube = composeStory(VideoYoutubeStory, Meta);
const VideoVimeo = composeStory(VideoVimeoStory, Meta);

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

it('renders Preview', () => {
  const { getByClass } = render(<DefaultComponent />);

  expect(getByClass('esolidar-preview')).toBeTruthy();
});

it('renders Preview', () => {
  const { getByClass } = render(<PlaceholderComponent />);

  expect(getByClass(/esolidar-preview__no-image/)).toBeTruthy();
});

it('renders Preview video youtube', async () => {
  await act(async () => {
    const { getByText, getByClass, queryByClass, getByTestId, queryByTestId } = render(
      <VideoYoutube />
    );
    expect(getByClass('esolidar-preview')).toBeInTheDocument();
    expect(getByClass('esolidar-preview__video')).toBeInTheDocument();
    expect(getByTestId('skeleton-thumbnail')).toBeInTheDocument();
    expect(getByTestId('skeleton-provider')).toBeInTheDocument();
    expect(getByTestId('skeleton-title')).toBeInTheDocument();
    expect(queryByClass('esolidar-preview__delete')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(getByClass('esolidar-preview__video--thumbnail')).toBeInTheDocument();
      expect(getByText('youtube.COM')).toBeInTheDocument();
      expect(getByText('Como fazer um Programa de Aceleração com a esolidar?')).toBeInTheDocument();
      expect(getByClass('esolidar-preview__delete')).toBeInTheDocument();

      expect(queryByTestId('skeleton-thumbnail')).not.toBeInTheDocument();
      expect(queryByTestId('skeleton-provider')).not.toBeInTheDocument();
      expect(queryByTestId('skeleton-title')).not.toBeInTheDocument();
    });
  });
});

it('renders Preview video vimeo', async () => {
  await act(async () => {
    const { getByText, getByClass, queryByClass, getByTestId, queryByTestId } = render(
      <VideoVimeo />
    );
    expect(getByClass('esolidar-preview')).toBeInTheDocument();
    expect(getByClass('esolidar-preview__video')).toBeInTheDocument();
    expect(getByTestId('skeleton-thumbnail')).toBeInTheDocument();
    expect(getByTestId('skeleton-provider')).toBeInTheDocument();
    expect(getByTestId('skeleton-title')).toBeInTheDocument();
    expect(queryByClass('esolidar-preview__delete')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(getByClass('esolidar-preview__video--thumbnail')).toBeInTheDocument();
      expect(getByText('youtube.COM')).toBeInTheDocument();
      expect(getByText('Como fazer um Programa de Aceleração com a esolidar?')).toBeInTheDocument();
      expect(getByClass('esolidar-preview__delete')).toBeInTheDocument();

      expect(queryByTestId('skeleton-thumbnail')).not.toBeInTheDocument();
      expect(queryByTestId('skeleton-provider')).not.toBeInTheDocument();
      expect(queryByTestId('skeleton-title')).not.toBeInTheDocument();
    });
  });
});
