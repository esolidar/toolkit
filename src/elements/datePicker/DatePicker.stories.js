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

// export const Default = Template.bind({});
export const DateOnly = Template.bind({});
export const InputOnly = Template.bind({});
export const WithError = Template.bind({});
export const Disabled = Template.bind({});

// Default.args = {
//   classnames: () => {},
//   label: 'Start Date',
//   locale: 'en',
//   selected: new Date('2021-03-05 00:00:00'),
//   startDate: new Date('2021-03-15 00:00:00'),
//   endDate: new Date('2021-03-25 00:00:00'),
//   onChange: () => {},
//   className: 'form-control',
//   errors: '',
//   showOptionalLabel: true,
//   help: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   leftIcon: { name: 'Calendar', show: true },
//   size: 'sm',
// };

const highlightWithRanges = [
  {
    date: [new Date('2022-01-10 00:00:00')],
    name: 'Start program',
  },
  {
    date: [new Date('2022-01-19 00:00:00')],
    name: 'Applications ends',
  },
  {
    date: [new Date('2022-01-25 00:00:00')],
    name: 'Program ends',
  },
];

DateOnly.args = {
  classnames: () => {},
  label: 'Start Date',
  locale: 'pt',
  startDate: new Date('2022-01-05 00:00:00'),
  selected: null,
  endDate: new Date('2022-01-13 00:00:00'),
  onChange: () => {},
  className: 'form-control',
  errors: '',
  showTimeSelect: false,
  dateFormat: 'yyyy',
  leftIcon: { name: 'Calendar', show: true },
  highlightDates: highlightWithRanges,
  minDate: new Date('2022-01-05 00:00:00'),
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
  leftIcon: { name: 'Calendar', show: true },
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
  leftIcon: { name: 'Calendar', show: true },
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
  leftIcon: { name: 'Calendar', show: true },
  dateFormat: 'dd-MM-yyyy',
};
