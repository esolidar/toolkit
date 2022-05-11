import { Story, Meta } from '@storybook/react';
import UploadDocumentModal from './UploadDocumentModal';
import Props from './UploadDocumentModal.types';

export default {
  title: 'Components/UploadDocumentModal',
  component: UploadDocumentModal,
  parameters: {
    jest: ['UploadDocumentModal.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <UploadDocumentModal {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  openModal: true,
};
