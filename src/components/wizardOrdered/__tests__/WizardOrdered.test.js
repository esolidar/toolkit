import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, screen, fireEvent } from '../../../../__customQueries__/test-utils';
import Meta, { Open as OpenStory } from '../WizardOrdered.stories';

const Open = composeStory(OpenStory, Meta);

it('renders WizardOrdered default component open', () => {
  const { getByClass, getAllByClass, getAllByTestId } = render(<Open />);

  expect(getByClass('fullscreen-modal open')).toBeTruthy();
  expect(getByClass('wizard-ordered-progress')).toBeTruthy();
  expect(getByClass('wizard-ordered-progress-active')).toBeTruthy();
  expect(getByClass('wizard-ordered')).toBeTruthy();
  expect(getAllByClass('page')).toHaveLength(1);
  expect(getAllByClass(/page-after/)).toHaveLength(9);
  expect(getAllByTestId('click-continue')).toHaveLength(9);
});

it('renders WizardOrdered click-next', () => {
  const { getAllByClass, getAllByTestId } = render(<Open />);

  expect(getAllByTestId('click-next')).toHaveLength(1);
  expect(getAllByTestId('click-prev')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('click-next'));
  expect(getAllByClass(/page-before/)).toHaveLength(1);
  expect(getAllByClass(/page-after/)).toHaveLength(8);
});

it('renders WizardOrdered click-prev', () => {
  const { getAllByClass, getAllByTestId } = render(<Open />);

  expect(getAllByTestId('click-next')).toHaveLength(1);
  expect(getAllByTestId('click-prev')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('click-next'));
  fireEvent.click(screen.getByTestId('click-next'));
  fireEvent.click(screen.getByTestId('click-next'));
  fireEvent.click(screen.getByTestId('click-prev'));
  expect(getAllByClass('esolidar-viewport size-xl centred')).toHaveLength(14);
  expect(getAllByClass(/page-before/)).toHaveLength(2);
  expect(getAllByClass(/page-after/)).toHaveLength(7);
});
