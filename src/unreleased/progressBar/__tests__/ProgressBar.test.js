import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Crowdfunding as CrowdfundingStory,
  Minimal as MinimalStory,
  HideRaisedOf as hideRaisedOfStory,
} from '../ProgressBar.stories';

const Default = composeStory(DefaultStory, Meta);
const Crowdfunding = composeStory(CrowdfundingStory, Meta);
const Minimal = composeStory(MinimalStory, Meta);
const HideRaisedOf = composeStory(hideRaisedOfStory, Meta);

it('renders ProgressBar default', () => {
  const { getByTestId } = render(<Default />);

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(getByTestId('progress-bar-labels')).toBeInTheDocument();
  expect(getByTestId('goal-label')).toBeInTheDocument();
});

it('renders ProgressBar crowdfunding', () => {
  const { getByTestId, getByText, getByClass } = render(<Crowdfunding />);

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(getByTestId('progress-bar-labels')).toBeInTheDocument();
  expect(getByTestId('goal-label')).toBeInTheDocument();
  expect(getByText('0 donors')).toBeInTheDocument();
  expect(getByClass('time-left')).toBeInTheDocument();
  expect(getByClass('countdown-days-left-values')).toBeInTheDocument();
});

it('renders ProgressBar Minimal', () => {
  const { getByTestId, queryByTestId } = render(<Minimal />);

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(queryByTestId('progress-bar-labels')).not.toBeInTheDocument();
  expect(queryByTestId('goal-label')).not.toBeInTheDocument();
});

it('renders ProgressBar hideRaisedOf', () => {
  const { getByTestId, queryByTestId } = render(<HideRaisedOf />);

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(getByTestId('progress-bar-labels')).toBeInTheDocument();
  expect(queryByTestId('goal-label')).not.toBeInTheDocument();
});
