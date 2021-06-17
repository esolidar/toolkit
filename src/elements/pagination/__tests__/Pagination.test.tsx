import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import Meta, { WithArrowType0, WithArrowType1, WhithoutArrows } from '../Pagination.stories';

const WithArrowType0Component = composeStory(WithArrowType0, Meta);
const WithArrowType1Component = composeStory(WithArrowType1, Meta);
const WhithoutArrowsComponent = composeStory(WhithoutArrows, Meta);

it('renders Pagination with arrow type 0', async () => {
  render(
    <IntlProvider locale="en">
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

it('renders Pagination with arrow type 1', async () => {
  render(
    <IntlProvider locale="en">
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

it('renders Pagination without Prev and Next page', async () => {
  render(
    <IntlProvider locale="en">
      <WhithoutArrowsComponent />
    </IntlProvider>
  );

  const paginationComponent = screen.getByTestId('pagination');
  const prev = screen.queryByTestId('prev-page');
  const next = screen.queryByTestId('next-page');
  const activePage = document.querySelector('.active');
  expect(paginationComponent).toBeInTheDocument();
  expect(prev).not.toBeInTheDocument();
  expect(next).not.toBeInTheDocument();
  expect(activePage.children[0].textContent).toBe('1');
});
