import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../UploadDocumentModal.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders UploadDocumentModal default', () => {
  const { getByClass, getAllByClass, getByTestId } = render(<Default />);

  expect(getByClass(/modal-dialog custom-modal /)).toBeInTheDocument();
  expect(getByClass('uploadDocumentModal__form')).toBeInTheDocument();
  expect(getByClass('label-optional')).toBeInTheDocument();
  expect(getByClass(/dropzone-box/)).toBeInTheDocument();
  expect(getByClass('toggle')).toBeInTheDocument();
  expect(getAllByClass(/btn-esolidar /)).toHaveLength(3);
  expect(getAllByClass('input-label-component')).toHaveLength(4);
  expect(getByTestId('name')).toBeInTheDocument();
  expect(getByTestId('description')).toBeInTheDocument();
});

it('renders UploadDocumentModal change input name', () => {
  const { getByTestId } = render(<Default />);

  const inputName = getByTestId('name');
  expect(inputName).toBeInTheDocument();
  fireEvent.change(inputName, {
    target: { value: 'new name' },
  });

  expect(inputName).toHaveAttribute('value', 'new name');
});

it('renders UploadDocumentModal change input description', () => {
  const { getByTestId } = render(<Default />);

  const inputDescription = getByTestId('description');
  expect(inputDescription).toBeInTheDocument();
  fireEvent.change(inputDescription, {
    target: { value: 'new description' },
  });

  expect(inputDescription.innerHTML).toBe('new description');
});

it('renders UploadDocumentModal change private toggle', async () => {
  const { getByClass } = render(<Default />);

  const toggle = getByClass('react-toggle-screenreader-only');
  expect(toggle).toBeInTheDocument();
  fireEvent.click(toggle);
  await waitFor(() => {
    expect(toggle.checked).toEqual(true);
  });
});
