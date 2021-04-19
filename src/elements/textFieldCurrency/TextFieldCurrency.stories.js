import TextFieldCurrency from './TextFieldCurrency';

export default {
  title: 'Elements/TextFieldCurrency',
  component: TextFieldCurrency,
};

const Template = args => <TextFieldCurrency {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Title',
  prefix: 'EUR',
  type: 'text',
  onChange: () => {},
  error: '',
  placeholder: '€ 0,00',
  defaultValue: 'defaultValue',
  disabled: false,
  className: 'teste',
};
