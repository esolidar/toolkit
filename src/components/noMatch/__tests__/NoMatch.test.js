import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NoMatch from '../NoMatch';

const props = {
  color: 'red',
  errorMessage: 'Error message',
  link: '/project/list',
  linkText: 'Back to list',
};

test('should loading component, exist text 404 and link go back homepage ', () => {
  render(<NoMatch {...props} />);

  const titleError = screen.getByTestId('error-404');
  expect(titleError).toBeInTheDocument();
  expect(titleError).toHaveTextContent('404');

  const messageError = screen.getByTestId('message-404');
  expect(messageError).toBeInTheDocument();

  expect(messageError).toHaveTextContent('Error message');

  const linkHomePage = screen.getByTestId('link-homepage');
  expect(linkHomePage).toBeInTheDocument();
  expect(linkHomePage).toHaveAttribute('href', '/project/list');
});
