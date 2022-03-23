import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, waitFor, act } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Video.stories';

const Default = composeStory(DefaultStory, Meta);

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

it('renders Video component', async () => {
  await act(async () => {
    const { getByClass, getByText, queryByClass } = render(<Default />);

    expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
    expect(getByText('Video')).toBeInTheDocument();
    expect(
      getByText(/An image is worth a thousand words, but we believe a video is worth a billion!/)
    ).toBeInTheDocument();
    expect(
      getByText(
        /This is optional, but having a video will help you promote and condense your concept to be easily digested by reviewers and viewers./
      )
    ).toBeInTheDocument();
    expect(getByText(/Enter the link for a Youtube or Vimeo video/)).toBeInTheDocument();
    expect(getByClass('form-group')).toBeTruthy();
    expect(queryByClass('esolidar-preview__video')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(getByClass('esolidar-preview__video cursor-pointer')).toBeInTheDocument();
    });
  });
});
