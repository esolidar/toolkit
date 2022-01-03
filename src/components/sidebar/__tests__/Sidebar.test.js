import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Sidebar.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Sidebar default', () => {
  const { getByTestId, getAllByClass, getByClass, queryAllByClass } = render(<Default />);

  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  expect(getByClass(/sidebarNavigation__submenu--open/)).toBeInTheDocument();
  expect(queryAllByClass(/menu__item/)).toHaveLength(7);
  expect(queryAllByClass(/menu__item--notification/)).toHaveLength(2);
  expect(queryAllByClass(/menu__item--active/)).toHaveLength(0);
  expect(getAllByClass('icon-component')).toHaveLength(8);
});

it('renders Sidebar collapse', () => {
  const { getByTestId, getByClass } = render(<Default />);
  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  fireEvent.click(getByClass(/sidebarNavigation__collapsed--button/));
  waitFor(() => {
    expect(getByClass(/sidebarNavigation--isCollapsed/)).toBeInTheDocument();
  });
});

it('renders Sidebar open subMenu', () => {
  const { getByTestId, getByText, getByClass, queryAllByClass } = render(<Default />);
  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  fireEvent.click(getByText('Settings'));
  waitFor(() => {
    expect(getByClass(/sidebarNavigation--isOpenSubMenu/)).toBeInTheDocument();
    expect(getByClass(/sidebarNavigation--isCollapsed/)).toBeInTheDocument();
    expect(queryAllByClass(/menu__item--notification/)).toHaveLength(3);
  });
});
