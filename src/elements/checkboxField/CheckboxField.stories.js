import CheckboxField from './CheckboxField';

export default {
  title: 'Elements/CheckboxField',
  component: CheckboxField,
};

const Template = args => <CheckboxField {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CheckboxField.test.js'],
};
Default.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'error',
  onChange: x => console.log('test', x),
  name: 'CheckboxField_name',
  value: 'CheckboxField_value',
  checked: true,
  disabled: false,
};
