import { Story, Meta } from '@storybook/react';
import DiscardChangesModal from './DiscardChangesModal';
import Props from './DiscardChangesModal.types';

export default {
  title: 'Components/Modals/DiscardChangesModal',
  component: DiscardChangesModal,
  parameters: {
    jest: ['DiscardChangesModal.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <DiscardChangesModal {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  isOpen: true,
  onClickConfirm: () => {
    alert('Clicked confirm');
  },
  onClickCancel: () => {
    alert('Clicked cancel');
  },
};
