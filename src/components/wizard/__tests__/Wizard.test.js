import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Open as OpenStory, Close as CloseStory } from '../Wizard.stories';

const Open = composeStory(OpenStory, Meta);
const Close = composeStory(CloseStory, Meta);

it('renders Wizard default component open', () => {
  const { getByClass } = render(<Open />);

  expect(getByClass('fullscreen-modal open')).toBeTruthy();
  expect(getByClass('wizard__header')).toBeTruthy();
  expect(getByClass('wizard__paginator')).toBeTruthy();
  expect(getByClass('esolidar-viewport size-xl centred wizard__body-with-paginator')).toBeTruthy();
});

it('renders Wizard default component closed', () => {
  const { getByClass } = render(<Close />);

  expect(getByClass('fullscreen-modal closed')).toBeTruthy();
});
