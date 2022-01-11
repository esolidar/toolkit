import { Story, Meta } from '@storybook/react';
import MultiSelectField from './MultiSelectField';
// import Props from './MultiSelect.types';

export default {
  title: 'Elements/MultiSelectField',
  component: MultiSelectField,
  parameters: {
    jest: ['MultiSelectField.test.js'],
  },
} as Meta;

const Template: Story = args => <MultiSelectField {...args} />;

export const Default: Story = Template.bind({});

Default.args = {
  name: 'sdgs',
  showSelectAll: true,
  valueText: 'All SDGs',
  options: [
    { value: '1', label: 'No poverty' },
    { value: '2', label: 'Zero hunger' },
    { value: '3', label: 'Good health' },
    { value: '4', label: '...' },
  ],
  labelHeader: <span>Sustainable Development Goals (SDG)</span>,
  onChange: selected => {
    // eslint-disable-next-line no-console
    console.log(selected);
  },
};
