import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PlainText as PlainTextStory,
  Icon as IconStory,
  FullWidth as FullWidthStory,
  Button as ButtonStory,
} from '../Menu.stories';

const Default = composeStory(DefaultStory, Meta);
const PlainText = composeStory(PlainTextStory, Meta);
const Icon = composeStory(IconStory, Meta);
const FullWidth = composeStory(FullWidthStory, Meta);
const Button = composeStory(ButtonStory, Meta);

it('renders Menu default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByClass(/badge__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Menu PlainText', () => {
  const { getByTestId, getByText, getByClass } = render(<PlainText />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByClass(/badge__success/)).toBeInTheDocument();
  expect(getByText('Plaintext')).toBeInTheDocument();
});

it('renders Menu Icon', () => {
  const { getByTestId, getByText, getByClass } = render(<Icon />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByTestId('badge-icon')).toBeInTheDocument();
  expect(getByClass(/badge__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Menu FullWidth', () => {
  const { getByTestId, getByText, getByClass } = render(<FullWidth />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByClass(/full-width/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Menu ButtonClick', () => {
  const { getByTestId, getByText, getByClass } = render(<Button />);

  expect(getByTestId('badge-button')).toBeInTheDocument();
  expect(getByClass(/btn-badge/)).toBeInTheDocument();
  expect(getByText('Button')).toBeInTheDocument();
});
