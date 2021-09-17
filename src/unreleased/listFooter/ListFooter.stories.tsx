import { Story, Meta } from '@storybook/react';
import list from '../../../__mocks__/list';
import ListFooter from './ListFooter';
import Props from './ListFooter.types';

export default {
  title: 'Unreleased/ListFooter',
  component: ListFooter,
  parameters: {
    jest: ['ListFooter.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <ListFooter {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  labelResultText: 'Crowdfundings',
  onChangeSelectPerPage: () => {},
  onChangePagination: () => {},
  total: list.total,
  current_page: list.current_page,
  per_page: list.per_page,
};
