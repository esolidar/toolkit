import { Story, Meta } from '@storybook/react';
import PasswordField from './PasswordField';
import Props from './PasswordField.types';

export default {
  title: 'Elements/PasswordField',
  component: PasswordField,
  parameters: {
    jest: ['PasswordField.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <PasswordField {...args} />
  </div>
);

export const PasswordFieldHiddenPassword: Story<Props> = Template.bind({});
export const PasswordFieldShowPassword: Story<Props> = Template.bind({});
export const PasswordWithoutFieldShowPassword: Story<Props> = Template.bind({});

PasswordFieldHiddenPassword.args = {
  style: { marginBottom: '0' },
  label: 'Password',
  error: '',
  value: 'passwordTest123',
  field: 'password',
  onChange: () => {},
};

PasswordFieldShowPassword.args = {
  label: 'Password',
  error: '',
  value: 'passwordTest123',
  field: 'password',
  showPassword: true,
  help: 'Password must have at least 6 characters.',
  onChange: () => {},
};

PasswordWithoutFieldShowPassword.args = {
  value: 'passwordTest123',
  field: 'password',
  showPassword: true,
  onChange: () => {},
};
