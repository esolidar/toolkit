import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Meta, {
  Business as BusinessStory,
  Community as CommunityStory,
  NoUnreadNotifications as NoUnreadNotificationsStory,
  EmptyState as EmptyStateStory,
} from '../NotificationsBell.stories';

const Business = composeStory(BusinessStory, Meta);
const Community = composeStory(CommunityStory, Meta);
const NoUnreadNotifications = composeStory(NoUnreadNotificationsStory, Meta);
const EmptyState = composeStory(EmptyStateStory, Meta);

test('renders NotificationsBell Business', async () => {
  render(<Business />);

  const number = screen.getByText('20');
  expect(number).toBeInTheDocument();

  const toggle = screen.getByRole('button');
  userEvent.click(toggle);

  const notificationsTitle = screen.getByText('Notifications');
  expect(notificationsTitle).toBeInTheDocument();

  const markAsReadBtn = screen.getByText('Mark all as read');
  expect(markAsReadBtn).toBeInTheDocument();

  const notifications = screen.queryAllByTestId('notification-row');
  expect(notifications).toHaveLength(2);

  const notificationRowBoxes = screen.queryAllByTestId('notification-row-box');
  expect(notificationRowBoxes[0]).toHaveClass('unread');
  expect(notificationRowBoxes[1]).not.toHaveClass('unread');

  const userPhoto = screen.queryAllByAltText('User photo');
  expect(userPhoto).toHaveLength(2);

  const text = screen.queryAllByTestId('text');
  expect(text).toHaveLength(2);
});

test('renders NotificationsBell Community', async () => {
  render(<Community />);

  const number = screen.getByText('20');
  expect(number).toBeInTheDocument();

  const toggle = screen.getByRole('button');
  userEvent.click(toggle);

  const notificationsTitle = screen.getByText('Notifications');
  expect(notificationsTitle).toBeInTheDocument();

  const markAsReadBtn = screen.queryByText('Mark all as read');
  expect(markAsReadBtn).not.toBeInTheDocument();

  const notifications = screen.queryAllByTestId('notification-row');
  expect(notifications).toHaveLength(2);

  const notificationRowBoxes = screen.queryAllByTestId('notification-row-box');
  expect(notificationRowBoxes[0]).toHaveClass('unread');
  expect(notificationRowBoxes[1]).not.toHaveClass('unread');

  const userPhoto = screen.queryAllByAltText('eSolidar');
  expect(userPhoto).toHaveLength(2);

  const text = screen.queryAllByTestId('text');
  expect(text).toHaveLength(2);
});

test('renders NotificationsBell NoUnreadNotifications', async () => {
  render(<NoUnreadNotifications />);

  const toggle = screen.getByRole('button');
  userEvent.click(toggle);

  const markAsReadBtn = screen.queryByText('Mark all as read');
  expect(markAsReadBtn).not.toBeInTheDocument();

  const notifications = screen.queryAllByTestId('notification-row');
  expect(notifications).toHaveLength(2);
});

test('renders NotificationsBell EmptyState', async () => {
  render(<EmptyState />);

  const toggle = screen.getByRole('button');
  userEvent.click(toggle);

  const markAsReadBtn = screen.queryByText('Mark all as read');
  expect(markAsReadBtn).not.toBeInTheDocument();

  const notifications = screen.queryAllByTestId('notification-row');
  expect(notifications).toHaveLength(0);

  const noNotificationsText = screen.getByText('There are no notifications.');
  expect(noNotificationsText).toBeInTheDocument();
});
