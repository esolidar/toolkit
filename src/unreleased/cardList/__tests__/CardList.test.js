import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultListTitle,
  WithoutTitleAndSubtitle as WithoutTitleAndSubtitleStory,
  WithButton as WithButtonStory,
} from '../CardList.stories';

const Default = composeStory(DefaultListTitle, Meta);
const WithoutTitleAndSubtitle = composeStory(WithoutTitleAndSubtitleStory, Meta);
const WithButton = composeStory(WithButtonStory, Meta);

it('renders list crowdfunding with title and Subtitle', () => {
  const { getAllByClass, getByClass } = render(<Default />);

  expect(getByClass('component-title__main--h1')).toHaveTextContent('Initiatives');
  expect(getAllByClass('component-title__subtitle')).toBeTruthy();
  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('component-list-footer')).toBeTruthy();
  expect(getByClass('component-list-footer-results')).toHaveTextContent('4 Initiatives');
});

it('renders list crowdfunding without title and Subtitle', () => {
  const { getByClass, getAllByClass } = render(<WithoutTitleAndSubtitle />);

  expect(getByClass('component-title__main--h1')).toHaveTextContent('');
  expect(getByClass('component-title__subtitle')).toHaveTextContent('');
  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getByClass('component-list-footer')).toBeTruthy();
  expect(getByClass('component-list-footer-results')).toHaveTextContent('2 Crowdfundings');
});

it('renders list crowdfunding with button See All', () => {
  const { getByClass, getAllByClass, queryByTestId } = render(<WithButton />);

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(queryByTestId('list-footer')).not.toBeInTheDocument();
  expect(getByClass(/cardList__button/)).toBeTruthy();
});
