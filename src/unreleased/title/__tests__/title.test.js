import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  TitleOnly as TitleOnlyStory,
  WithoutSupportUrl as WithoutSupportUrlStory,
  WithoutGoBackFunc as WithoutGoBackFuncStory,
  WithSubtitle as WithSubtitleStory,
  TitleWithIcon as TitleWithIconStory,
  TitleWithIconDisabled as TitleWithIconDisabledStory,
  WithRating as WithRatingStory,
} from '../title.stories';

const Default = composeStory(DefaultStory, Meta);
const TitleOnly = composeStory(TitleOnlyStory, Meta);
const WithoutSupportUrl = composeStory(WithoutSupportUrlStory, Meta);
const WithoutGoBackFunc = composeStory(WithoutGoBackFuncStory, Meta);
const WithSubtitle = composeStory(WithSubtitleStory, Meta);
const TitleWithIcon = composeStory(TitleWithIconStory, Meta);
const TitleWithIconDisabled = composeStory(TitleWithIconDisabledStory, Meta);
const WithRating = composeStory(WithRatingStory, Meta);

it('renders Title default component', () => {
  const { getAllByClass, getByClass } = render(<Default />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(
    getAllByClass('component-title__back client__primary--color client__primary--color-hover')
  ).toBeTruthy();
  expect(getAllByClass('icon-chevron-left')).toBeTruthy();

  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('component-title__supporting')).toHaveLength(1);
  expect(
    getAllByClass('component-title__supporting-href client__primary--color-hover')
  ).toHaveLength(1);
  expect(
    getByClass('component-title__supporting-href client__primary--color-hover')
  ).toHaveTextContent('Helpo');
});

it('renders Title only', () => {
  const { getAllByClass, getByClass } = render(<TitleOnly />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
});

it('renders Title with subtitle', () => {
  const { getAllByClass, getByClass } = render(<WithSubtitle />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
});

it('renders Title without support url', () => {
  const { getAllByClass, getByClass } = render(<WithoutSupportUrl />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(
    getAllByClass('component-title__back client__primary--color client__primary--color-hover')
  ).toBeTruthy();
  expect(getAllByClass('icon-chevron-left')).toBeTruthy();

  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('component-title__supporting')).toBeTruthy();
  expect(getByClass('component-title__supporting-name')).toHaveTextContent('Joel Calheiros');
});

it('renders Title Go back Function', () => {
  const { getAllByClass, getByClass, getByTestId } = render(<WithoutGoBackFunc />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
  expect(getByTestId('component-title-button')).toBeInTheDocument();
});

it('renders Title with Icon', () => {
  const { getAllByClass, getByClass } = render(<TitleWithIcon />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('icon-external-link')).toBeTruthy();
});

it('renders Title with Icon Disabled', () => {
  const { getAllByClass, getByClass } = render(<TitleWithIconDisabled />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('icon-external-link')).toBeTruthy();
  expect(getAllByClass('component-title__main--icon--disabled')).toBeTruthy();
});

it('renders Title WithRating', () => {
  const { getAllByClass, getByClass, getByText } = render(<WithRating />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title__main--h1')).toHaveLength(1);
  expect(getByClass('component-title__main--rating')).toBeInTheDocument();
  expect(getByClass(/icon-component/)).toBeInTheDocument();
  expect(getByText('4 / 5')).toBeInTheDocument();
});
