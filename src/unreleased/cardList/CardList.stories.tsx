import { Story, Meta } from '@storybook/react';
import CardList from './CardList';
import Props from './CardList.types';
import crowdfunding from '../../../__mocks__/crowdfunding';
import auction from '../../../__mocks__/auction';

export default {
  title: 'Unreleased/CardList',
  component: CardList,
  parameters: {
    jest: ['CardList.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <CardList {...args} />
  </div>
);

export const Default = Template.bind({});
export const WithoutTitleAndSubtitle = Template.bind({});
export const SeeAll: Story<Props> = Template.bind({});

Default.args = {
  title: 'Initiatives',
  subtitle: 'Initiatives supporting the project',
  list: {
    total: 15,
    per_page: 1,
    current_page: 1,
    data: [crowdfunding, crowdfunding, crowdfunding, crowdfunding],
  },
  hasListFooter: true,
};

// WithoutTitleAndSubtitle.args = {
//   list: {
//     total: 15,
//     per_page: '1',
//     current_page: 1,
//     data: [crowdfunding],
//   },
//   hasListFooter: true,
// };

// SeeAll.args = {
//   title: 'Initiatives',
//   subtitle: 'Initiatives supporting the project',
//   list: {
//     total: 15,
//     per_page: '1',
//     current_page: 1,
//   },
//   seeAll: {
//     url: 'https://www.google.com',
//   },
// };
