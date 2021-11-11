import { Story, Meta } from '@storybook/react';
import FilterGroup from './FilterGroup';
import Props from './FilterGroup.types';

export default {
  title: 'Elements/FilterGroup',
  component: FilterGroup,
  parameters: {
    jest: ['Pagination.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <FilterGroup {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithCounter: Story<Props> = Template.bind({});

Default.args = {
  groupName: 'categories',
  onChange: () => {},
  items: [
    {
      title: 'All',
    },
    {
      title: 'Environment ',
    },
    {
      title: 'Social',
    },
    {
      title: 'Governance',
    },
  ],
};

WithCounter.args = {
  groupName: 'categories',
  onChange: () => {},
  items: [
    {
      title: 'All',
      counter: '3',
    },
    {
      title: 'Environment ',
      counter: '7',
    },
    {
      title: 'Social',
      counter: '3',
    },
    {
      title: 'Governance',
      counter: '2',
      disabled: true,
    },
  ],
};
