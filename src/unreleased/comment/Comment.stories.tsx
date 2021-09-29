import { Story, Meta } from '@storybook/react';
import Comment from './Comment';
import user from '../../../__mocks__/user';
import { userComment, userCommentWithResponses } from '../../../__mocks__/commentCrowdfunding';
import Props from './Comment.types';

export default {
  title: 'Unreleased/Comment/Comment',
  component: Comment,
  parameters: {
    jest: ['Comment.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Comment {...args} />;

export const Default: Story<Props> = Template.bind({});
export const WithResponses: Story<Props> = Template.bind({});

Default.args = {
  comment: userComment,
  onClickLoadReplies: () => {},
  // onClickToggleLoginModal: () => {},
  onClickDelete: () => {},
  profileAvatar: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    thumbSize: 'md',
  },
  user,
};

WithResponses.args = {
  comment: userCommentWithResponses,
  onClickLoadReplies: () => {},
  // onClickToggleLoginModal: () => {},
  onClickDelete: () => {},
  profileAvatar: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    thumbSize: 'md',
  },
  user,
  isLoggedIn: true,
};
