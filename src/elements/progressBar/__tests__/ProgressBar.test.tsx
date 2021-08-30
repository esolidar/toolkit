import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, waitFor, screen } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Label as LabelStory,
  Minimal as MinimalStory,
  Percent as PercentStory,
} from '../ProgressBar.stories';

const Default = composeStory(DefaultStory, Meta);
const Label = composeStory(LabelStory, Meta);
const Minimal = composeStory(MinimalStory, Meta);
const Percent = composeStory(PercentStory, Meta);

test('renders ProgressBar default', async () => {
  render(<Default />);

  await waitFor(() => {
    const progressBarComponent = screen.getByTestId('progress-bar');
    const bar = screen.getByTestId('bar');
    const progressBarPercent = screen.getByTestId('progress-bar-percent');
    const progressBarLabels = screen.getByTestId('progress-bar-labels');
    expect(progressBarComponent).toBeInTheDocument();
    expect(bar).toBeInTheDocument();
    expect(progressBarPercent).toBeInTheDocument();
    expect(progressBarLabels).toBeInTheDocument();
  });
});

test('renders ProgressBar Label', async () => {
  render(<Label />);

  await waitFor(() => {
    const progressBarComponent = screen.getByTestId('progress-bar');
    const bar = screen.getByTestId('bar');
    const progressBarLabels = screen.getByTestId('progress-bar-labels');
    expect(progressBarComponent).toBeInTheDocument();
    expect(bar).toBeInTheDocument();
    expect(progressBarLabels).toBeInTheDocument();
  });
});

test('renders ProgressBar Minimal', async () => {
  render(<Minimal />);

  await waitFor(() => {
    const progressBarComponent = screen.getByTestId('progress-bar');
    const bar = screen.getByTestId('bar');
    expect(progressBarComponent).toBeInTheDocument();
    expect(bar).toBeInTheDocument();
  });
});

test('renders ProgressBar Percent', async () => {
  render(<Percent />);

  await waitFor(() => {
    const progressBarComponent = screen.getByTestId('progress-bar');
    const bar = screen.getByTestId('bar');
    const progressBarPercent = screen.getByTestId('progress-bar-percent');
    expect(progressBarComponent).toBeInTheDocument();
    expect(bar).toBeInTheDocument();
    expect(progressBarPercent).toBeInTheDocument();
  });
});
