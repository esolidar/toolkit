import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import Meta, { WithArrowType0, WithArrowType1, WithoutPagination } from '../Pagination.stories';

const WithArrowType0Component = composeStory(WithArrowType0, Meta);
const WithArrowType1Component = composeStory(WithArrowType1, Meta);
const WithoutPaginationComponent = composeStory(WithoutPagination, Meta);

it('renders Pagination with arrow type 0', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <WithArrowType0Component />
    </IntlProvider>
  );

  const paginationComponent = screen.getByTestId('pagination');
  const prev = screen.getByLabelText('Go to previous page');
  const next = screen.getByLabelText('Go to next page');
  const activePage = document.querySelector('.active');
  expect(paginationComponent).toBeInTheDocument();
  expect(prev).toBeInTheDocument();
  expect(next).toBeInTheDocument();
  expect(activePage.children[0].textContent).toBe('2');
});

it('renders Pagination with arrow type 1', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <WithArrowType1Component />
    </IntlProvider>
  );

  const paginationComponent = screen.getByTestId('pagination');
  const prev = screen.getByTestId('prev-page');
  const next = screen.getByTestId('next-page');
  const activePage = document.querySelector('.active');
  expect(paginationComponent).toBeInTheDocument();
  expect(prev).toBeInTheDocument();
  expect(next).toBeInTheDocument();
  expect(activePage.children[0].textContent).toBe('2');
});

it('Without Pagination', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <WithoutPaginationComponent />
    </IntlProvider>
  );

  const paginationComponent = screen.queryByTestId('pagination');
  expect(paginationComponent).not.toBeInTheDocument();
});
