/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardAuction from './CardAuction';
import Props from './CardAuction.types';
import auction from '../../../../__mocks__/auction';
import recipient from '../../../../__mocks__/recipient';

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
export const NoBids: Story<Props> = Template.bind({});
export const SupportingInstitution: Story<Props> = Template.bind({});

Default.args = {
  auction,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};

const auctionPrivate = { ...auction };
auctionPrivate.private = 1;

Private.args = {
  auction: auctionPrivate,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};

const auctionNoBids = { ...auction };
auctionNoBids.last_bid = null;

NoBids.args = {
  auction: auctionNoBids,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};

const auctionSupportingInstitution = { ...auction };
auctionSupportingInstitution.project = null;
auctionSupportingInstitution.recipient = recipient;

SupportingInstitution.args = {
  auction: auctionSupportingInstitution,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};
