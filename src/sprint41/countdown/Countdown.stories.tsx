import { Story, Meta } from '@storybook/react';
import { format, addDays, subDays, addMinutes, addSeconds } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import Countdown from './Countdown';
import Props from './Countdown.types';

export default {
  title: 'Sprint41/Countdown',
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

const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
const formatDate = date =>
  format(addMinutes(date, date.getTimezoneOffset()), 'yyyy/MM/dd HH:mm:ss');

const dateFormat = 'yyyy-MM-dd HH:mm:ss';
const date = new Date(formatDate(zonedTimeToUtc(new Date(), timeZone)));

const dates = {
  soon: {
    oneMinute: {
      startDate: format(addMinutes(date, 1555), dateFormat),
      endDate: format(addDays(date, 1), dateFormat),
    },
  },
  running: {
    oneDayToGo: {
      startDate: format(subDays(date, 1), dateFormat),
      endDate: format(addMinutes(date, 1555), dateFormat),
    },
    eightHoursToGo: {
      startDate: format(subDays(date, 1), dateFormat),
      endDate: format(addMinutes(date, 485), dateFormat),
    },
    tenDaysToGo: {
      startDate: format(subDays(date, 1), dateFormat),
      endDate: format(addMinutes(date, 14401), dateFormat),
    },
    lessOneHours: {
      startDate: format(subDays(date, 1), dateFormat),
      endDate: format(addMinutes(date, 59), dateFormat),
    },
    OneMinuteLess: {
      startDate: format(subDays(date, 1), dateFormat),
      endDate: format(addSeconds(date, 59), dateFormat),
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

Ended.args = {
  startDate: '2020-01-01 00:00:00',
  endDate: '2020-02-01 00:00:00',
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownSoonTimer.args = {
  startDate: dates.soon.oneMinute.startDate,
  endDate: dates.soon.oneMinute.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownRunningTimer.args = {
  startDate: dates.running.oneDayToGo.startDate,
  endDate: dates.running.oneDayToGo.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownLastDay.args = {
  startDate: dates.running.oneDayToGo.startDate,
  endDate: dates.running.oneDayToGo.endDate,
  mode: 'timer-left',
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownHoursToGo.args = {
  startDate: dates.running.eightHoursToGo.startDate,
  endDate: dates.running.eightHoursToGo.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownMinutesToGo.args = {
  startDate: dates.running.lessOneHours.startDate,
  endDate: dates.running.lessOneHours.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownOneMinuteToGo.args = {
  startDate: dates.running.OneMinuteLess.startDate,
  endDate: dates.running.OneMinuteLess.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownCrowdfundingDaysToGo.args = {
  startDate: dates.running.tenDaysToGo.startDate,
  endDate: dates.running.tenDaysToGo.endDate,
  mode: 'timer-left',
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownDate.args = {
  startDate: null,
  endDate: dates.running.tenDaysToGo.endDate,
  mode: 'date',
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};

CountdownDateInterval.args = {
  startDate: dates.running.tenDaysToGo.startDate,
  endDate: dates.running.tenDaysToGo.endDate,
  mode: 'date',
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
};
