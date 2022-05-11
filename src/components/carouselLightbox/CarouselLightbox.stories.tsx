import { Story, Meta } from '@storybook/react';
import CarouselLightbox from './CarouselLightbox';
import Props from './CarouselLightbox.types';

export default {
  title: 'Components/CarouselLightbox',
  component: CarouselLightbox,
  parameters: {
    jest: ['CarouselLightbox.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '580px' }}>
    <CarouselLightbox {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const OneImageOnly: Story<Props> = Template.bind({});
export const Youtube: Story<Props> = Template.bind({});
export const Vimeo: Story<Props> = Template.bind({});

OneImageOnly.args = {
  listItems: [
    {
      url: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      altTag: '1019',
      type: 'photo',
    },
  ],
};

Youtube.args = {
  listItems: [
    {
      url: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      altTag: '1018',
      type: 'photo',
    },
    {
      url: 'https://www.youtube.com/embed/a4jSanwdEj0',
      thumbnail: 'https://img.youtube.com/vi/a4jSanwdEj0/maxresdefault.jpg',
      altTag: 'a4jSanwdEj0',
      type: 'video',
    },
    {
      url: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      altTag: '1015',
      type: 'photo',
    },
  ],
};

Vimeo.args = {
  listItems: [
    {
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail:
        'https://i.vimeocdn.com/video/452001751-8216e0571c251a09d7a8387550942d89f7f86f6398f8ed886e639b0dd50d3c90-d',
      altTag: '76979871',
      type: 'video',
    },
    {
      url: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      altTag: '1018',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      altTag: '1015',
      type: 'photo',
    },
  ],
};

Default.args = {
  listItems: [
    {
      url: 'https://www.youtube.com/embed/a4jSanwdEj0',
      thumbnail: 'https://img.youtube.com/vi/a4jSanwdEj0/maxresdefault.jpg',
      altTag: 'a4jSanwdEj0',
      type: 'video',
    },
    {
      url: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      altTag: '1018',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      altTag: '1015',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      altTag: '1019',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1020/1000/600/',
      thumbnail: 'https://picsum.photos/id/1020/250/150/',
      altTag: '1020',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1021/1000/600/',
      thumbnail: 'https://picsum.photos/id/1021/250/150/',
      altTag: '1021',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1022/1000/600/',
      thumbnail: 'https://picsum.photos/id/1022/250/150/',
      altTag: '1022',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1024/1000/600/',
      thumbnail: 'https://picsum.photos/id/1024/250/150/',
      altTag: '1024',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1025/1000/600/',
      thumbnail: 'https://picsum.photos/id/1025/250/150/',
      altTag: '1025',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1026/1000/600/',
      thumbnail: 'https://picsum.photos/id/1026/250/150/',
      altTag: '1026',
      type: 'photo',
    },
    {
      url: 'https://picsum.photos/id/1027/1000/600/',
      thumbnail: 'https://picsum.photos/id/1027/250/150/',
      altTag: '1027',
      type: 'photo',
    },
    {
      url: 'https://player.vimeo.com/video/76979871',
      thumbnail:
        'https://i.vimeocdn.com/video/452001751-8216e0571c251a09d7a8387550942d89f7f86f6398f8ed886e639b0dd50d3c90-d',
      altTag: '76979871',
      type: 'video',
    },
    {
      url: 'https://picsum.photos/id/1028/1000/600/',
      thumbnail: 'https://picsum.photos/id/1028/250/150/',
      altTag: '1028',
      type: 'photo',
    },
  ],
};
