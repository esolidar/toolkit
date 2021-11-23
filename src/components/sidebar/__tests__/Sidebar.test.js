import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Sidebar.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Sidebar default', () => {
  const { getByTestId, getByText, getByClass, queryAllByClass } = render(<Default />);

  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  expect(getByClass(/sidebarNavigation__submenu--open/)).toBeInTheDocument();
  expect(queryAllByClass(/menu__item /)).toHaveLength(6);
  expect(queryAllByClass(/menu__item--notification/)).toHaveLength(3);
  expect(queryAllByClass(/menu__item--active/)).toHaveLength(2);
  expect(queryAllByClass(/menu__item--active menu__item--notification/)).toHaveLength(1);

  fireEvent.click(getByText('Submenu option'));

  waitFor(() => {
    expect(getByClass(/sidebarNavigation--isOpenSubMenu/)).toBeInTheDocument();
    expect(getByClass(/sidebarNavigation--isCollapsed/)).toBeInTheDocument();
  });
});
