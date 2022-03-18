import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithSelectedSdgs as WithSelectedSdgsStory,
} from '../Sdg.stories';

const Default = composeStory(DefaultStory, Meta);
const WithSelectedSdgs = composeStory(WithSelectedSdgsStory, Meta);

it('renders Sdgs component with empty state', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText('Sustainable Development Goals')).toBeInTheDocument();
  expect(getByClass('empty-state__title')).toBeInTheDocument();
  expect(getByText(/What does your project aspire to achieve?/)).toBeInTheDocument();
  expect(
    getByText(/Select the SDGs to give visibility of what your project aims to support./)
  ).toBeInTheDocument();
  expect(getByText(/Select goals/)).toBeInTheDocument();
});

it('renders Sdgs click open modal and add 2 Sdg', () => {
  const { getByClass, getAllByClass, getById, getByTestId, queryByText } = render(<Default />);

  fireEvent.click(getByTestId('select-goals'));

  act(() => {
    expect(getByClass('modal-content')).toBeTruthy();
    fireEvent.click(getById('sdg-2'));
  });

  act(() => {
    fireEvent.click(getById('sdg-6'));
  });

  act(() => {
    expect(getAllByClass('checkbox-card active lg')).toHaveLength(2);
    expect(queryByText('Preferred goals')).toBeInTheDocument();
    expect(queryByText('All other goals')).toBeInTheDocument();
    fireEvent.click(queryByText('Add goals'));
  });

  act(() => {
    expect(queryByText(/You haven’t selected any goals yet/)).not.toBeInTheDocument();
    expect(getAllByClass('checkbox-card no-hover lg')).toHaveLength(2);
  });
});

it('renders Sdgs component with list', () => {
  const { getByClass, getByText, queryByText } = render(<WithSelectedSdgs />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText('Sustainable Development Goals')).toBeInTheDocument();
  expect(
    getByText(/Select the SDGs to give visibility of what your project aims to support./)
  ).toBeInTheDocument();
  expect(queryByText(/You haven’t selected any goals yet/)).not.toBeInTheDocument();
  expect(
    queryByText(/Give visibility of what your project wants to achieve/)
  ).not.toBeInTheDocument();
  expect(getByText(/Select goals/)).toBeInTheDocument();
});

it('renders Sdgs click open modal and remove 1 Sdg', () => {
  const { getByClass, getAllByClass, getById, getByTestId, queryByText } = render(
    <WithSelectedSdgs />
  );

  fireEvent.click(getByTestId('edit-goals'));

  act(() => {
    expect(getByClass('modal-content')).toBeTruthy();
    fireEvent.click(getById('sdg-2'));
  });

  act(() => {
    expect(getAllByClass(/active/)).toHaveLength(3);
    fireEvent.click(queryByText('Add goals'));
  });

  act(() => {
    expect(queryByText(/You haven’t selected any category yet/)).not.toBeInTheDocument();
    expect(getAllByClass('checkbox-card no-hover lg')).toHaveLength(2);
  });
});
