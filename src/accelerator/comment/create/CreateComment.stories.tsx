/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import CreateComment from './CreateComment';
import Props from './CreateComment.types';
import user from '../../../../__mocks__/user';
import scraperData from '../../../../__mocks__/scraper';

export default {
  title: 'Accelerator/Comment/Create',
  component: CreateComment,
  parameters: {
    jest: ['Overview.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [scrapper, setScraper] = useState<any>(null);

  const getScraper = () => {
    const urlData = { ...scraperData };
    setScraper(urlData);
  };

  return (
    <CreateComment
      {...args}
      files={() => {}}
      getScraper={getScraper}
      scrapper={scrapper}
      images={() => {}}
    />
  );
};

export const Default: Story<Props> = Template.bind({});
export const Reply: Story<Props> = Template.bind({});

Default.args = {
  isAdmin: false,
  isEditMode: false,
  comment: {},
  user,
  placeholderText: 'Share ideas, suggestions or initiaves for this project...',
  postDeleteFile: () => {},
  postDeleteImage: () => {},
  onDropError: () => {},
  galleryType: 'grid',
  closedCommentRef: { current: null },
  handleCleanComment: () => {},
};

Reply.args = {
  isAdmin: false,
  isEditMode: false,
  comment: {},
  user,
  type: 'reply',
  placeholderText: 'Leave a comment...',
  postDeleteFile: () => {},
  postDeleteImage: () => {},
  onDropError: () => {},
  galleryType: 'inline',
  closedCommentRef: { current: null },
  handleCleanComment: () => {},
};
