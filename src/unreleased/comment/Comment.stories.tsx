import { Story, Meta } from '@storybook/react';
import Comment from './Comment';
import user from '../../../__mocks__/user';
import comment from '../../../__mocks__/comment';
import Props from './Comment.types';

export default {
  title: 'Unreleased/Comment/Comment',
  component: Comment,
  parameters: {
    jest: ['Comment.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Comment {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  comment,
  onClickShowResponses: () => {},
  onClickShowCreateResponse: () => {},
  onClickDelete: () => {},
  profileAvatar: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    thumbSize: 'md',
  },
  showCount: true,
  userId: user.id,
};
