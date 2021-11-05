import React from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Elements/DatePicker',
  component: DatePicker,
};

const Template = args => <DatePicker {...args} />;

export const Default = Template.bind({});
export const DateOnly = Template.bind({});
export const PT = Template.bind({});

Default.parameters = {
  jest: ['DatePicker.test.js'],
};

Default.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'en',
  selected: new Date('2021-03-05'),
  startDate: null,
  endDate: null,
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  leftIcon: { name: 'icon-calendar', show: true },
};

DateOnly.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'en',
  selected: new Date('2021-03-05'),
  startDate: '',
  endDate: '',
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showTimeSelect: false,
  dateFormat: 'dd-MM-yyyy',
};

PT.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'pt',
  selected: new Date('2021-03-05'),
  startDate: '',
  endDate: '',
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showTimeSelect: false,
  dateFormat: 'dd-MM-yyyy',
};
