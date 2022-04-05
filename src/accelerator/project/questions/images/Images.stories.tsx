import { Story, Meta } from '@storybook/react';
import Images from './Images';
import Props from './Images.types';
import image from '../../../../../__mocks__/image';

export default {
  title: 'Accelerator/Project/Questions/Images',
  component: Images,
  parameters: {
    jest: ['Images.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="active-page">
    <div className="content-step-page">
      <Images {...args} />
    </div>
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  reply: [
    {
      ...image,
      id: 1,
      project_id: 123,
      image: 'whitelabel/20/project-config/5da1f8b5-7686-4760-9b1d-0985f4b1b9a3.jpg',
    },
    {
      ...image,
      id: 2,
      image: 'whitelabel/20/project-config/9c768e0f-62b2-42de-a4f7-cd628202dcce.jpg',
    },
    {
      ...image,
      id: 3,
      image: 'whitelabel/5/project-config/deaa24ad-b67d-4468-b27f-4993c2a4b4b7.jpg',
    },
    {
      ...image,
      id: 4,
      image: 'whitelabel/21/project-config/218fc584-cf8f-4c66-a438-e2699883b45f.jpg',
    },
    {
      ...image,
      id: 5,
      image: 'whitelabel/5/project-config/8f954253-4038-491a-8c0e-c9a6de3ba540.jpg',
    },
    {
      ...image,
      id: 6,
      image: 'whitelabel/5/project-config/be8814f2-0970-4d54-b348-9ed205161928.jpg',
    },
    {
      ...image,
      id: 7,
      image: 'whitelabel/26/project-config/4b120549-cf0c-48f5-916c-e91b6b535d57.jpg',
    },
    { ...image, id: 8 },
  ],
  handleOrderImages: () => {},
  handleDeleteImage: () => {},
  onDropError: () => {},
};
