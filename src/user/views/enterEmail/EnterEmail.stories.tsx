import { Story, Meta } from '@storybook/react';
import EnterEmail from './EnterEmail';
import Props from './EnterEmail.types';

export default {
  title: 'User/Views/EnterEmail',
  component: EnterEmail,
  parameters: {
    jest: ['EnterEmail.test.js'],
  },
  argTypes: {
    type: {
      options: ['set', 'reset'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <EnterEmail {...args} />;

export const Set: Story<Props> = Template.bind({});
export const Reset: Story<Props> = Template.bind({});

Set.args = {
  type: 'set',
  onSuccess: () => {},
  actions: {
    postRecoverPassword: () => {},
  },
  reducers: {
    recoverPassword: { code: 200, data: false },
  },
};

Reset.args = {
  type: 'reset',
  onSuccess: () => {},
  actions: {
    postRecoverPassword: () => {},
  },
  reducers: {
    recoverPassword: { code: 200, data: false },
  },
};
