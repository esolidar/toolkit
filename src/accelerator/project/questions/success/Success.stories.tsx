import { Story, Meta } from '@storybook/react';
import Success from './Success';
import Props from './Success.types';
import user from '../../../../../__mocks__/user';
import company from '../../../../../__mocks__/company';

export default {
  title: 'Accelerator/Project/Questions/Success',
  component: Success,
  parameters: {
    jest: ['Section.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="content-step-page">
    <Success {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  userName: user.firstName,
  companyName: company.name,
};
