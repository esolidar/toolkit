import React from 'react';
import InviteLink from './InviteLink';

export default {
  title: 'Components/InviteLink',
  component: InviteLink,
};

const Template = args => <InviteLink {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['InviteLink.test.js'],
};
Default.args = {
  inviteLinkText:
    'You can invite your members to participate in your company members by sharing this link with them. Remember that who joins through this link will be associated to your company as an member.',
  inviteLink: 'whitelabel_subdomain/lang/user/company-invite?invite_whitelabel=code',
  copyLinkFunc: () => {},
  copied: false,
  CopyLinkText: 'Copy link',
  CopiedLinkText: 'Copied',
};
