import Countdown from './Countdown';

export default {
  title: 'Components/Countdown',
  component: Countdown,
};

const Template = args => <Countdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  endDate: '2021-02-08 10:25:00',
  startDate: '2023-02-08 10:00:00',
  thumb: false,
};
