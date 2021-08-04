import { Story, Meta } from '@storybook/react';
import { format, addDays, subDays, addMinutes } from 'date-fns';
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
  start: {
    oneMinute: {
      startDate: format(addMinutes(date, 1), dateFormat),
      endDate: format(addDays(date, 1), dateFormat),
    },
    oneHour: {
      startDate: format(addMinutes(date, 60), dateFormat),
      endDate: format(addDays(date, 5), dateFormat),
    },
    oneDay: {
      startDate: format(addDays(date, 2), dateFormat),
      endDate: format(addDays(date, 5), dateFormat),
    },
  },
  end: {
    oneMinute: {
      startDate: format(addMinutes(date, 1), dateFormat),
      endDate: format(addDays(date, 1), dateFormat),
    },
    oneHour: {
      startDate: format(addDays(date, 2), dateFormat),
      endDate: format(addDays(date, 5), dateFormat),
    },
    oneDay: {
      startDate: format(addDays(date, 2), dateFormat),
      endDate: format(addDays(date, 5), dateFormat),
    },
  },
};

export const CrowdfundingOneMinuteLeftToStart: Story<Props> = Template.bind({});
export const CrowdfundingOneHourLeftToStart: Story<Props> = Template.bind({});
export const CrowdfundingOneDayLeftToStart: Story<Props> = Template.bind({});

export const AuctionOneMinuteLeftToStart: Story<Props> = Template.bind({});
export const AuctionOneHourLeftToStart: Story<Props> = Template.bind({});
export const AuctionOneDayLeftToStart: Story<Props> = Template.bind({});
export const Ended: Story<Props> = Template.bind({});

CrowdfundingOneMinuteLeftToStart.args = {
  startDate: dates.start.oneMinute.startDate,
  endDate: dates.start.oneMinute.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'crowdfunding',
};

CrowdfundingOneHourLeftToStart.args = {
  startDate: dates.start.oneHour.startDate,
  endDate: dates.start.oneHour.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'crowdfunding',
};

CrowdfundingOneDayLeftToStart.args = {
  startDate: dates.start.oneDay.startDate,
  endDate: dates.start.oneDay.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'crowdfunding',
};

AuctionOneMinuteLeftToStart.args = {
  startDate: dates.start.oneMinute.startDate,
  endDate: dates.start.oneMinute.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'auction',
};

AuctionOneHourLeftToStart.args = {
  startDate: dates.start.oneHour.startDate,
  endDate: dates.start.oneHour.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'auction',
};

AuctionOneDayLeftToStart.args = {
  startDate: dates.start.oneDay.startDate,
  endDate: dates.start.oneDay.endDate,
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'auction',
};

Ended.args = {
  startDate: '2020-01-01 00:00:00',
  endDate: '2020-02-01 00:00:00',
  onStart: () => {
    alert('Started');
  },
  onExpiry: () => {
    alert('Ended');
  },
  mode: 'auction',
};
