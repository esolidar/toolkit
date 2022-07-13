/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Note from './Note';
import Props from './Note.types';
import user from '../../../__mocks__/user';
import {
  noteDefault,
  noteWithReplies,
  noteImages,
  noteFiles,
  noteVideo,
  noteUrl,
} from '../../../__mocks__/note';

export default {
  title: 'Accelerator/Note',
  component: Note,
  parameters: {
    jest: ['Note.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <Note {...args} />;

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
  galleryType: 'inline',
};

Default.args = {
  noteSingleArgs: {
    note: noteDefault,
    createCommentArgs,
    parentComment: {
      parentId: 1,
      parentName: 'teste',
    },
    reply: false,
    handleDeleteNote: () => {},
  },
  handleViewAllReplies: () => {},
  handleViewChildReplies: () => {},
  handleDeleteNote: () => {},
};

WithReply.args = {
  noteSingleArgs: {
    note: noteWithReplies,
    createCommentArgs,
    parentComment: {
      parentId: 1,
      parentName: 'teste',
    },
    reply: false,
    handleDeleteNote: () => {},
  },
  handleViewAllReplies: () => {},
  handleViewChildReplies: () => {},
  handleDeleteNote: () => {},
};

WithImages.args = {
  noteSingleArgs: {
    note: noteImages,
    createCommentArgs,
    parentComment: {
      parentId: 1,
      parentName: 'teste',
    },
    reply: false,
    handleDeleteNote: () => {},
  },
  handleViewAllReplies: () => {},
  handleViewChildReplies: () => {},
  handleDeleteNote: () => {},
};

WithFiles.args = {
  noteSingleArgs: {
    note: noteFiles,
    createCommentArgs,
    parentComment: {
      parentId: 1,
      parentName: 'teste',
    },
    reply: false,
    handleDeleteNote: () => {},
  },
  handleViewAllReplies: () => {},
  handleViewChildReplies: () => {},
  handleDeleteNote: () => {},
};

WithVideo.args = {
  noteSingleArgs: {
    note: noteVideo,
    createCommentArgs,
    parentComment: {
      parentId: 1,
      parentName: 'teste',
    },
    reply: false,
    handleDeleteNote: () => {},
  },
  handleViewAllReplies: () => {},
  handleViewChildReplies: () => {},
  handleDeleteNote: () => {},
};

WithUrl.args = {
  noteSingleArgs: {
    note: noteUrl,
    createCommentArgs,
    parentComment: {
      parentId: 1,
      parentName: 'teste',
    },
    reply: false,
    handleDeleteNote: () => {},
  },
  handleViewAllReplies: () => {},
  handleViewChildReplies: () => {},
  handleDeleteNote: () => {},
};
