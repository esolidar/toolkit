import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  SimpleText as SimpleTextStory,
  Default as DefaultStory,
  OnClick as OnClickStory,
  Collapsed as CollapsedStory,
} from '../Menu.stories';

const SimpleText = composeStory(SimpleTextStory, Meta);
const Default = composeStory(DefaultStory, Meta);
const OnClick = composeStory(OnClickStory, Meta);
const Collapsed = composeStory(CollapsedStory, Meta);

it('renders SimpleText default', () => {
  const { getByClass, queryByRole } = render(<SimpleText />);

  expect(getByClass('menu__list')).toBeInTheDocument();
  expect(getByClass('menu__listItem')).toBeInTheDocument();
  expect(getByClass('menu__item')).toBeInTheDocument();
  expect(
    queryByRole('a', {
      type: 'media_type',
    })
  ).not.toBeInTheDocument();
  expect(
    queryByRole('button', {
      type: 'button',
    })
  ).not.toBeInTheDocument();
});

it('renders Default Menu', () => {
  const { getByClass, getAllByClass, queryByRole, queryAllByRole } = render(<Default />);

  expect(getByClass('menu__list')).toBeInTheDocument();
  expect(getAllByClass('menu__listItem')).toBeTruthy();
  expect(getByClass('menu__item menu__item--notification')).toBeInTheDocument();
  expect(getAllByClass('icon-component')).toHaveLength(4);
  expect(getByClass(/menu__listItem--separator/)).toBeInTheDocument();
  expect(getByClass(/menu__item--separator/)).toBeInTheDocument();
  expect(getByClass(/menu__item--active/)).toBeInTheDocument();
  expect(
    queryAllByRole('a', {
      type: 'media_type',
    })
  ).toBeTruthy();
  expect(
    queryByRole('button', {
      type: 'button',
    })
  ).not.toBeInTheDocument();
});

it('renders onClick Menu', () => {
  const { getByClass, getAllByClass, queryAllByRole, queryByRole } = render(<OnClick />);

  expect(getByClass('menu__list')).toBeInTheDocument();
  expect(getAllByClass('menu__listItem')).toBeTruthy();
  expect(getByClass('menu__item menu__item--notification')).toBeInTheDocument();
  expect(getAllByClass('icon-component')).toHaveLength(3);
  expect(
    queryByRole('a', {
      type: 'media_type',
    })
  ).not.toBeInTheDocument();
  expect(
    queryAllByRole('button', {
      type: 'button',
    })
  ).toBeTruthy();
});

it('renders Collapsed Menu', () => {
  const { getByClass, getAllByClass } = render(<Collapsed />);

  expect(getByClass('menu__list')).toBeInTheDocument();
  expect(getAllByClass('menu__listItem')).toBeTruthy();
  expect(getByClass('menu__item menu__item--notification')).toBeInTheDocument();
});
