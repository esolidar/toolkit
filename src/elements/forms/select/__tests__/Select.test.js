import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Select.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders select with default props', () => {
  const { getByText, queryByClass, queryAllByClass, getByClass, queryAllByText, queryAllByTestId } =
    render(<Default />);
  expect(getByText('Select an option')).toBeInTheDocument();
  expect(getByClass(/esolidar-select__indicators/)).toBeInTheDocument();

  const toggle = queryByClass(/esolidar-select__control/);
  userEvent.click(toggle);

  expect(getByClass(/esolidar-select__menu /)).toBeInTheDocument();
  expect(queryAllByClass('esolidar-select__option')).toHaveLength(3);
  expect(
    queryAllByClass('esolidar-select__option esolidar-select__option--is-disabled')
  ).toHaveLength(3);
  expect(getByText('This enabled option has no icon nor description')).toBeInTheDocument();
  expect(getByText('This enabled option has an icon')).toBeInTheDocument();
  expect(getByText('This enabled option has an icon and description')).toBeInTheDocument();
  expect(getByText('This disabled option has no icon nor description')).toBeInTheDocument();
  expect(getByText('This disabled option has an icon and description')).toBeInTheDocument();
  expect(queryAllByTestId('PublicBold')).toHaveLength(2);
  expect(queryAllByTestId('Lock')).toHaveLength(2);
  expect(queryAllByText('Only visible to Acme Inc admins')).toHaveLength(2);

  const firstOption = getByText('This enabled option has no icon nor description');
  userEvent.click(firstOption);

  expect(queryByClass(/esolidar-select__menu /)).not.toBeInTheDocument();
  expect(getByText('This enabled option has no icon nor description')).toBeInTheDocument();
});
