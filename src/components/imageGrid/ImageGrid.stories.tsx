import { Story, Meta } from '@storybook/react';
import ImageGrid from './ImageGrid';
import Props from './ImageGrid.types';
import images from '../../../__mocks__/images';

export default {
  title: 'Components/ImageGrid',
  component: ImageGrid,
  parameters: {
    jest: ['ImageGrid.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div
    style={{ maxWidth: '645px', padding: '16px', border: '2px solid #0C8380', borderRadius: '8px' }}
  >
    <ImageGrid {...args} />
  </div>
);

export const OneImage: Story<Props> = Template.bind({});
export const TwoImages: Story<Props> = Template.bind({});
export const ThreeImages: Story<Props> = Template.bind({});
export const Multiple: Story<Props> = Template.bind({});
export const Inline: Story<Props> = Template.bind({});

OneImage.args = {
  items: [images[0]],
};

TwoImages.args = {
  items: [images[0], images[1]],
};

ThreeImages.args = {
  items: [images[0], images[1], images[2]],
};

Multiple.args = {
  editMode: true,
  onDeleteImage: () => {
    alert('delete');
  },
  items: images,
};

Inline.args = {
  editMode: true,
  onDeleteImage: () => {
    alert('delete');
  },
  type: 'inline',
  items: images,
};
