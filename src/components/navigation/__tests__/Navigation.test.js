import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PlainText as PlainTextStory,
  Icon as IconStory,
  FullWidth as FullWidthStory,
  Button as ButtonStory,
} from '../Navigation.stories';

const Default = composeStory(DefaultStory, Meta);
const PlainText = composeStory(PlainTextStory, Meta);
const Icon = composeStory(IconStory, Meta);
const FullWidth = composeStory(FullWidthStory, Meta);
const Button = composeStory(ButtonStory, Meta);

it('renders Navigation default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByTestId('navigation-component')).toBeInTheDocument();
  expect(getByClass(/navigation__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Navigation PlainText', () => {
  const { getByTestId, getByText, getByClass } = render(<PlainText />);

  expect(getByTestId('navigation-component')).toBeInTheDocument();
  expect(getByClass(/navigation__success/)).toBeInTheDocument();
  expect(getByText('Plaintext')).toBeInTheDocument();
});

it('renders Navigation Icon', () => {
  const { getByTestId, getByText, getByClass } = render(<Icon />);

  expect(getByTestId('navigation-component')).toBeInTheDocument();
  expect(getByTestId('navigation-icon')).toBeInTheDocument();
  expect(getByClass(/navigation__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Navigation FullWidth', () => {
  const { getByTestId, getByText, getByClass } = render(<FullWidth />);

  expect(getByTestId('navigation-component')).toBeInTheDocument();
  expect(getByClass(/full-width/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Navigation ButtonClick', () => {
  const { getByTestId, getByText, getByClass } = render(<Button />);

  expect(getByTestId('navigation-button')).toBeInTheDocument();
  expect(getByClass(/btn-navigation/)).toBeInTheDocument();
  expect(getByText('Button')).toBeInTheDocument();
});
