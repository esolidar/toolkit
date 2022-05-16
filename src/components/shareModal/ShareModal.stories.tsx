import { Story, Meta } from '@storybook/react';
import ShareModal from './ShareModal';
import Props from './ShareModal.types';

export default {
  title: 'Components/ShareModal',
  component: ShareModal,
  parameters: {
    jest: ['ShareModal.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ShareModal {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  openModal: true,
  title: 'Lorem ipsum Title',
  windowLocationHref: 'linkto.esolidar.com/xpto',
};
