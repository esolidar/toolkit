import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  UnChecked as UnCheckedStory,
  Disable as DisableStory,
  WithIcons as WithIconsStory,
  Neutral as NeutralStory,
} from '../Toggle.stories';

const Default = composeStory(DefaultStory, Meta);
const UnChecked = composeStory(UnCheckedStory, Meta);
const Disable = composeStory(DisableStory, Meta);
const WithIcons = composeStory(WithIconsStory, Meta);
const Neutral = composeStory(NeutralStory, Meta);

it('renders Toggle', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('toggle')).toBeTruthy();
});

it('renders Toggle Checked', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass(/react-toggle--checked/)).toBeTruthy();
  expect(getByClass('react-toggle-screenreader-only')).toHaveAttribute('value', 'A');
});

it('renders Toggle unChecked', () => {
  const { queryByClass } = render(<UnChecked />);

  expect(queryByClass(/react-toggle--checked/)).not.toBeTruthy();
});

it('renders Toggle disable', () => {
  const { getByClass } = render(<Disable />);

  expect(getByClass(/react-toggle--disabled/)).toBeTruthy();
});

it('renders Toggle with icons', () => {
  const { getByClass } = render(<WithIcons />);

  expect(getByClass('react-toggle-track-x')).toBeTruthy();
});

it('renders Toggle neutral', () => {
  const { getByClass } = render(<Neutral />);

  expect(getByClass(/toggle__neutral/)).toBeTruthy();
});
