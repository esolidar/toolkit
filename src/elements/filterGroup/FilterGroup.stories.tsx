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
export const WithIcon: Story<Props> = Template.bind({});

Default.args = {
  groupName: 'categories',
  onChange: () => {},
  items: [
    {
      title: 'All',
      value: 'all',
    },
    {
      title: 'Environment ',
      value: 'environment ',
    },
    {
      title: 'Social',
      value: 'social',
    },
    {
      title: 'Governance',
      value: 'governance',
    },
  ],
};

WithCounter.args = {
  groupName: 'categories',
  onChange: () => {},
  items: [
    {
      title: 'All',
      value: 'all',
      counter: '3',
    },
    {
      title: 'Environment ',
      value: 'environment ',
      counter: '7',
    },
    {
      title: 'Social',
      value: 'social',
      counter: '3',
    },
    {
      title: 'Governance',
      value: 'governance',
      counter: '2',
      disabled: true,
    },
  ],
};

WithIcon.args = {
  groupName: 'categories',
  onChange: () => {},
  items: [
    {
      title: 'All',
      value: 'all',
      counter: '3',
      icon: 'MyProjects',
    },
    {
      title: 'Environment ',
      value: 'environment ',
      counter: '7',
      icon: 'Projects',
    },
    {
      title: 'Social',
      value: 'social',
      counter: '3',
      icon: 'Activity',
    },
    {
      title: 'Governance',
      value: 'governance',
      counter: '2',
      disabled: true,
      icon: 'Accelerator',
    },
  ],
};
