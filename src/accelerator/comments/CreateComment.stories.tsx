/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import CreateComment from './CreateComment';
import Props from './CreateComment.types';
import user from '../../../__mocks__/user';
import scraperData from '../../../__mocks__/scraper';
import image from '../../../__mocks__/image';
import images from '../../../__mocks__/images';

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
    const list = [...files];
    form.forEach(file => {
      const data = {
        user_id: 3,
        name: file.name,
        description: file.description,
        file: 'file.pdf',
        file_type: 'jpg',
        file_size: file.file_size,
        public: file.public,
        is_form_file: true,
        id: files.length,
      };
      list.push(data);
    });

    setFiles(list);
  };

  const getScraper = () => {
    const urlData = { ...scraperData };
    setScraper(urlData);
  };

  const postUploadImages = (files: any[]) => {
    const newImages = [...imagesList];
    files.forEach((img, indx) => {
      let newImage = {};
      if (indx === 0) newImage = { ...image, id: indx, image: image.image };
      else newImage = { ...image, id: indx, image: images[indx].image };

      newImages.push(newImage);
    });
    setImagesList(newImages);
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
  onDropError: () => {},
  galleryType: 'grid',
};

Reply.args = {
  isAdmin: false,
  comment: {},
  user,
  type: 'reply',
  placeholderText: 'Leave a comment...',
  postDeleteFile: () => {},
  postDeleteImage: () => {},
  onDropError: () => {},
  galleryType: 'inline',
};
