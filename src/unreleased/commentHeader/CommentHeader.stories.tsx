import { Story, Meta } from '@storybook/react';
import CommentHeader from './CommentHeader';
import Props from './CommentHeader.types';

export default {
  title: 'Unreleased/Comment/CommentHeader',
  component: CommentHeader,
  parameters: {
    jest: ['CommentHeader.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <CommentHeader {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  onClickDelete: () => {},
  profileAvatar: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
  },
  createdDate: '2021-09-15 17:35:29',
  isPublic: true,
  isHighlighted: true,
  isUserOwner: true,
};
