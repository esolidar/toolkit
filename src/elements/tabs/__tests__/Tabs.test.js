import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../Tabs.stories';

const { Default } = composeStories(stories);

test('renders every elements of the component', async () => {
  render(<Default />);

  await waitFor(() => {
    const tabsComponent = screen.getByRole('tablist');
    expect(tabsComponent).toBeInTheDocument();

    const tabsList = screen.queryAllByRole('tab');
    expect(tabsList).toHaveLength(3);

    const tabsContentList = screen.queryAllByRole('tabpanel');
    expect(tabsContentList).toHaveLength(1);
    expect(screen.getByText('Personal content')).toBeInTheDocument();
  });
});

test('renders every tab text in the screen', async () => {
  render(<Default />);

  await waitFor(() => {
    expect(screen.getByText('Corporate')).toBeInTheDocument();
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Nonprofit')).toBeInTheDocument();
  });
});

test('renders active tab on first load', async () => {
  render(<Default />);

  await waitFor(() => {
    const activeTab = screen.getByText('Personal');
    expect(activeTab).toHaveClass('active');
  });
});

test('changes active tab on click', async () => {
  render(<Default />);

  await waitFor(() => {
    const corporateTab = screen.getByText('Corporate');
    userEvent.click(corporateTab);
    expect(corporateTab).toHaveClass('active');
  });
});

test('renders disabled tab', async () => {
  render(<Default />);

  await waitFor(() => {
    const disabledTab = screen.getByText('Nonprofit');
    expect(disabledTab).toHaveClass('disabled');
  });
});
