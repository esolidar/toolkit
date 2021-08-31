import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';

import Meta, { Default as DefaultStory } from '../UserMenu.stories';

const Default = composeStory(DefaultStory, Meta);

test('renders the correct elements in first load', async () => {
  const { queryByClass, getByAltText, queryByRole } = render(<Default />);

  expect(queryByClass('esolidar-user-menu dropdown')).toBeInTheDocument();

  const companyLogo = getByAltText('Webankor');
  expect(companyLogo).toBeInTheDocument();

  const menu = queryByRole('menu');
  expect(menu).not.toBeInTheDocument();
});

test('renders dropdown menu when button is clicked', async () => {
  const { queryByClass, queryByText } = render(<Default />);

  const toggle = queryByClass('dropdown-toggle btn btn-primary');
  userEvent.click(toggle);

  const menu = queryByClass('dropdown-menu show dropdown-menu-right');
  expect(menu).toBeInTheDocument();

  const hidden = queryByText('this item is hidden');
  expect(hidden).not.toBeInTheDocument();

  const settings = queryByText('topMenu.settings');
  expect(settings).toBeInTheDocument();
  expect(settings).toHaveClass('dropdown-item');

  const usersettings = queryByText('topMenu.usersettings');
  expect(usersettings).toBeInTheDocument();
  expect(usersettings).toHaveClass('dropdown-item');

  const manageBankAccounts = queryByText('topMenu.manageBankAccounts');
  expect(manageBankAccounts).toBeInTheDocument();
  expect(manageBankAccounts).toHaveClass('dropdown-item');

  const documents = queryByText('topMenu.documents');
  expect(documents).toBeInTheDocument();
  expect(documents).toHaveClass('dropdown-item');

  const tickets = queryByText('topMenu.tickets');
  expect(tickets).toBeInTheDocument();
  expect(tickets).toHaveClass('dropdown-item');

  const departments = queryByText('topMenu.departments');
  expect(departments).toBeInTheDocument();
  expect(departments).toHaveClass('dropdown-item');

  const brands = queryByText('topMenu.brands');
  expect(brands).toBeInTheDocument();
  expect(brands).toHaveClass('dropdown-item');

  const logout = queryByText('topMenu.logout');
  expect(logout).toBeInTheDocument();
  expect(logout).toHaveClass('dropdown-item');
});
