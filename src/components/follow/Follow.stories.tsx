import { Story, Meta } from '@storybook/react';
import Follow from './Follow';
import Props from './Follow.types';

export default {
  title: 'Components/Follow',
  component: Follow,
  argTypes: {
    status: {
      options: ['DRAFT', 'PENDING', 'IN_REVIEW', 'REVIEWED', 'REJECTED', 'APPROVED', 'COMPLETED'],
      control: { type: 'select' },
    },
  },
  parameters: {
    jest: ['CardProjectDetail.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Follow {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Following: Story<Props> = Template.bind({});

Default.args = {
  followers: {
    followersCount: 0,
    following: false,
  },
  href: 'http://www.esolidar.com',
  onClickCopyToClipboard: () => {},
  title: 'Esolidar be the change',
};

Following.args = {
  followers: {
    followersCount: 34,
    following: true,
  },
  href: 'http://www.esolidar.com',
  onClickCopyToClipboard: () => {},
  title: 'Esolidar be the change',
};
