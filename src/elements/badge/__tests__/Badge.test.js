import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PlainText as PlainTextStory,
  Icon as IconStory,
  FullWidth as FullWidthStory,
  Button as ButtonStory,
} from '../Badge.stories';

const Default = composeStory(DefaultStory, Meta);
const PlainText = composeStory(PlainTextStory, Meta);
const Icon = composeStory(IconStory, Meta);
const FullWidth = composeStory(FullWidthStory, Meta);
const Button = composeStory(ButtonStory, Meta);

it('renders Badge default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByClass(/type-default__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Badge PlainText', () => {
  const { getByTestId, getByText, getByClass } = render(<PlainText />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByClass(/type-default__success/)).toBeInTheDocument();
  expect(getByText('Plaintext')).toBeInTheDocument();
});

it('renders Badge Icon', () => {
  const { getByTestId, getByText, getByClass } = render(<Icon />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByTestId('badge-icon')).toBeInTheDocument();
  expect(getByClass(/type-default__default/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Badge FullWidth', () => {
  const { getByTestId, getByText, getByClass } = render(<FullWidth />);

  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByClass(/full-width/)).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Badge ButtonClick', () => {
  const { getByTestId, getByText, getByClass } = render(<Button />);

  expect(getByTestId('badge-button')).toBeInTheDocument();
  expect(getByClass(/btn-badge/)).toBeInTheDocument();
  expect(getByText('Button')).toBeInTheDocument();
});
