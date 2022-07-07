import formatDate from './index';

export default {
  title: 'utils/formatDate',
  component: <></>,
  argTypes: {
    locale: {
      options: ['br', 'en', 'pt'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    jest: ['formatDate.test.js'],
  },
};

const Template = args => <div>{formatDate(args.date, args.locale, args.options)}</div>;

export const Default = Template.bind({});
export const Size2 = Template.bind({});
export const Size3 = Template.bind({});
export const WithHours = Template.bind({});

Default.args = {
  date: '2003-02-04 15:33:19',
  locale: 'en',
};

Size2.args = {
  date: '2003-02-04 15:33:19',
  locale: 'en',
  options: {
    size: 2,
  },
};

Size3.args = {
  date: '2003-02-04 15:33:19',
  locale: 'en',
  options: {
    size: 3,
  },
};

WithHours.args = {
  date: '2003-02-04 15:33:19',
  locale: 'en',
  options: {
    showHours: true,
  },
};
