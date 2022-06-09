/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Overview from './Overview';
import Props from './Overview.types';
import projectPendingOverview from '../../../__mocks__/projectPendingOverview';
import projectApprovedOverview from '../../../__mocks__/projectApprovedOverview';
import program from '../../../__mocks__/program';
import company from '../../../__mocks__/company';

export default {
  title: 'Accelerator/Project/Detail/Overview',
  component: Overview,
  parameters: {
    jest: ['Overview.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Overview {...args} />
  </div>
);

export const Pending: Story<Props> = Template.bind({});
export const Approved: Story<Props> = Template.bind({});

Pending.args = {
  program,
  project: projectPendingOverview,
  isOwner: false,
  handleFollow: () => {},
  handleUnfollow: () => {},
  handleCopyToClipboard: () => {},
  locale: 'en',
  host: 'https://whietelabe.testesolidar.com',
  company,
  isAdmin: true,
};

Approved.args = {
  program,
  project: projectApprovedOverview,
  isOwner: true,
  handleFollow: () => {},
  handleUnfollow: () => {},
  handleCopyToClipboard: () => {},
  locale: 'en',
  host: 'https://whietelabe.testesolidar.com',
  company,
  isAdmin: false,
};
