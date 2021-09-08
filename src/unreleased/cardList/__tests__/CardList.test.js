import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultListTitle,
  WithoutTitleAndSubtitle as WithoutTitleAndSubtitleStory,
  SeeAll as SeeAllStory,
} from '../CardList.stories';

const Default = composeStory(DefaultListTitle, Meta);
const WithoutTitleAndSubtitle = composeStory(WithoutTitleAndSubtitleStory, Meta);
const SeeAll = composeStory(SeeAllStory, Meta);

it('renders list crowdfunding with title and Subtitle', () => {
  const { getAllByClass, getByClass } = render(<Default />);

  expect(getByClass('component-title-h1')).toHaveTextContent('Initiatives');
  expect(getAllByClass('component-title-subtitle')).toBeTruthy();
  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('component-list-footer')).toBeTruthy();
});

it('renders list crowdfunding without title and Subtitle', () => {
  const { getByClass } = render(<WithoutTitleAndSubtitle />);

  expect(getByClass('component-title-h1')).toHaveTextContent('');
  expect(getByClass('component-title-subtitle')).toHaveTextContent('');
  expect(getByClass('card-component')).toBeTruthy();
  expect(getByClass('component-list-footer')).toBeTruthy();
});

it('renders list crowdfunding with button See All', () => {
  const { getByClass, queryByTestId } = render(<SeeAll />);

  expect(getByClass('card-component')).toBeTruthy();
  expect(queryByTestId('list-footer')).not.toBeInTheDocument();
  expect(getByClass('cardList__see-all text-center')).toBeTruthy();
});
