/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import CreateComment from './CreateComment';
import Props from './CreateComment.types';
import user from '../../../__mocks__/user';
import scraperData from '../../../__mocks__/scraper';
import image from '../../../__mocks__/image';

export default {
  title: 'Accelerator/Comment/Create',
  component: CreateComment,
  parameters: {
    jest: ['Overview.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [files, setFiles] = useState<any[]>([]);
  const [scrapper, setScraper] = useState<any>(null);
  const [imagesList, setImagesList] = useState<any[]>([]);

  const postFiles = form => {
    const data = {
      user_id: 3,
      name: form.name,
      description: form.description,
      file: 'file.pdf',
      file_type: 'jpg',
      file_size: form.file_size,
      public: form.public,
      is_form_file: true,
      id: files.length,
    };
    const list = [...files];
    list.push(data);
    setFiles(list);
  };

  const getScraper = () => {
    const urlData = { ...scraperData };
    setScraper(urlData);
  };

  const postUploadImages = () => {
    const images = [...imagesList];
    images.push(image);
    setImagesList(images);
  };

  return (
    <CreateComment
      {...args}
      postUploadFiles={postFiles}
      files={files}
      getScraper={getScraper}
      scrapper={scrapper}
      postUploadImages={postUploadImages}
      images={imagesList}
    />
  );
};

export const Default: Story<Props> = Template.bind({});
export const Reply: Story<Props> = Template.bind({});

Default.args = {
  isAdmin: false,
  comment: {},
  user,
  placeholderText: 'Share ideas, suggestions or initiaves for this project...',
  postDeleteFile: () => {},
  postDeleteImage: () => {},
};

Reply.args = {
  isAdmin: false,
  comment: {},
  user,
  type: 'reply',
  placeholderText: 'Leave a comment...',
  postDeleteFile: () => {},
  postDeleteImage: () => {},
};
