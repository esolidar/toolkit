import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConfirmModal from '../ConfirmModal';

test('renders children button properly', async () => {
  render(
    <ConfirmModal
      onConfirm={() => {}}
      body="Are you sure?"
      confirmText="Confirm"
      title="Confirmation"
    >
      <button type="button" className="btn" data-testid="button">
        Action
      </button>
    </ConfirmModal>
  );
  await waitFor(() => {
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});

test('renders without children button properly', async () => {
  render(
    <ConfirmModal
      onConfirm={() => {}}
      body="Are you sure?"
      confirmText="Confirm"
      title="Confirmation"
      buttonText="button-without-children"
    />
  );

  await waitFor(() => {
    const button = screen.getByTestId('button-without-children');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('button-without-children');
  });
});

test('simulate click on button', async () => {
  render(
    <ConfirmModal
      onConfirm={() => {}}
      body="Are you sure?"
      confirmText="Confirm"
      title="Confirmation"
    >
      <button type="button" className="btn" data-testid="button">
        Action
      </button>
    </ConfirmModal>
  );
  await waitFor(() => {
    const btn = screen.getByTestId('button');
    userEvent.click(btn);
    const modal = screen.getByTestId('button');
    const body = screen.getByTestId('body');
    const footer = screen.getByTestId('footer');
    expect(modal).toBeInTheDocument();
    expect(body).toHaveTextContent('Are you sure?');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('CancelConfirm');
  });
});
