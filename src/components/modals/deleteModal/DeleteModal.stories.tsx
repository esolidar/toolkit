import { Story, Meta } from '@storybook/react';
import DeleteModal from './DeleteModal';
import Props from './DeleteModal.types';

export default {
  title: 'Components/Modals/DeleteModal',
  component: DeleteModal,
  parameters: {
    jest: ['DeleteModal.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <DeleteModal {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  isOpen: true,
  title: 'Delete Project?',
  bodyText: 'By deleting, you won’t recover the project’s data and files.',
  onClickDelete: () => {
    alert('Clicked delete');
  },
  onClickCancel: () => {
    alert('Clicked cancel');
  },
};
