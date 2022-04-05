import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, act } from '../../../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  WithSelectedCategories as WithSelectedCategoriesStory,
} from '../Categories.stories';

const Default = composeStory(DefaultStory, Meta);
const WithSelectedCategories = composeStory(WithSelectedCategoriesStory, Meta);

it('renders Categories click open modal and add 1 category', () => {
  const { getByClass, getAllByClass, getById, getByTestId, queryByText } = render(<Default />);

  fireEvent.click(getByTestId('select-categories'));

  act(() => {
    expect(getByClass('modal-content')).toBeTruthy();
    fireEvent.click(getById('category-306'));
  });

  act(() => {
    expect(getAllByClass('checkbox-card active lg')).toHaveLength(1);
    fireEvent.click(queryByText('Add categories'));
  });

  act(() => {
    expect(queryByText(/You haven’t selected any category yet/)).not.toBeInTheDocument();
    expect(getAllByClass('checkbox-card no-hover lg')).toHaveLength(1);
  });
});

it('renders Categories component with empty state', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText('Categories')).toBeInTheDocument();
  expect(
    getByText(/Adding areas or themes will help you categorize your project within the program/)
  ).toBeInTheDocument();
  expect(getByText(/You haven’t selected any category yet/)).toBeInTheDocument();
  expect(
    getByText(/Make your project easier to find by organizing it within a category/)
  ).toBeInTheDocument();
  expect(getByText(/Select categories/)).toBeInTheDocument();
});

it('renders Categories component with categories list', () => {
  const { getByClass, getByText, queryByText } = render(<WithSelectedCategories />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(getByText('Categories')).toBeInTheDocument();
  expect(
    getByText(/Adding areas or themes will help you categorize your project within the program/)
  ).toBeInTheDocument();
  expect(queryByText(/You haven’t selected any category yet/)).not.toBeInTheDocument();
  expect(
    queryByText(/Make your project easier to find by organizing it within a category/)
  ).not.toBeInTheDocument();
  expect(getByText(/Select categories/)).toBeInTheDocument();
});

it('renders Categories click open modal and remove 1 category', () => {
  const { getByClass, getAllByClass, getById, getByTestId, queryByText } = render(
    <WithSelectedCategories />
  );

  fireEvent.click(getByTestId('edit-categories'));

  act(() => {
    expect(getByClass('modal-content')).toBeTruthy();
    fireEvent.click(getById('category-275'));
  });

  act(() => {
    expect(getAllByClass(/active/)).toHaveLength(2);
    fireEvent.click(queryByText('Add categories'));
  });

  act(() => {
    expect(queryByText(/You haven’t selected any category yet/)).not.toBeInTheDocument();
    expect(getAllByClass('checkbox-card no-hover lg')).toHaveLength(2);
  });
});
