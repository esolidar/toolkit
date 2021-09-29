import { Story, Meta } from '@storybook/react';
import { format, subDays } from 'date-fns';
import CommentHeader from './CommentHeader';
import Props from './CommentHeader.types';
import { getToday, dateFormat } from '../../constants/date';

export default {
  title: 'Unreleased/Comment/CommentHeader',
  component: CommentHeader,
  parameters: {
    jest: ['CommentHeader.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CommentHeader {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  onClickDelete: () => {},
  profileAvatar: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
  },
  createdDate: format(subDays(getToday(), 14), dateFormat),
  isPublic: true,
  isHighlighted: true,
  isUserOwner: true,
};
