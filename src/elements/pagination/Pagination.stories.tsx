import { Story, Meta } from '@storybook/react';
import Pagination from './Pagination';
import Props from './Pagination.types';

export default {
  title: 'Elements/Pagination',
  component: Pagination,
  argTypes: {
    arrowType: {
      options: [0, 1],
      control: { type: 'radio' },
    },
  },
  parameters: {
    jest: ['Pagination.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <Pagination {...args} />
  </div>
);

export const WithArrowType0: Story<Props> = Template.bind({});
export const WithArrowType1: Story<Props> = Template.bind({});

WithArrowType0.args = {
  activePage: 2,
  itemsCountPerPage: 5,
  totalItemsCount: 50,
  onChange: newPage => alert(`Changed to page ${newPage}`),
  arrowType: 0,
  dataTestId: 'pagination',
};

WithArrowType1.args = {
  activePage: 2,
  itemsCountPerPage: 5,
  totalItemsCount: 50,
  onChange: newPage => alert(`Changed to page ${newPage}`),
  dataTestId: 'pagination',
};
