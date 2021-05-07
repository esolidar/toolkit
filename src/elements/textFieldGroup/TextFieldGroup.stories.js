import TextFieldGroup from './TextFieldGroup';

export default {
  title: 'Elements/TextFieldGroup',
  component: TextFieldGroup,
};

const Template = args => <TextFieldGroup {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['TextFieldGroup.test.js'],
};
Default.args = {
  type: 'type',
  label: 'Lorem Ipsum',
  groupText: 'Group Text',
  error: 'error',
  placeholder: 'Placeholder',
  onChange: () => console.log('test'),
  field: 'textFieldGroup',
  defaultValue: 'defaultValue',
  message: 'Mensagem',
  disabled: true,
};
