import { Story, Meta } from '@storybook/react';
import CodeExpiredModal from './CodeExpiredModal';
import Props from './CodeExpiredModal.types';

export default {
  title: 'User/Components/CodeExpiredModal',
  component: CodeExpiredModal,
  parameters: {
    jest: ['CodeExpiredModal.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CodeExpiredModal {...args} />;

export const Default: Story<Props> = Template.bind({});

Default.args = {
  showModal: true,
  buttonUrl: '/en/auth/recover-password',
  handleCloseModal: () => {},
};
