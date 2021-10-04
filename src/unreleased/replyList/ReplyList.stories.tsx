import { Story, Meta } from '@storybook/react';
import ReplyList from './ReplyList';
import user from '../../../__mocks__/user';
import { otherUserComment, userComment } from '../../../__mocks__/commentCrowdfunding';
import Props from './ReplyList.types';

export default {
  title: 'Unreleased/Comment/ReplyList',
  component: ReplyList,
  parameters: {
    jest: ['ReplyList.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ReplyList {...args} />;

export const LoggedOut: Story<Props> = Template.bind({});
export const LoggedIn: Story<Props> = Template.bind({});

LoggedOut.args = {
  commentList: [userComment, otherUserComment],
  user,
  toggleLoginModal: () => {
    alert('Launching login modal');
  },
  onClickDeleteComment: () => {},
};

LoggedIn.args = {
  commentList: [userComment, otherUserComment],
  user,
  isLoggedIn: true,
  toggleLoginModal: () => {},
  onClickDeleteComment: () => {},
};
