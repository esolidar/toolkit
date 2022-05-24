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

const Template: Story<Props> = (args: Props) => (
  <div style={{ padding: '20px' }}>
    <DropdownLabelGroup {...args} />
  </div>
);

const TemplateBlack: Story<Props> = (args: Props) => (
  <div style={{ background: '#071721', width: '500px', height: '200px', padding: '20px' }}>
    <DropdownLabelGroup {...args} />
  </div>
);
export const Default = Template.bind({});
export const Transparent = TemplateBlack.bind({});

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

Transparent.args = {
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
  transparent: true,
};
