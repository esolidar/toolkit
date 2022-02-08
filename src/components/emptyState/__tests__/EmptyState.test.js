import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default, WithImage, WithIcon } from '../EmptyState.stories';

const DefaultComponent = composeStory(Default, Meta);
const WithImageComponent = composeStory(WithImage, Meta);
const WithIconComponent = composeStory(WithIcon, Meta);

it('renders EmptyState default component', () => {
  const { getByClass } = render(<DefaultComponent />);

  expect(getByClass('empty-state')).toBeTruthy();
  expect(getByClass('empty-state__title')).toBeTruthy();
  expect(getByClass('empty-state__title')).toHaveTextContent(
    'You haven’t set up your accelerator... yet!'
  );
  expect(getByClass('empty-state__body')).toBeTruthy();
  expect(getByClass('empty-state__body')).toHaveTextContent(
    'Create your program and start receiving project applications'
  );
  expect(getByClass('empty-state__buttons')).toBeTruthy();
});

it('renders EmptyState DefaultComponent without border', () => {
  const { getByClass } = render(<DefaultComponent />);

  expect(getByClass(/esolidar-container/)).toHaveStyle('border-width: 0px');
});

it('renders EmptyState WithImageComponent component', () => {
  const { getByClass } = render(<WithImageComponent />);

  expect(getByClass('empty-state')).toBeTruthy();
  expect(getByClass('empty-state__image')).toBeTruthy();
});

it('renders EmptyState WithIconComponent component', () => {
  const { getByClass } = render(<WithIconComponent />);

  expect(getByClass('empty-state')).toBeTruthy();
  expect(getByClass('empty-state__icon')).toBeTruthy();
});
