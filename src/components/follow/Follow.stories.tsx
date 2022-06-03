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
  follower: {
    followers: 0,
    follow: false,
  },
  href: 'http://www.esolidar.com',
  onClickCopyToClipboard: () => {},
  title: 'Esolidar be the change',
};

Following.args = {
  follower: {
    followers: 34,
    follow: true,
  },
  href: 'http://www.esolidar.com',
  onClickCopyToClipboard: () => {},
  title: 'Esolidar be the change',
};
