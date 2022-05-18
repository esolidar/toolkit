import { Story, Meta } from '@storybook/react';
import Props from './DropdownLabelGroup.types';
import DropdownLabelGroup from './DropdownLabelGroup';

export default {
  title: 'Elements/DropdownLabelGroup',
  component: DropdownLabelGroup,
  parameters: {
    jest: ['DropdownLabelGroup.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <DropdownLabelGroup {...args} />;
export const Default = Template.bind({});

Default.args = {
  labelText: '345cUSD',
  dropdownText: 'z0x7F38...fD41',
  dropdownItems: [
    {
      id: 0,
      text: 'Disconect',
      leftIcon: 'DeleteCircle',
    },
  ],
  fullWidth: false,
};
