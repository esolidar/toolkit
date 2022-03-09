import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, Onboarding as OnboardingStory } from '../Tooltip.stories';

const Default = composeStory(DefaultStory, Meta);
const Onboarding = composeStory(OnboardingStory, Meta);

it('renders Tooltip default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByTestId('tooltipOverlay')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Hover here'));
  expect(getByClass(/tooltip--default /)).toBeInTheDocument();
  expect(getByText('Default')).toBeInTheDocument();
});

it('renders Tooltip Onboarding', () => {
  const { getByTestId, getByText, getByClass } = render(<Onboarding />);

  expect(getByTestId('tooltipOverlay')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Hover here'));
  expect(getByClass(/tooltip--onboarding /)).toBeInTheDocument();
  expect(getByText('Start here!')).toBeInTheDocument();
});
