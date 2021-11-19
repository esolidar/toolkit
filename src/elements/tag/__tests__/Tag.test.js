import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PlainText as PlainTextStory,
  RightIcon as RightIconStory,
  LeftImage as LeftImageStory,
  LeftIcon as LeftIconStory,
} from '../Tag.stories';

const Default = composeStory(DefaultStory, Meta);
const PlainText = composeStory(PlainTextStory, Meta);
const RightIcon = composeStory(RightIconStory, Meta);
const LeftImage = composeStory(LeftImageStory, Meta);
const LeftIcon = composeStory(LeftIconStory, Meta);

it('renders Tag default', () => {
  const { getByText, getByClass } = render(<Default />);

  expect(getByClass('tag-component')).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders Tag PlainText', () => {
  const { getByText, getByClass } = render(<PlainText />);

  expect(getByClass('tag-component')).toBeInTheDocument();
  expect(getByText('Tag')).toBeInTheDocument();
});

it('renders Tag RightIcon', () => {
  const { getByText, getByClass } = render(<RightIcon />);

  expect(getByClass('tag-component__item-right-icon')).toBeInTheDocument();
  expect(getByText('Tag')).toBeInTheDocument();
});

it('renders Tag LeftImage', () => {
  const { getByText, getByTestId } = render(<LeftImage />);

  expect(getByTestId('left-image')).toBeInTheDocument();
  expect(getByText('John Doe')).toBeInTheDocument();
});

it('renders Tag LeftIcon', () => {
  const { getByText, getByTestId } = render(<LeftIcon />);

  expect(getByTestId('left-icon')).toBeInTheDocument();
  expect(getByText('Acme Corporation')).toBeInTheDocument();
});
