import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Open as OpenStory, Close as CloseStory } from '../Wizard.stories';

const Open = composeStory(OpenStory, Meta);
const Close = composeStory(CloseStory, Meta);

it('renders Wizard default component open', () => {
  const { getByClass } = render(<Open />);

  expect(getByClass('wizard open')).toBeTruthy();
  expect(getByClass('wizard__header')).toBeTruthy();
  expect(getByClass('wizard__paginator')).toBeTruthy();
  expect(getByClass('container wizard__body')).toBeTruthy();
});

it('renders Wizard default component closed', () => {
  const { getByClass } = render(<Close />);

  expect(getByClass('wizard closed')).toBeTruthy();
});
