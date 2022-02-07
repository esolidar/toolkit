import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Clearable as ClearableStory,
  Searchable as SearchableStory,
  Disabled as DisabledStory,
  WithInputLabel as WithInputLabelStory,
  WithHelperText as WithHelperTextStory,
  WithError as WithErrorStory,
  WithPlaceholderIcon as WithPlaceholderIconStory,
  WithoutOptions as WithoutOptionStory,
} from '../Select.stories';

const Default = composeStory(DefaultStory, Meta);
const Clearable = composeStory(ClearableStory, Meta);
const Searchable = composeStory(SearchableStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const WithInputLabel = composeStory(WithInputLabelStory, Meta);
const WithHelperText = composeStory(WithHelperTextStory, Meta);
const WithError = composeStory(WithErrorStory, Meta);
const WithPlaceholderIcon = composeStory(WithPlaceholderIconStory, Meta);
const WithoutOptions = composeStory(WithoutOptionStory, Meta);
window.alert = jest.fn();

it('renders select with default props', () => {
  const { getByText, queryByClass, queryAllByClass, getByClass, queryAllByText, queryAllByTestId } =
    render(<Default />);

  expect(getByText('Select an option')).toBeInTheDocument();
  expect(getByClass(/esolidar-select__dropdown-indicator/)).toBeInTheDocument();

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

it('renders select with option to clear selected value', () => {
  const { getByText, queryByClass, getByClass } = render(<Clearable />);

  const toggle = queryByClass(/esolidar-select__control/);
  userEvent.click(toggle);

  const firstOption = getByText('This enabled option has no icon nor description');
  userEvent.click(firstOption);

  expect(getByText('This enabled option has no icon nor description')).toBeInTheDocument();

  const clearIcon = getByClass(/esolidar-select__clear-indicator/);
  userEvent.click(clearIcon);

  expect(getByText('Select an option')).toBeInTheDocument();
});

it('renders select with option to search an option', () => {
  const { getByText, queryByClass, getByClass } = render(<Searchable />);

  const toggle = queryByClass(/esolidar-select__control/);
  userEvent.click(toggle);

  const input = getByClass('esolidar-select__input');
  userEvent.type(input, 'first');

  expect(getByClass(/esolidar-select__menu /)).toBeInTheDocument();
  expect(getByText('This enabled option has no icon nor description')).toBeInTheDocument();
});

it('renders select disabled', () => {
  const { getByClass } = render(<Disabled />);

  expect(getByClass(/esolidar-select--is-disabled/)).toBeInTheDocument();
});

it('renders select with input label', () => {
  const { getByText } = render(<WithInputLabel />);

  expect(getByText('I am the input label')).toBeInTheDocument();
  expect(getByText('(optional)')).toBeInTheDocument();
});

it('renders select with helper text', () => {
  const { getByText } = render(<WithHelperText />);

  expect(getByText('I am an helper text')).toBeInTheDocument();
});

it('renders select with error', () => {
  const { getByText, getByClass } = render(<WithError />);

  expect(getByClass(/esolidar-select-error/)).toBeInTheDocument();
  expect(getByText('Required field')).toBeInTheDocument();
});

it('renders select with placeholder icon', () => {
  const { getByText, getByTestId } = render(<WithPlaceholderIcon />);

  expect(getByTestId('search-icon')).toBeInTheDocument();
  expect(getByText('Select an option')).toBeInTheDocument();
});

it('renders select with options', () => {
  const { getByText, queryByClass } = render(<WithoutOptions />);

  const toggle = queryByClass(/esolidar-select__control/);
  userEvent.click(toggle);

  expect(getByText('There are no options')).toBeInTheDocument();
});
