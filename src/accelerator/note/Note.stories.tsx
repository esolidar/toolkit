/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Note from './Note';
import Props from './Note.types';
import user from '../../../__mocks__/user';

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

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nunc et lacus hendrerit finibus sit amet vel dui. Mauris vehicula, ante eget varius porttitor, enim massa accumsan magna, nec pellentesque ante leo vel felis. Maecenas ut velit sed odio aliquam posuere posuere nec tortor. Ut pellentesque fringilla eros id finibus. Morbi sit amet tortor vitae enim convallis mollis. Curabitur id accumsan libero. Nam ut rhoncus nunc.<br /><br />Aenean nec finibus neque, vitae facilisis ex. Proin volutpat nisi a mi viverra laoreet. Pellentesque sed leo id ante finibus congue eget eget est. Phasellus non odio turpis. In vel felis non sapien tempus posuere et in sem. Duis eleifend mauris sed volutpat luctus. Cras ullamcorper sagittis porttitor. Ut auctor neque sed mauris pulvinar sodales. Donec purus orci, viverra nec justo vitae, mollis hendrerit sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum lacus sit amet feugiat interdum. Duis vel eleifend dui. Suspendisse sagittis mauris sed molestie mattis. Aenean vestibulum tortor quis tellus scelerisque, id luctus purus mattis. Morbi massa sapien, rutrum vulputate nisi non, faucibus dictum nisl.<br /><br />Praesent quis varius arcu. Pellentesque quis lectus nec lorem maximus tincidunt ac ut sem. Vivamus nunc justo, semper vitae dui at, fermentum mattis mi. Nam placerat, est et blandit lobortis, sapien sem tristique lectus, et interdum sem metus sit amet ante. Donec luctus quis mi nec tincidunt. Ut rutrum eros vel nisl efficitur tempus. Aliquam erat volutpat. Morbi ipsum dolor, consectetur quis tristique non, condimentum accumsan libero.<br /><br />Pellentesque gravida nunc sollicitudin lacus fringilla, sed gravida lorem gravida. Etiam aliquet, lorem nec scelerisque convallis, libero magna varius massa, eget gravida nibh quam eget lacus. Nullam at justo at metus ultrices blandit vel et eros. Nullam eu sapien id libero ornare pulvinar non eu justo. In tempor neque at vehicula rutrum. Sed commodo neque ut congue bibendum. Donec eget nisl erat.<br /><br />Phasellus sem risus, facilisis ut posuere in, facilisis in sem. Pellentesque dictum quis eros sed gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu purus tristique, aliquam lorem condimentum, pellentesque nunc. Donec varius, metus id dapibus imperdiet, orci tortor semper lorem, in tincidunt leo turpis ut urna. Quisque congue quam quis diam condimentum interdum. Donec at est odio.';

Default.args = {
  noteSingleArgs: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    date: new Date('2022-06-21 15:20:47'),
    text,
    user,
  },
};

WithReply.args = {
  noteSingleArgs: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    date: new Date('2022-06-21 15:20:47'),
    text,
    user,
    repliesTotal: 4,
    replies: [
      {
        name: 'Alin Cest',
        thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
        date: new Date('2022-07-01 15:20:47'),
        text: 'Reply 1',
        repliesTotal: 2,
        replies: [
          {
            name: 'Joe Foster',
            thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
            date: new Date('2022-07-02 15:20:47'),
            text: 'Reply to Reply 1',
          },
        ],
      },
      {
        name: 'Jane Doe',
        thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
        date: new Date('2022-07-02 15:20:47'),
        text: 'Reply 2',
      },
      {
        name: 'Jane Doe',
        thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
        date: new Date('2022-07-02 15:20:47'),
        text: 'Reply 3',
      },
    ],
  },
};

WithImages.args = {
  noteSingleArgs: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    date: new Date('2022-06-21 15:20:47'),
    images: [
      {
        created_at: '2022-06-23 16:04:57',
        id: 867,
        image: 'https://picsum.photos/id/1018/1000/600/',
        image_size: null,
        image_type: null,
        streamImage: 'amazons3',
      },
      {
        created_at: '2022-06-23 16:04:57',
        id: 869,
        image: 'https://picsum.photos/id/1018/1000/600/',
        image_size: null,
        image_type: null,
        streamImage: 'amazons3',
      },
      {
        created_at: '2022-06-23 16:04:57',
        id: 879,
        image: 'https://picsum.photos/id/1018/1000/600/',
        image_size: null,
        image_type: null,
        streamImage: 'amazons3',
      },
    ],
    text,
    user,
  },
};

WithFiles.args = {
  noteSingleArgs: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    date: new Date('2022-06-21 15:20:47'),
    files: [
      { title: 'Teste.pdf', size: '1231' },
      { title: 'Teste.pdf', size: '1231' },
    ],
    text,
    user,
  },
};

WithVideo.args = {
  noteSingleArgs: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    date: new Date('2022-06-21 15:20:47'),
    preview: {
      type: 'video',
      videoUrl: 'https://youtu.be/f7x5IeWi0v8',
      videoDetails: {
        providerName: 'youtube',
        thumbnailUrl: 'url(https://img.youtube.com/vi/f7x5IeWi0v8/maxresdefault.jpg)',
        title: 'Como fazer um Programa de Aceleração com a esolidar?',
        videoUrl: '',
      },
    },
    text,
    user,
  },
};
