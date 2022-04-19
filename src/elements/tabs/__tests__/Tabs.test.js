import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import { render, waitFor } from '../../../../__customQueries__/test-utils';
import * as stories from '../Tabs.stories';

const { Default, WithCounter, WithIcon } = composeStories(stories);

test('renders every elements of the Default component', async () => {
  const { getByRole, queryAllByRole, getByText, getById } = render(<Default />);

  await waitFor(() => {
    expect(getByRole('tablist')).toBeInTheDocument();
    expect(queryAllByRole('tab')).toHaveLength(3);
    expect(queryAllByRole('tabpanel')).toHaveLength(1);

    expect(getByText('Corporate')).toBeInTheDocument();
    expect(getByText('Personal')).toBeInTheDocument();
    expect(getByText('Disabled')).toBeInTheDocument();
    expect(getByText('Corporate content')).toBeInTheDocument();

    const activeTab = getById('tabs-tab-corporate');
    expect(activeTab).toHaveClass('active');

    const disabledTab = getById('tabs-tab-disabled');
    expect(disabledTab).toHaveClass('disabled');
  });
});

test('changes active tab on click', async () => {
  const { getById } = render(<Default />);

  await waitFor(() => {
    const personalTab = getById('tabs-tab-personal');
    userEvent.click(personalTab);
    expect(personalTab).toHaveClass('active');
  });
});

test('renders tabs with counter', async () => {
  const { getAllByTestId } = render(<WithCounter />);

  expect(getAllByTestId('badge-component')).toHaveLength(3);
});

test('renders tabs with icon', async () => {
  const { getAllByClass } = render(<WithIcon />);

  expect(getAllByClass(/icon-component/)).toHaveLength(3);
});
