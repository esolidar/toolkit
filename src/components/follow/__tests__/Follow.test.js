import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Following as FollowingStory } from '../Follow.stories';

const Default = composeStory(DefaultStory, Meta);
const Following = composeStory(FollowingStory, Meta);

const propsFollow = {
  follower: {
    followers: 0,
    follow: false,
  },
  href: 'http://www.esolidar.com',
  onClickCopyToClipboard: () => {},
  title: 'Esolidar be the change',
};

const propsFollowing = {
  follower: {
    followers: 34,
    follow: true,
  },
  href: 'http://www.esolidar.com',
  onClickCopyToClipboard: () => {},
  title: 'Esolidar be the change',
};

it('renders Follow Default', () => {
  const { getByClass, getByText } = render(<Default {...propsFollow} />);

  expect(getByClass('follow-component')).toBeTruthy();
  expect(getByClass(/follow-btn/)).toBeTruthy();
  expect(getByClass('follow-component__share')).toBeTruthy();
  expect(getByText('Follow')).toBeInTheDocument();
  expect(getByText('0 followers')).toBeInTheDocument();
});

it('renders Follow Default', () => {
  const { getByClass, getByText } = render(<Following {...propsFollowing} />);

  expect(getByClass('follow-component')).toBeTruthy();
  expect(getByClass(/following-btn/)).toBeTruthy();
  expect(getByClass('follow-component__share')).toBeTruthy();
  expect(getByText('Following')).toBeInTheDocument();
  expect(getByText('34 followers')).toBeInTheDocument();

  act(() => {
    fireEvent.mouseOver(getByClass('follow-component__button'));
    fireEvent.mouseLeave(getByClass('follow-component__button'));
  });
});
