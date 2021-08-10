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
export const Private: Story<Props> = Template.bind({});

PublicTitlePt.args = {
  contributes_sum: 10,
  contribution_raised: 100,
  currencySmall: 'EUR',
  goal: 200,
  lang: 'pt',
  crowdfunding,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
};

PublicTitleEn.args = {
  contributes_sum: 10,
  contribution_raised: 100,
  currencySmall: 'EUR',
  goal: 200,
  crowdfunding,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
};

Private.args = {
  contributes_sum: 10,
  contribution_raised: 100,
  currencySmall: 'EUR',
  goal: 200,
  campaign,
  clickThumb: () => alert('clicked'),
};
