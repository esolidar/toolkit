import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  CustomButton as CustomButtonStory,
} from '../Dropdown.stories';

const Default = composeStory(DefaultStory, Meta);
const CustomButton = composeStory(CustomButtonStory, Meta);

it('renders dropdown menu when button is clicked', () => {
  const { getByText, queryByClass, queryByText, queryAllByClass } = render(<Default />);

  const toggle = queryByClass('btn-esolidar__icon');
  userEvent.click(toggle);

  const menu = queryByClass(/esolidar-dropdown__menu/);
  expect(menu).toBeInTheDocument();

  const options = queryAllByClass(/esolidar-dropdown__item /);
  expect(options).toHaveLength(3);

  const action = getByText('Action');
  expect(action).toBeInTheDocument();

  const iconDelete = queryAllByClass('icon-icon-delete');
  expect(iconDelete).not.toBeNull();

  const iconClock = queryAllByClass('icon-clock');
  expect(iconClock).not.toBeNull();

  const another = getByText('Another action');
  expect(another).toBeInTheDocument();

  const something = getByText('Something else');
  expect(something).toBeInTheDocument();

  const hidden = queryByText('hidden');
  expect(hidden).not.toBeInTheDocument();

  const divider = queryByClass(/dropdown-divider/);
  expect(divider).toBeInTheDocument();
});

it('renders custom  button', () => {
  const { getByTestId } = render(<CustomButton />);

  expect(getByTestId('customButton')).toBeInTheDocument();
});
