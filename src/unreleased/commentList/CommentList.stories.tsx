import { Story, Meta } from '@storybook/react';
import CommentList from './CommentList';
import user from '../../../__mocks__/user';
import { otherUserComment, userComment } from '../../../__mocks__/commentCrowdfunding';
import Props from './CommentList.types';

export default {
  title: 'Unreleased/Comment/CommentList',
  component: CommentList,
  parameters: {
    jest: ['CommentList.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CommentList {...args} />;

export const LoggedOut: Story<Props> = Template.bind({});
export const LoggedIn: Story<Props> = Template.bind({});
export const WithResponses: Story<Props> = Template.bind({});

LoggedOut.args = {
  commentList: [userComment, otherUserComment],
  user,
  toggleLoginModal: () => {
    alert('Launching login modal');
  },
  totalCommentsLength: 4,
  onClickDeleteComment: () => {},
  onClickLoadMoreComments: () => {
    alert('Loading more comments');
  },
};

LoggedIn.args = {
  commentList: [userComment, otherUserComment],
  user,
  isLoggedIn: true,
  totalCommentsLength: 4,
  toggleLoginModal: () => {},
  onClickDeleteComment: () => {},
  onClickLoadMoreComments: () => {
    alert('Loading more comments');
  },
};
