import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Files.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders File component', () => {
  const { getByClass, getByText, queryByText, getAllByClass } = render(<Default />);

  expect(getByClass('active-page')).toBeTruthy();
  expect(getByClass('wizard-project-files')).toBeTruthy();
  expect(queryByText('Quisque libero ipsum, dapibus quis blandit eget')).toBeInTheDocument();
  expect(
    queryByText(
      /Cras fermentum semper euismod. Quisque libero ipsum, dapibus quis blandit eget, finibus at erat. Suspendisse sit amet venenatis tellus. Sed tempus, leo vel tempus malesuada/
    )
  ).toBeInTheDocument();
  expect(getByText(/Select up to 5 files smaller than 5 Mb/)).toBeInTheDocument();
  expect(getByClass('drop-zone-box with-icon')).toBeInTheDocument();
  expect(getAllByClass('file-card')).toHaveLength(1);
});

it('renders File component open delete modal', () => {
  const { getByClass, getByText, getByTestId, getAllByClass } = render(<Default />);

  expect(getAllByClass('esolidar-dropdown__toggle')).toHaveLength(1);
  fireEvent.click(getByClass('esolidar-dropdown__toggle'));

  act(() => {
    expect(getByText('Delete')).toBeInTheDocument();

    fireEvent.click(getByClass('esolidar-dropdown__item dropdown-item'));
  });

  act(() => {
    expect(getByText('Delete file?')).toBeInTheDocument();
    fireEvent.click(getByTestId('delete-file'));
  });

  act(() => {
    fireEvent.click(getByTestId('close-delete-file'));
  });
});
