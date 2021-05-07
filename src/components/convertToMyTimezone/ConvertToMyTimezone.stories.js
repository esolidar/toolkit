import ConvertToMyTimezone from './ConvertToMyTimezone';

export default {
  title: 'Components/ConvertToMyTimezone',
  component: ConvertToMyTimezone,
};

const Template = args => <ConvertToMyTimezone {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ConvertToMyTimezone.test.js'],
};
Default.args = {
  date: '2009-01-01 10:00:00',
  format: 'LLLL',
};
