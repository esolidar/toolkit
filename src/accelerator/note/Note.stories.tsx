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
  noteVieo,
} from '../../../__mocks__/note';

export default {
  title: 'Accelerator/Note',
  component: Note,
  parameters: {
    jest: ['Note.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Note {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithReply: Story<Props> = Template.bind({});
export const WithImages: Story<Props> = Template.bind({});
export const WithFiles: Story<Props> = Template.bind({});
export const WithVideo: Story<Props> = Template.bind({});

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
  },
};

WithReply.args = {
  noteSingleArgs: {
    note: noteWithReplies,
    createCommentArgs,
  },
};

WithImages.args = {
  noteSingleArgs: {
    note: noteImages,
    createCommentArgs,
  },
};

WithFiles.args = {
  noteSingleArgs: {
    note: noteFiles,
    createCommentArgs,
  },
};

WithVideo.args = {
  noteSingleArgs: {
    note: noteVieo,
    createCommentArgs,
  },
};
