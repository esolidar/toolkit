import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent, waitFor } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Transparent as TransparenttStory,
} from '../DropdownLabelGroup.stories';

const Default = composeStory(DefaultStory, Meta);
const Transparent = composeStory(TransparenttStory, Meta);

it('renders DropdownLabelGroup default', () => {
  const { getByText, getByClass, queryByClass } = render(<Default />);

  expect(getByClass('DropdownLabelGroup')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__prepend')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__label-text')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__dropdown')).toBeInTheDocument();
  expect(getByClass('esolidar-dropdown dropdown')).toBeInTheDocument();
  expect(getByClass('esolidar-dropdown__toggle')).toBeInTheDocument();
  expect(getByClass('icon-component')).toBeInTheDocument();
  expect(getByText('345 cUSD')).toBeInTheDocument();
  expect(queryByClass(/esolidar-dropdown__menu/)).not.toBeInTheDocument();
});

it('renders DropdownLabelGroup transparent', () => {
  const { getByText, getByClass, queryByClass } = render(<Transparent />);

  expect(getByClass('DropdownLabelGroup transparent')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__prepend')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__label-text')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__dropdown')).toBeInTheDocument();
  expect(getByClass('esolidar-dropdown dropdown')).toBeInTheDocument();
  expect(getByClass('esolidar-dropdown__toggle')).toBeInTheDocument();
  expect(getByClass('icon-component')).toBeInTheDocument();
  expect(getByText('345 cUSD')).toBeInTheDocument();
  expect(queryByClass(/esolidar-dropdown__menu/)).not.toBeInTheDocument();
});

it('renders DropdownLabelGroup open dropdown', async () => {
  const { getByText, getByClass, getAllByClass } = render(<Default />);

  expect(getByClass('DropdownLabelGroup')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__prepend')).toBeInTheDocument();
  expect(getByClass('DropdownLabelGroup__dropdown')).toBeInTheDocument();
  const toggle = getByClass('esolidar-dropdown__toggle');
  expect(toggle).toBeInTheDocument();
  fireEvent.click(toggle);

  await waitFor(() => {
    expect(getByClass(/esolidar-dropdown__menu/)).toBeInTheDocument();
    expect(getAllByClass('icon-component')).toHaveLength(2);
    expect(getByText('Disconect')).toBeInTheDocument();
  });
});
