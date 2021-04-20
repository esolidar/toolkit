import moment from 'moment-timezone';
import Countdown from './Countdown';

export default {
  title: 'Components/Countdown',
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
};

const Template = args => <Countdown {...args} />;
const format = 'YYYY/MM/DD HH:mm:ss';

export const Soon = Template.bind({});
Soon.args = {
  startDate: moment().add(2, 'd').format(format),
  endDate: moment().add(3, 'd').format(format),
  thumb: false,
};

export const Running = Template.bind({});
Running.args = {
  startDate: moment().subtract(1, 'd').format(format),
  endDate: moment().add(1, 'd').format(format),
  thumb: false,
};

export const HeightHoursLeft = Template.bind({});
HeightHoursLeft.args = {
  startDate: moment().subtract(1, 'd').format(format),
  endDate: moment().add(2, 'h').format(format),
  thumb: false,
};

export const Ended = Template.bind({});
Ended.args = {
  startDate: '2020-02-08 00:00:00',
  endDate: '2020-04-20 00:00:00',
  thumb: false,
};
