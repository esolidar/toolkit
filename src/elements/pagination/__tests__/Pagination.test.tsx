import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import Meta, { WithPrevAndNextPage, WhithoutNextAndPrevPage } from '../Pagination.stories';

const WithPrevAndNextPageComponent = composeStory(WithPrevAndNextPage, Meta);
const WhithoutNextAndPrevPageComponent = composeStory(WhithoutNextAndPrevPage, Meta);

test('renders Pagination with Perv and Next page', async () => {
  render(
    <IntlProvider locale="en">
      <WithPrevAndNextPageComponent />
    </IntlProvider>
  );

  await waitFor(() => {
    const paginationComponent = screen.getByTestId('pagination');
    const prev = screen.getByTestId('prev-page');
    const next = screen.getByTestId('next-page');
    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });
});

test('renders Pagination without Perv and Next page', async () => {
  render(
    <IntlProvider locale="en">
      <WhithoutNextAndPrevPageComponent />
    </IntlProvider>
  );

  await waitFor(() => {
    const paginationComponent = screen.getByTestId('pagination');
    const prev = document.querySelector('.prev-page');
    const next = document.querySelector('next-page');
    expect(paginationComponent).toBeInTheDocument();
    expect(prev).not.toBeInTheDocument();
    expect(next).not.toBeInTheDocument();
  });
});
