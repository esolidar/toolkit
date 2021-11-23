import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PlainText as PlainTextStory,
  Icon as IconStory,
  FullWidth as FullWidthStory,
  Button as ButtonStory,
} from '../Sidebar.stories';

const Default = composeStory(DefaultStory, Meta);
const PlainText = composeStory(PlainTextStory, Meta);
const Icon = composeStory(IconStory, Meta);
const FullWidth = composeStory(FullWidthStory, Meta);
const Button = composeStory(ButtonStory, Meta);

it('renders Sidebar default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  expect(getByClass(/sidebar__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Sidebar PlainText', () => {
  const { getByTestId, getByText, getByClass } = render(<PlainText />);

  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  expect(getByClass(/sidebar__success/)).toBeInTheDocument();
  expect(getByText('Plaintext')).toBeInTheDocument();
});

it('renders Sidebar Icon', () => {
  const { getByTestId, getByText, getByClass } = render(<Icon />);

  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  expect(getByTestId('sidebar-icon')).toBeInTheDocument();
  expect(getByClass(/sidebar__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Sidebar FullWidth', () => {
  const { getByTestId, getByText, getByClass } = render(<FullWidth />);

  expect(getByTestId('sidebar-component')).toBeInTheDocument();
  expect(getByClass(/full-width/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Sidebar ButtonClick', () => {
  const { getByTestId, getByText, getByClass } = render(<Button />);

  expect(getByTestId('sidebar-button')).toBeInTheDocument();
  expect(getByClass(/btn-sidebar/)).toBeInTheDocument();
  expect(getByText('Button')).toBeInTheDocument();
});
