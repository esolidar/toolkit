/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardAuction from './CardAuction';
import Props from './CardAuction.types';
import auction from '../../../../__mocks__/auction';

export default {
  title: 'Unreleased/Card/auction',
  component: CardAuction,
  parameters: {
    jest: ['Card.test.tsx'],
  },
  argTypes: {
    currency: {
      options: ['EUR', 'USD', 'BRL', 'GBP'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '325px' }}>
    <CardAuction {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Private: Story<Props> = Template.bind({});
// export const PublicZeroRaised: Story<Props> = Template.bind({});
// export const PrivateZeroRaised: Story<Props> = Template.bind({});

Default.args = {
  auction,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};

Private.args = {
  auction,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};

// const auctionZero = { ...auction };
// auctionZero.contributes_sum = 0;
// PublicZeroRaised.args = {
//   auction: auctionZero,
//   clickThumb: () => alert('clicked'),
// };

// const campaignZero = { ...campaign };
// campaignZero.contribution_raised = 0;
// PrivateZeroRaised.args = {
//   campaign: campaignZero,
//   clickThumb: () => alert('clicked'),
// };
