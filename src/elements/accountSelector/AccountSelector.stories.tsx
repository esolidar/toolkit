/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import AccountSelector from './AccountSelector';
import Props from './AccountSelector.types';
import Company from '../../../__mocks__/company';

export default {
  title: 'Components/AccountSelector',
  component: AccountSelector,
  parameters: {
    jest: ['AccountSelector.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <AccountSelector {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Minimal: Story<Props> = Template.bind({});

Default.args = {
  onClick: () => {
    alert('you clicked');
  },
  name: Company.name,
  email: Company.email,
  imageSrc: Company?.thumbs?.thumb,
};

Minimal.args = {
  onClick: () => {
    alert('you clicked');
  },
  name: Company.name,
  imageSrc: Company?.thumbs?.thumb,
};
