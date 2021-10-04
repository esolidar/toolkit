import { Story, Meta } from '@storybook/react';
import Reply from './Reply';
import user from '../../../__mocks__/user';
import { userComment } from '../../../__mocks__/commentCrowdfunding';
import Props from './Reply.types';

export default {
  title: 'Unreleased/Comment/Reply',
  component: Reply,
  parameters: {
    jest: ['Reply.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Reply {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  comment: userComment,
  onClickDelete: () => {},
  profileAvatar: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    thumbSize: 'md',
  },
  user,
};
