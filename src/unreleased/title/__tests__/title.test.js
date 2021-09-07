import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  TitleOnly as TitleOnlyStory,
  WithoutSupportUrl as WithoutSupportUrlStory,
  WithSubtitle as WithSubtitleStory,
} from '../title.stories';

const Default = composeStory(DefaultStory, Meta);
const TitleOnly = composeStory(TitleOnlyStory, Meta);
const WithoutSupportUrl = composeStory(WithoutSupportUrlStory, Meta);
const WithSubtitle = composeStory(WithSubtitleStory, Meta);

it('renders Title default component', () => {
  const { getAllByClass, getByClass } = render(<Default />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title-back')).toBeTruthy();
  expect(getAllByClass('icon-chevron-left')).toBeTruthy();

  expect(getAllByClass('component-title-h1')).toHaveLength(1);
  expect(getByClass('component-title-h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('component-title-supporting')).toHaveLength(1);
  expect(getAllByClass('component-title-supporting-href')).toHaveLength(1);
  expect(getByClass('component-title-supporting-href')).toHaveTextContent('Helpo');
});

it('renders Title only', () => {
  const { getAllByClass, getByClass } = render(<TitleOnly />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title-h1')).toHaveLength(1);
  expect(getByClass('component-title-h1')).toHaveTextContent('Crowdfunding title');
});

it('renders Title with subtitle', () => {
  const { getAllByClass, getByClass } = render(<WithSubtitle />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title-h1')).toHaveLength(1);
  expect(getByClass('component-title-h1')).toHaveTextContent('Crowdfunding title');
});

it('renders Title without support url', () => {
  const { getAllByClass, getByClass } = render(<WithoutSupportUrl />);

  expect(getAllByClass('component-title')).toBeTruthy();
  expect(getAllByClass('component-title-back')).toBeTruthy();
  expect(getAllByClass('icon-chevron-left')).toBeTruthy();

  expect(getAllByClass('component-title-h1')).toHaveLength(1);
  expect(getByClass('component-title-h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('component-title-supporting')).toBeTruthy();
  expect(getByClass('component-title-supporting-name')).toHaveTextContent('Joel Calheiros');
});
