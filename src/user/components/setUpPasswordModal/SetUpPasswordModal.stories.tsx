import { Story, Meta } from '@storybook/react';
import SetUpPasswordModal from './SetUpPasswordModal';
import Props from './SetUpPasswordModal.types';

export default {
  title: 'User/Components/SetUpPasswordModal',
  component: SetUpPasswordModal,
  parameters: {
    jest: ['SetUpPasswordModal.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <SetUpPasswordModal {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  showModal: true,
  buttonUrl: '/auth/set-password',
  cdnStaticUrl: 'https://static.esolidar.com',
};
