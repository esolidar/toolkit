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
  title: 'Esolidar be the change',
  windowLocationHref:
    'https://bethechange.esolidar.com/pt/needs/crowdfunding/detail/174-apoie-as-pessoas-diretamente-afetadas-pela-guerra-na-ucrania',
};
