/* global expect */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';
import NoMatch from '../NoMatch';

const props = {
  color: 'red',
  link: '/',
  linkText: 'Back to Homepage',
};

test('should loading component, exist text 404 and link go back homepage ', () => {
  render(<NoMatch {...props} />);

  const titleError = screen.getByTestId('error-404');
  expect(titleError).toBeInTheDocument();
  expect(titleError).toHaveTextContent('404');

  const messageError = screen.getByTestId('message-404');
  expect(messageError).toBeInTheDocument();
  expect(messageError).toHaveTextContent('Sorry, the page you are looking for could not be found!');

  const linkHomePage = screen.getByTestId('link-homepage');
  expect(linkHomePage).toBeInTheDocument();
  expect(linkHomePage).toHaveAttribute('href', '/');
});
