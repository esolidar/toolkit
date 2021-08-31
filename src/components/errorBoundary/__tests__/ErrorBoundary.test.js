import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '../../../../__customQueries__/test-utils';
import ErrorBoundary from '../index';

const props = {
  className: '',
  color: {
    primaryColor: '#5AC3E1',
  },
  showError: true,
};

test('Error Boundary', async () => {
  render(<ErrorBoundary {...props} />);
  await waitFor(() => {
    const errorTitle = screen.getByTestId('errorBoundary-title');
    expect(errorTitle).toBeInTheDocument();
    const errorLink = screen.getByTestId('errorBoundary-link');
    expect(errorLink).toBeInTheDocument();
    expect(errorLink).toHaveStyle('color: #5AC3E1');
    const errorEmoji = screen.getByTestId('errorBoundary-emoji');
    expect(errorEmoji).toHaveTextContent('⚠️');
  });
});
