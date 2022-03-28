import { Story, Meta } from '@storybook/react';
import DeleteProjectModal from './DeleteProjectModal';
import Props from './DeleteProjectModal.types';

export default {
  title: 'Components/Modals/DeleteProjectModal',
  component: DeleteProjectModal,
  parameters: {
    jest: ['DeleteProjectModal.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <DeleteProjectModal {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  isOpen: true,
  onClickConfirm: () => {
    alert('Clicked delete');
  },
  onClickCancel: () => {
    alert('Clicked cancel');
  },
};
