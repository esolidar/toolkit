/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardNonProfitList from './CardNonProfitList';
import Props from './CardNonProfitList.types';
import institution from '../../../../__mocks__/institution';

export default {
  title: 'Components/card/CardNonProfitList',
  component: CardNonProfitList,
  parameters: {
    jest: ['CardNonProfitList.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CardNonProfitList {...args} />;

export const GridOne: Story<Props> = Template.bind({});
export const GridTwo: Story<Props> = Template.bind({});
export const GridMulti: Story<Props> = Template.bind({});

GridOne.args = {
  items: [{ ...institution, featured: true }],
  gridType: 'one',
  handleClickDonate: () => {},
};

GridTwo.args = {
  items: [
    { ...institution, featured: true },
    { ...institution, featured: true },
    { ...institution, featured: true },
    { ...institution, featured: true },
  ],
  gridType: 'two',
  handleClickDonate: () => {},
};

GridMulti.args = {
  items: [
    { ...institution, featured: true },
    { ...institution, featured: true },
    { ...institution, featured: true },
    { ...institution, featured: true },
    { ...institution, featured: true },
    { ...institution, featured: true },
  ],
  gridType: 'multi',
  handleClickDonate: () => {},
};
