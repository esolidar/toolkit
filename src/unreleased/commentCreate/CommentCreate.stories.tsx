import { Story, Meta } from '@storybook/react';
import CommentCreate from './CommentCreate';
import Props from './CommentCreate.types';

export default {
  title: 'Unreleased/Comment/CommentCreate',
  component: CommentCreate,
  parameters: {
    jest: ['CommentCreate.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <CommentCreate {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  onSubmitComment: () => {},
  userThumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
};
