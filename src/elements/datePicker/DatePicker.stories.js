import React from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Elements/DatePicker',
  component: DatePicker,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <DatePicker {...args} />;

export const Default = Template.bind({});
export const DateOnly = Template.bind({});
export const InputOnly = Template.bind({});
export const WithError = Template.bind({});
export const Disabled = Template.bind({});

Default.parameters = {
  jest: ['DatePicker.test.js'],
};

Default.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'en',
  selected: new Date('2021-03-05 00:00:00'),
  startDate: new Date('2021-03-15 00:00:00'),
  endDate: new Date('2021-03-25 00:00:00'),
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showOptionalLabel: true,
  help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  leftIcon: { name: 'icon-calendar', show: true },
  size: 'sm',
};

DateOnly.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'en',
  startDate: new Date('2021-03-05 00:00:00'),
  selected: new Date('2021-03-15 00:00:00'),
  endDate: new Date('2021-03-25 00:00:00'),
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showTimeSelect: false,
  dateFormat: 'dd-MM-yyyy',
  leftIcon: { name: 'icon-calendar', show: true },
};

InputOnly.args = {
  classnames: () => {},
  locale: 'pt',
  selected: new Date('2021-03-05 00:00:00'),
  startDate: new Date('2021-03-15 00:00:00'),
  endDate: new Date('2021-03-25 00:00:00'),
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showTimeSelect: false,
  leftIcon: { name: 'icon-calendar', show: true },
  dateFormat: 'dd-MM-yyyy',
};

WithError.args = {
  classnames: () => {},
  locale: 'pt',
  selected: new Date('2021-03-05 00:00:00'),
  startDate: new Date('2021-03-15 00:00:00'),
  endDate: new Date('2021-03-25 00:00:00'),
  onChange: () => {},
  className: 'form-control',
  showTimeSelect: false,
  leftIcon: { name: 'icon-calendar', show: true },
  dateFormat: 'dd-MM-yyyy',
  errors: 'Invalid date',
};

Disabled.args = {
  classnames: () => {},
  disabled: true,
  locale: 'pt',
  selected: new Date('2021-03-05 00:00:00'),
  startDate: new Date('2021-03-15 00:00:00'),
  endDate: new Date('2021-03-25 00:00:00'),
  onChange: () => {},
  className: 'form-control',
  showTimeSelect: false,
  leftIcon: { name: 'icon-calendar', show: true },
  dateFormat: 'dd-MM-yyyy',
};
