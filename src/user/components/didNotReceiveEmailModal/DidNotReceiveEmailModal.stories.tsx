import { Story, Meta } from '@storybook/react';
import DidNotReceiveEmailModal from './DidNotReceiveEmailModal';
import Props from './DidNotReceiveEmailModal.types';

export default {
  title: 'User/Components/DidNotReceiveEmailModal',
  component: DidNotReceiveEmailModal,
  parameters: {
    jest: ['DidNotReceiveEmailModal.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <DidNotReceiveEmailModal {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  showModal: true,
  buttonUrl: () => {},
  handleCloseModal: () => {},
};
