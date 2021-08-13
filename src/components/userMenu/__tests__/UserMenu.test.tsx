import '@testing-library/jest-dom';
import { render, screen } from '../../../../__customQueries__/test-utils';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/testing-react';

import Meta, { Default as DefaultStory } from '../UserMenu.stories';

const Default = composeStory(DefaultStory, Meta);

test('renders the correct elements in first load', async () => {
  render(<Default />);

  const toggle = screen.getByRole('toggle');
  expect(toggle).toBeInTheDocument();

  const companyLogo = screen.getByAltText('Webankor');
  expect(companyLogo).toBeInTheDocument();

  const menu = screen.queryByRole('menu');
  expect(menu).not.toBeInTheDocument();
});

test('renders dropdown menu when button is clicked', async () => {
  render(<Default />);

  const toggle = screen.getByRole('toggle');
  userEvent.click(toggle);

  const menu = screen.getByRole('menu');
  expect(menu).toBeInTheDocument();

  const hidden = screen.queryByText('this item is hidden');
  expect(hidden).not.toBeInTheDocument();

  const settings = screen.queryByText('topMenu.settings');
  expect(settings).toBeInTheDocument();
  expect(settings).toHaveClass('dropdown-item');

  const usersettings = screen.queryByText('topMenu.usersettings');
  expect(usersettings).toBeInTheDocument();
  expect(usersettings).toHaveClass('dropdown-item');

  const manageBankAccounts = screen.queryByText('topMenu.manageBankAccounts');
  expect(manageBankAccounts).toBeInTheDocument();
  expect(manageBankAccounts).toHaveClass('dropdown-item');

  const documents = screen.queryByText('topMenu.documents');
  expect(documents).toBeInTheDocument();
  expect(documents).toHaveClass('dropdown-item');

  const tickets = screen.queryByText('topMenu.tickets');
  expect(tickets).toBeInTheDocument();
  expect(tickets).toHaveClass('dropdown-item');

  const departments = screen.queryByText('topMenu.departments');
  expect(departments).toBeInTheDocument();
  expect(departments).toHaveClass('dropdown-item');

  const brands = screen.queryByText('topMenu.brands');
  expect(brands).toBeInTheDocument();
  expect(brands).toHaveClass('dropdown-item');

  const logout = screen.queryByText('topMenu.logout');
  expect(logout).toBeInTheDocument();
  expect(logout).toHaveClass('dropdown-item');
});
