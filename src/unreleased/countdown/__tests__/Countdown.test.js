import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { advanceTo } from 'jest-date-mock';
import Meta, {
  Ended as CrowdfundingEnded,
  CountdownSoonTimer as SoonTimer,
  CountdownRunningTimer as RunningTimer,
  CountdownLastDay as LastDay,
  CountdownHoursToGo as HoursToGo,
  CountdownMinutesToGo as MinutesToGo,
  CountdownOneMinuteToGo as OneMinuteToGo,
  CountdownCrowdfundingDaysToGo as DaysToGo,
  CountdownDate as ShowDate,
  CountdownDateInterval as DateInterval,
} from '../Countdown.stories';
import { render } from '../../../../__customQueries__/test-utils';

const Ended = composeStory(CrowdfundingEnded, Meta);
const Soon = composeStory(SoonTimer, Meta);
const Running = composeStory(RunningTimer, Meta);
const LastDayTemplate = composeStory(LastDay, Meta);
const HoursToGoTemplate = composeStory(HoursToGo, Meta);
const MinutesToGoTemplate = composeStory(MinutesToGo, Meta);
const OneMinuteToGoTemplate = composeStory(OneMinuteToGo, Meta);
const DaysToGoTemplate = composeStory(DaysToGo, Meta);
const ShowDateTemplate = composeStory(ShowDate, Meta);
const DateIntervalTemplate = composeStory(DateInterval, Meta);

jest.useFakeTimers();
const date = new Date();

it('renders countdown ended', () => {
  advanceTo(date);
  const { queryByClass, queryByTestId } = render(<Ended />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByTestId('ended')).toBeInTheDocument();
  expect(queryByTestId('ended')).toHaveTextContent('Ended');
});

it('renders countdown soon', () => {
  advanceTo(new Date(date));
  const { queryByClass, queryByTestId } = render(<Soon />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).toHaveTextContent('Starts in');
  expect(queryByClass('countdown-days-left-label-status countdown-soon')).toBeInTheDocument();
  expect(queryByTestId('days')).toHaveTextContent('01Day');
  expect(queryByTestId('hours')).toHaveTextContent('01Hour');
});

it('renders countdown running', () => {
  advanceTo(new Date(date));
  const { queryByClass, queryByTestId } = render(<Running />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).toHaveTextContent('Ends in');
  expect(queryByClass('countdown-days-left-label-status countdown-running')).toBeInTheDocument();
  expect(queryByTestId('days')).toHaveTextContent('01Day');
  expect(queryByTestId('hours')).toHaveTextContent('01Hour');
});

it('renders countdown last day', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<LastDayTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toHaveTextContent('Last day');
});

it('renders countdown hours to go', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<HoursToGoTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toHaveTextContent('8 hours to go');
});

it('renders countdown 60 minutes to go', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<MinutesToGoTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
});

it('renders countdown 1 minute to go', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<OneMinuteToGoTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toHaveTextContent('1 minute to go');
});

it('renders countdown days to go', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<DaysToGoTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toHaveTextContent('10 days left');
});

it('renders countdown date', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<ShowDateTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
});

it('renders countdown date interval', () => {
  advanceTo(new Date(date));
  const { queryByClass } = render(<DateIntervalTemplate />);

  expect(queryByClass('countdown-component')).toBeInTheDocument();
  expect(queryByClass('countdown-days-left-label-status')).not.toBeInTheDocument();
  expect(queryByClass('countdown-days-left')).toBeInTheDocument();
});
