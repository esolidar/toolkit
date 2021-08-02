import { Story, Meta } from '@storybook/react';
import CrowdfundingThumb from './CrowdfundingThumb';
import Props from './CrowdfundingThumb.types';
import crowdfunding from '../../../__mocks__/crowdfunding';

export default {
  title: 'Sprint41/CrowdfundingThumb',
  component: CrowdfundingThumb,
  parameters: {
    jest: ['CrowdfundingThumb.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <CrowdfundingThumb {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  crowdfunding,
};
