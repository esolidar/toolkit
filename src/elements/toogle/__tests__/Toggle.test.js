import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Disable as DisableStory } from '../Toggle.stories';

const Default = composeStory(DefaultStory, Meta);
const Disable = composeStory(DisableStory, Meta);

it('renders Toggle', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('toggle')).toBeTruthy();
});

it('renders Toggle Checked', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass(/react-toggle--checked/)).toBeTruthy();
});

it('renders Toggle disable', () => {
  const { getByClass } = render(<Disable />);

  expect(getByClass(/react-toggle--disabled/)).toBeTruthy();
});
