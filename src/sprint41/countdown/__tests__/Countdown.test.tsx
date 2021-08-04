import React from 'react';
import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import Meta, {
  CrowdfundingOneMinuteLeftToStart as CrowdfundingStory,
  AuctionOneMinuteLeftToStart as AuctionStory,
} from '../Countdown.stories';
import { render } from '../../../../__customQueries__/test-utils';

const Crowdfunding = composeStory(CrowdfundingStory, Meta);
const Auction = composeStory(AuctionStory, Meta);

jest.useFakeTimers();

it('renders countdown crowdfunding with 1 day left', () => {
  const countDowndate = {
    days: 1,
    hours: 0,
    min: 0,
    sec: 0,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Crowdfunding />
    </IntlProvider>
  );

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-values')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('1 day left');
});

it('renders countdown crowdfunding with 2 days left', () => {
  const countDowndate = {
    days: 2,
    hours: 0,
    min: 0,
    sec: 0,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Crowdfunding />
    </IntlProvider>
  );

  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('2 days left');
});

it('renders countdown crowdfunding with 1 hour left', () => {
  const countDowndate = {
    days: 0,
    hours: 1,
    min: 0,
    sec: 0,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Crowdfunding />
    </IntlProvider>
  );

  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('1 hour left');
});

it('renders countdown crowdfunding with 1 min left', () => {
  const countDowndate = {
    days: 0,
    hours: 0,
    min: 1,
    sec: 0,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Crowdfunding />
    </IntlProvider>
  );

  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('1 min left');
});

it('renders countdown crowdfunding with 50 min left', () => {
  const countDowndate = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 50,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Crowdfunding />
    </IntlProvider>
  );

  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('50 sec left');
});

it('renders countdown crowdfunding ended', () => {
  const countDowndate = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Crowdfunding />
    </IntlProvider>
  );

  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('Ended');
});

it('renders countdown auction ended', () => {
  const countDowndate = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };
  const isPlaying = false;
  const isLoading = false;
  const statusText = 'Ended';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass, getAllByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Auction />
    </IntlProvider>
  );

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
  expect(getAllByClass('countdown-days-left-values')).toHaveLength(1);
  expect(queryByClass('countdown-days-left-values')).toHaveTextContent('Ended');
});

it('renders countdown auction whith 0 days', () => {
  const countDowndate = {
    days: 0,
    hours: 1,
    min: 1,
    sec: 10,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass, getAllByClass, getByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <Auction />
    </IntlProvider>
  );

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-values')).not.toBeInTheDocument();
  expect(getAllByClass('countdown-days-left-label-status')).toHaveLength(2);
  expect(getAllByClass('countdown-days-left-label')).toHaveLength(1);
  expect(getByTestId('hours')).toHaveTextContent('01Hour');
  expect(getByTestId('min')).toHaveTextContent('01Min.');
  expect(getByTestId('sec')).toHaveTextContent('10Sec.');
});

it('renders countdown auction whith 1 day left', () => {
  const countDowndate = {
    days: 1,
    hours: 1,
    min: 1,
    sec: 10,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass, getAllByClass, getByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <Auction />
    </IntlProvider>
  );

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-values')).not.toBeInTheDocument();
  expect(getAllByClass('countdown-days-left-label-status')).toHaveLength(2);
  expect(getAllByClass('countdown-days-left-label')).toHaveLength(1);
  expect(getByTestId('days')).toHaveTextContent('01Day');
  expect(getByTestId('hours')).toHaveTextContent('01Hour');
  expect(getByTestId('min')).toHaveTextContent('01Min.');
});

it('renders countdown auction whith 2 day left', () => {
  const countDowndate = {
    days: 2,
    hours: 3,
    min: 10,
    sec: 10,
  };
  const isPlaying = true;
  const isLoading = false;
  const statusText = 'Running';

  React.useState = jest
    .fn()
    .mockReturnValueOnce([countDowndate, {}])
    .mockReturnValueOnce([isPlaying, {}])
    .mockReturnValueOnce([isLoading, {}])
    .mockReturnValueOnce([statusText, {}]);

  const { queryByClass, getAllByClass, getByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <Auction />
    </IntlProvider>
  );

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-values')).not.toBeInTheDocument();
  expect(getAllByClass('countdown-days-left-label-status')).toHaveLength(2);
  expect(getAllByClass('countdown-days-left-label')).toHaveLength(1);
  expect(getByTestId('days')).toHaveTextContent('02Days');
  expect(getByTestId('hours')).toHaveTextContent('03Hours');
  expect(getByTestId('min')).toHaveTextContent('10Min.');
});
