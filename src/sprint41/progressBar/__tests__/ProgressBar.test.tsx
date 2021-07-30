import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import Meta, {
  Default as DefaultStory,
  Minimal as MinimalStory,
  HideRaisedOf as hideRaisedOfStory,
} from '../ProgressBar.stories';

const Default = composeStory(DefaultStory, Meta);
const Minimal = composeStory(MinimalStory, Meta);
const HideRaisedOf = composeStory(hideRaisedOfStory, Meta);

it('renders ProgressBar default', () => {
  const { getByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <Default />
    </IntlProvider>
  );

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(getByTestId('progress-bar-labels')).toBeInTheDocument();
  expect(getByTestId('goal-label')).toBeInTheDocument();
});

it('renders ProgressBar Minimal', () => {
  const { getByTestId, queryByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <Minimal />
    </IntlProvider>
  );

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(queryByTestId('progress-bar-labels')).not.toBeInTheDocument();
  expect(queryByTestId('goal-label')).not.toBeInTheDocument();
});

it('renders ProgressBar hideRaisedOf', () => {
  const { getByTestId, queryByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <HideRaisedOf />
    </IntlProvider>
  );

  expect(getByTestId('progress-bar')).toBeInTheDocument();
  expect(getByTestId('bar')).toBeInTheDocument();
  expect(getByTestId('progress-bar-labels')).toBeInTheDocument();
  expect(queryByTestId('goal-label')).not.toBeInTheDocument();
});
