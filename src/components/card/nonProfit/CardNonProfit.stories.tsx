/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardNonProfit from './CardNonProfit';
import Props from './CardNonProfit.types';
import institution from '../../../../__mocks__/institution';

export default {
  title: 'Components/card/CardNonProfit',
  component: CardNonProfit,
  parameters: {
    jest: ['CardNonProfit.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: args.inline ? '' : '320px' }}>
    <CardNonProfit {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Featured: Story<Props> = Template.bind({});

Default.args = {
  npo: institution,
  handleClickDonate: () => {},
};

Featured.args = {
  npo: { ...institution, featured: true },
  handleClickDonate: () => {},
};
