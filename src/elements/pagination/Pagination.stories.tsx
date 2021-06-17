import { Story, Meta } from '@storybook/react';
import Pagination from './Pagination';
import Props from './Pagination.types';

export default {
  title: 'Elements/Pagination',
  component: Pagination,
  parameters: {
    jest: ['Pagination.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <Pagination {...args} />
  </div>
);

export const WithPrevAndNextPage: Story<Props> = Template.bind({});
export const WhithoutNextAndPrevPage: Story<Props> = Template.bind({});

WithPrevAndNextPage.args = {
  activePage: 1,
  itemsCountPerPage: 5,
  totalItemsCount: 10,
  onChange: () => {},
};

WhithoutNextAndPrevPage.args = {
  activePage: 1,
  itemsCountPerPage: 10,
  totalItemsCount: 10,
  onChange: () => {},
};
