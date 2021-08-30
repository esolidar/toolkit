/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardCrowdfunding from './CardCrowdfunding';
import Props from './CardCrowdfunding.types';
import crowdfunding from '../../../../__mocks__/crowdfunding';
import campaign from '../../../../__mocks__/campaign';

export default {
  title: 'Sprint41/Card/crowdfunding',
  component: CardCrowdfunding,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '325px' }}>
    <CardCrowdfunding {...args} />
  </div>
);

export const PublicTitlePt: Story<Props> = Template.bind({});
export const PublicTitleEn: Story<Props> = Template.bind({});
export const PublicZeroRaised: Story<Props> = Template.bind({});
export const Private: Story<Props> = Template.bind({});
export const PrivateZeroRaised: Story<Props> = Template.bind({});

PublicTitlePt.args = {
  crowdfunding,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  lang: 'pt',
};

PublicTitleEn.args = {
  crowdfunding,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
};

Private.args = {
  campaign,
  clickThumb: () => alert('clicked'),
};

const crowdfundingZero = { ...crowdfunding };
crowdfundingZero.contributes_sum = 0;
PublicZeroRaised.args = {
  crowdfunding: crowdfundingZero,
  clickThumb: () => alert('clicked'),
};

const campaignZero = { ...campaign };
campaignZero.contribution_raised = 0;
PrivateZeroRaised.args = {
  campaign: campaignZero,
  clickThumb: () => alert('clicked'),
};
