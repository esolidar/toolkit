import TextFieldNumber from './TextFieldNumber';

export default {
  title: 'Elements/TextFieldNumber',
  component: TextFieldNumber,
};

const Template = args => <TextFieldNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'title',
  onChange: () => {},
  error: '',
  value: 1000,
  suffix: '%',
  thousandSeparator: false,
  decimalScale: 2,
  placeholder: '0%',
};
