import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, screen } from '../../../../__customQueries__/test-utils';
import Meta, { WithArrowType0, WithArrowType1, WithoutPagination } from '../Pagination.stories';

const WithArrowType0Component = composeStory(WithArrowType0, Meta);
const WithArrowType1Component = composeStory(WithArrowType1, Meta);
const WithoutPaginationComponent = composeStory(WithoutPagination, Meta);

it('renders Pagination with arrow type 0', () => {
  render(<WithArrowType0Component />);

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
  render(<WithArrowType1Component />);

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
  render(<WithoutPaginationComponent />);

  const paginationComponent = screen.queryByTestId('pagination');
  expect(paginationComponent).not.toBeInTheDocument();
});
