import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import translation from '@esolidar/i18n/projects/toolkit/en';
import Meta, {
  WithoutLogin,
  WithLogin,
  FocusBoxWithShare,
  FocusBoxWithImages,
  FocusBoxWithShareAndImages,
  EditPost,
} from '../NewPostBox.stories';

const NewPostBoxWithoutLogin = composeStory(WithoutLogin, Meta);
const NewPostBoxWithLogin = composeStory(WithLogin, Meta);
const NewPostBoxFocusBoxWithShare = composeStory(FocusBoxWithShare, Meta);
const NewPostBoxFocusBoxWithImages = composeStory(FocusBoxWithImages, Meta);
const NewPostBoxFocusBoxWithShareAndImages = composeStory(FocusBoxWithShareAndImages, Meta);
const NewPostBoxEditPost = composeStory(EditPost, Meta);

it('Without Login', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxWithoutLogin />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');

  expect(box).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(header).not.toBeInTheDocument();
  expect(body).not.toBeInTheDocument();
});

it('With Login', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxWithLogin />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');

  expect(box).toBeInTheDocument();
  expect(loginButton).not.toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(body).not.toBeInTheDocument();
});

it('With Login and scrapter link', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxFocusBoxWithShare />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  userEvent.click(box);

  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');
  const share = screen.queryByTestId('share-link-preview');

  expect(loginButton).not.toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(share).toBeInTheDocument();
});

it('Remove scrapter link', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxFocusBoxWithShare />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  userEvent.click(box);

  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');
  const share = screen.queryByTestId('share-link-preview');
  const shareBtn = screen.queryByTestId('share-link-preview-btn');
  userEvent.click(shareBtn);

  expect(loginButton).not.toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(share).not.toBeInTheDocument();
});

it('With Login and image gallery', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxFocusBoxWithImages />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  userEvent.click(box);

  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');
  const images = screen.queryByTestId('images-preview');
  const image = screen.findAllByTestId('post-image-box');
  const btn = screen.findAllByTestId('delete-image');

  expect(loginButton).not.toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(images).toBeInTheDocument();
  expect((await image).length).toBe(5);
  expect((await btn).length).toBe(5);
});

it('Remove one image from gallery', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxFocusBoxWithImages />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  const btn = screen.findAllByTestId('delete-image');
  userEvent.click(box);
  userEvent.click((await btn)[0]);

  expect(box).toBeInTheDocument();
});

it('With Login and image share and gallery', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxFocusBoxWithShareAndImages />
    </IntlProvider>
  );

  const box = screen.queryByTestId('feed-create-post');
  userEvent.click(box);

  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');

  expect(loginButton).not.toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

it('Edit post', async () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <NewPostBoxEditPost />
    </IntlProvider>
  );

  const loginButton = screen.queryByTestId('login-button');
  const header = screen.queryByTestId('header');
  const body = screen.queryByTestId('body');

  expect(loginButton).not.toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
