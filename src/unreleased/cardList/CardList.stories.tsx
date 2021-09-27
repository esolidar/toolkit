import { Story, Meta } from '@storybook/react';
import CardList from './CardList';
import { Props } from './CardList.types';
import crowdfunding from '../../../__mocks__/crowdfunding';
import auction from '../../../__mocks__/auction';

export default {
  title: 'Unreleased/CardList',
  component: CardList,
  parameters: {
    jest: ['CardList.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CardList {...args} />;

export const Default = Template.bind({});
export const WithoutTitleAndSubtitle = Template.bind({});
export const WithButton = Template.bind({});
export const ListAuctions = Template.bind({});

Default.args = {
  title: 'Initiatives',
  subtitle: 'Initiatives supporting the project',
  list: {
    data: [crowdfunding, crowdfunding, crowdfunding, crowdfunding, auction],
  },
  footer: {
    perPageOptions: [6],
    total: 4,
    per_page: 6,
    current_page: 1,
  },
  onClickThumb: () => {
    alert('You clicked donate!');
  },
};

WithoutTitleAndSubtitle.args = {
  list: {
    data: [crowdfunding, crowdfunding],
  },
  footer: {
    perPageOptions: [6],
    per_page: 6,
    current_page: 1,
    total: 2,
  },
  onClickThumb: () => {
    alert('You clicked donate!');
  },
};

WithButton.args = {
  title: 'Initiatives',
  subtitle: 'Initiatives supporting the project',
  list: {
    data: [crowdfunding, crowdfunding],
  },
  button: {
    url: 'https://joel.testesolidar.com/pt/crowdfunding/list',
    text: 'see.all',
  },
  onClickThumb: () => {
    alert('You clicked donate!');
  },
};

ListAuctions.args = {
  title: 'Initiatives',
  subtitle: 'Initiatives supporting the project',
  list: {
    data: [auction, auction, auction, auction],
  },
  footer: {
    perPageOptions: [6],
    total: 4,
    per_page: 6,
    current_page: 1,
  },
  onClickThumb: () => {
    alert('You clicked donate!');
  },
};
