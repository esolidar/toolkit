/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { Story, Meta } from '@storybook/react';
import NewPostBox from './NewPostBox';
import Props from './NewPostBox.types';
import user from '../../../__mocks__/user';
import post from '../../../__mocks__/post';

export default {
  title: 'Components/Feed/NewPostBox',
  component: NewPostBox,
  parameters: {
    jest: ['NewPostBox.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5" style={{ maxWidth: '600px' }}>
    <NewPostBox {...args} />
  </div>
);

const TemplateOpen: Story<Props> = (args: Props) => {
  useEffect(() => {
    const div = document.getElementById('feed-create-post');
    div.click();
  }, []);

  return (
    <div className="mt-5" style={{ maxWidth: '600px' }}>
      <NewPostBox {...args} />
    </div>
  );
};

export const WithLogin: Story<Props> = Template.bind({});
export const WithoutLogin: Story<Props> = Template.bind({});
export const FocusBox: Story<Props> = TemplateOpen.bind({});
export const FocusBoxWithShare: Story<Props> = TemplateOpen.bind({});
export const FocusBoxWithImages: Story<Props> = TemplateOpen.bind({});
export const FocusBoxWithShareAndImages: Story<Props> = TemplateOpen.bind({});
export const EditPost: Story<Props> = Template.bind({});

WithLogin.args = {
  user,
  companyId: 1,
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: true,
};

FocusBox.args = {
  user,
  companyId: 1,
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: true,
};

FocusBoxWithShare.args = {
  user,
  companyId: 1,
  scraper: {
    description:
      'Combine everything you need for ESG, CSR, and sustainability management in one place. Be empowered to raise awareness of what you care about and create a goodness-driven company culture.',
    domain: 'www.esolidar.com',
    link: 'https://www.esolidar.com/?locale=pt',
    og_description:
      'Combine everything you need for ESG, CSR, and sustainability management in one place. Be empowered to raise awareness of what you care about and create a goodness-driven company culture.',
    og_image:
      'https://uploads-ssl.webflow.com/60772889b1dfccd8c9417886/60a232f26727e36d393b6a1f_social_share.png',
    og_title: 'esolidar | Helping you, help others!',
    title: 'esolidar | Helping you, help others!',
  },
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: true,
};

FocusBoxWithImages.args = {
  user,
  companyId: 1,
  imagesResponse: {
    images: [
      {
        id: 1,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/7318d807-f86a-47e7-85dd-ad795d01c2f7.jpg',
      },
      {
        id: 2,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/aceb1dfc-e67e-4c38-aebf-29fcc0a1e4be.jpg',
      },
      {
        id: 3,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/9981bda0-0342-4c7f-9beb-cf56ed4aee40.jpg',
      },
      {
        id: 4,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/5b5013d0-4c26-4db8-8a2a-6d2af3467e76.jpg',
      },
      {
        id: 5,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/6097d803-c2bd-4809-bd8b-84691bb67d7b.jpg',
      },
    ],
  },
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: true,
};

FocusBoxWithShareAndImages.args = {
  user,
  companyId: 1,
  scraper: {
    description:
      'Combine everything you need for ESG, CSR, and sustainability management in one place. Be empowered to raise awareness of what you care about and create a goodness-driven company culture.',
    domain: 'www.esolidar.com',
    link: 'https://www.esolidar.com/?locale=pt',
    og_description:
      'Combine everything you need for ESG, CSR, and sustainability management in one place. Be empowered to raise awareness of what you care about and create a goodness-driven company culture.',
    og_image:
      'https://uploads-ssl.webflow.com/60772889b1dfccd8c9417886/60a232f26727e36d393b6a1f_social_share.png',
    og_title: 'esolidar | Helping you, help others!',
    title: 'esolidar | Helping you, help others!',
  },
  imagesResponse: {
    images: [
      {
        id: 1,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/7318d807-f86a-47e7-85dd-ad795d01c2f7.jpg',
      },
      {
        id: 2,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/aceb1dfc-e67e-4c38-aebf-29fcc0a1e4be.jpg',
      },
      {
        id: 3,
        image:
          'https://esolidar-proto-uploads.s3.eu-west-1.amazonaws.com/feed/9981bda0-0342-4c7f-9beb-cf56ed4aee40.jpg',
      },
    ],
  },
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: true,
};

WithoutLogin.args = {
  user: null,
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: false,
};

EditPost.args = {
  user,
  post,
  feedPost: () => {},
  feedUploadGallery: () => {},
  deleteImages: () => {},
  loginAction: () => {
    alert('Open login modal');
  },
  feedWebScrapter: (a, b) => {
    alert(`get scrapter ${b}`);
  },
  isLoggedIn: true,
};
