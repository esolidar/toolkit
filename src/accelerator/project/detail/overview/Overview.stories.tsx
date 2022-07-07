/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Overview from './Overview';
import Props from './Overview.types';
import projectPendingOverview from '../../../../../__mocks__/projectPendingOverview';
import projectApprovedOverview from '../../../../../__mocks__/projectApprovedOverview';
import program from '../../../../../__mocks__/program';
import company from '../../../../../__mocks__/company';
import projectFiles from '../../../../../__mocks__/projectFiles';

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

const handleOnUploadFile = file => {
  console.log('file:', file);
};

const handleOnDeleteFile = fileId => {
  console.log('file:', fileId);
};

export const Pending: Story<Props> = Template.bind({});
export const Approved: Story<Props> = Template.bind({});
export const Admin: Story<Props> = Template.bind({});

Pending.args = {
  program,
  project: projectPendingOverview,
  isOwner: false,
  handleFollow: () => {},
  handleUnfollow: () => {},
  handleCopyToClipboard: () => {},
  locale: 'en',
  host: 'whietelabe.testesolidar.com',
  company,
  isAdmin: false,
  files: [],
  onUploadFile: handleOnUploadFile,
  onDeleteFile: handleOnDeleteFile,
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
  files: projectFiles,
  onUploadFile: handleOnUploadFile,
  onDeleteFile: handleOnDeleteFile,
};

Admin.args = {
  program,
  project: projectApprovedOverview,
  isOwner: true,
  handleFollow: () => {},
  handleUnfollow: () => {},
  handleCopyToClipboard: () => {},
  locale: 'en',
  host: 'https://whietelabe.testesolidar.com',
  company,
  isAdmin: true,
  files: projectFiles,
  onUploadFile: handleOnUploadFile,
  onDeleteFile: handleOnDeleteFile,
};
