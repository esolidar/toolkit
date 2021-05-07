import DatePicker from './DatePicker';

export default {
  title: 'Elements/DatePicker',
  component: DatePicker,
};

const Template = args => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['DatePicker.test.js'],
};
Default.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'en',
  selected: new Date('2021-03-05T10:20:30Z'),
  startDate: new Date('2021-03-05T10:20:30Z'),
  endDate: new Date('2021-03-06T10:20:30Z'),
  onChange: () => {},
  className: 'form-control',
  errors: '',
};
