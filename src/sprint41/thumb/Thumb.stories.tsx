import { Story, Meta } from '@storybook/react';
import Thumb from './Thumb';
import Props from './Thumb.types';
import crowdfunding from '../../../__mocks__/crowdfunding';
import campaign from '../../../__mocks__/campaign';
import auction from '../../../__mocks__/auction';

export default {
  title: 'Sprint41/Thumb',
  component: Thumb,
  parameters: {
    jest: ['Thumb.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '325px' }}>
    <Thumb {...args} />
  </div>
);

export const PublicCrowdfunding: Story<Props> = Template.bind({});
export const PrivateCrowdfunding: Story<Props> = Template.bind({});
export const Auction: Story<Props> = Template.bind({});

PublicCrowdfunding.args = {
  type: 'crowdfunding',
  crowdfunding,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
};

PrivateCrowdfunding.args = {
  type: 'campaign',
  campaign: campaign,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
};
console.log('auction', auction);
Auction.args = {
  type: 'auction',
  auction,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
};
