/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import ViewComment from './ViewComment';
import Props from './ViewComment.types';
import user from '../../../../__mocks__/user';
import {
  commentDefault,
  commentWithReplies,
  commentImages,
  commentFiles,
  commentVideo,
  commentUrl,
} from '../../../../__mocks__/comment';

export default {
  title: 'Accelerator/Comment/View',
  component: ViewComment,
  parameters: {
    jest: ['ViewComment.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ViewComment {...args} />;

export const Default: Story<Props> = Template.bind({});
export const WithReply: Story<Props> = Template.bind({});
export const WithImages: Story<Props> = Template.bind({});
export const WithFiles: Story<Props> = Template.bind({});
export const WithVideo: Story<Props> = Template.bind({});
export const WithUrl: Story<Props> = Template.bind({});

const createCommentArgs: any = {
  files: [],
  isAdmin: false,
  handlePostComment: () => {},
  postUploadFiles: () => {},
  postDeleteFile: () => {},
  getScraper: () => {},
  postUploadImages: () => {},
  postDeleteImage: () => {},
  handleCleanComment: () => {},
  scrapper: null,
  images: [],
  closedCommentRef: { current: null },
  user,
  type: 'reply',
  isEditMode: false,
  galleryType: 'grid',
};

Default.args = {
  ...commentDefault,
  createCommentArgs,
  handleDeleteComment: () => {},
  handleViewAllReplies: () => {},
};

WithReply.args = {
  ...commentWithReplies,
  createCommentArgs,
  handleDeleteComment: () => {},
  handleViewAllReplies: () => {},
};

WithImages.args = {
  ...commentImages,
  createCommentArgs,
  handleDeleteComment: () => {},
  handleViewAllReplies: () => {},
};

WithFiles.args = {
  ...commentFiles,
  createCommentArgs,
  handleDeleteComment: () => {},
  handleViewAllReplies: () => {},
};

WithVideo.args = {
  ...commentVideo,
  createCommentArgs,
  handleDeleteComment: () => {},
  handleViewAllReplies: () => {},
};

WithUrl.args = {
  ...commentUrl,
  createCommentArgs,
  handleDeleteComment: () => {},
  handleViewAllReplies: () => {},
};
