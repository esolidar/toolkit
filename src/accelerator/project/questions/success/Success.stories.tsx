import { Story, Meta } from '@storybook/react';
import Success from './Success';
import Props from './Success.types';
import user from '../../../../../__mocks__/user';
import company from '../../../../../__mocks__/company';

export default {
  title: 'Accelerator/Project/Submit/Success',
  component: Success,
  parameters: {
    jest: ['CustomQuestionsSection.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Success {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  user: user.firstName,
  companyName: company.name,
};
