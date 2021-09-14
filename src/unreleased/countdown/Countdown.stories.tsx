/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import { format, addDays, subDays, addMinutes, addSeconds } from 'date-fns';
import Countdown from './Countdown';
import Props from './Countdown.types';
import { today, dateFormat } from '../../constants/date';

export default {
  title: 'Unreleased/Countdown',
  component: Countdown,
  argTypes: {
    startDate: {
      control: {
        type: 'text',
      },
    },
    endDate: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    jest: ['Countdown.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Countdown {...args} />
  </div>
);

const onStart = () => alert('Started');
const onExpiry = () => alert('Ended');

const dates = {
  soon: {
    oneMinute: {
      startDate: format(addMinutes(today, 1555), dateFormat),
      endDate: format(addDays(today, 1), dateFormat),
    },
  },
  running: {
    oneDayToGo: {
      startDate: format(subDays(today, 1), dateFormat),
      endDate: format(addMinutes(today, 1555), dateFormat),
    },
    eightHoursToGo: {
      startDate: format(subDays(today, 1), dateFormat),
      endDate: format(addMinutes(today, 485), dateFormat),
    },
    tenDaysToGo: {
      startDate: format(subDays(today, 1), dateFormat),
      endDate: format(addMinutes(today, 14401), dateFormat),
    },
    lessOneHours: {
      startDate: format(subDays(today, 1), dateFormat),
      endDate: format(addMinutes(today, 59), dateFormat),
    },
    OneMinuteLess: {
      startDate: format(subDays(today, 1), dateFormat),
      endDate: format(addSeconds(today, 59), dateFormat),
    },
  },
};

export const Ended: Story<Props> = Template.bind({});
export const CountdownSoonTimer: Story<Props> = Template.bind({});
export const CountdownRunningTimer: Story<Props> = Template.bind({});
export const CountdownLastDay: Story<Props> = Template.bind({});
export const CountdownHoursToGo: Story<Props> = Template.bind({});
export const CountdownMinutesToGo: Story<Props> = Template.bind({});
export const CountdownOneMinuteToGo: Story<Props> = Template.bind({});
export const CountdownCrowdfundingDaysToGo: Story<Props> = Template.bind({});
export const CountdownDate: Story<Props> = Template.bind({});
export const CountdownDateInterval: Story<Props> = Template.bind({});
export const Minimal: Story<Props> = Template.bind({});

Ended.args = {
  startDate: '2020-01-01 00:00:00',
  endDate: '2020-02-01 00:00:00',
  onStart,
  onExpiry,
};

CountdownSoonTimer.args = {
  startDate: dates.soon.oneMinute.startDate,
  endDate: dates.soon.oneMinute.endDate,
  onStart,
  onExpiry,
};

CountdownRunningTimer.args = {
  startDate: dates.running.oneDayToGo.startDate,
  endDate: dates.running.oneDayToGo.endDate,
  onStart,
  onExpiry,
};

CountdownLastDay.args = {
  startDate: dates.running.oneDayToGo.startDate,
  endDate: dates.running.oneDayToGo.endDate,
  mode: 'timer-left',
  onStart,
  onExpiry,
};

CountdownHoursToGo.args = {
  startDate: dates.running.eightHoursToGo.startDate,
  endDate: dates.running.eightHoursToGo.endDate,
  onStart,
  onExpiry,
};

CountdownMinutesToGo.args = {
  startDate: dates.running.lessOneHours.startDate,
  endDate: dates.running.lessOneHours.endDate,
  onStart,
  onExpiry,
};

CountdownOneMinuteToGo.args = {
  startDate: dates.running.OneMinuteLess.startDate,
  endDate: dates.running.OneMinuteLess.endDate,
  onStart,
  onExpiry,
};

CountdownCrowdfundingDaysToGo.args = {
  startDate: dates.running.tenDaysToGo.startDate,
  endDate: dates.running.tenDaysToGo.endDate,
  mode: 'timer-left',
  onStart,
  onExpiry,
};

CountdownDate.args = {
  startDate: null,
  endDate: dates.running.tenDaysToGo.endDate,
  mode: 'date',
  onStart,
  onExpiry,
};

CountdownDateInterval.args = {
  startDate: dates.running.tenDaysToGo.startDate,
  endDate: dates.running.tenDaysToGo.endDate,
  mode: 'date',
  onStart,
  onExpiry,
};

Minimal.args = {
  startDate: dates.running.eightHoursToGo.startDate,
  endDate: dates.running.eightHoursToGo.endDate,
  onStart,
  onExpiry,
  showBorder: false,
  minimal: true,
};
