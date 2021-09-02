import { Story, Meta } from '@storybook/react';
import DetailTitle from './DetailTitle';
import Props from './DetailTitle.types';

export default {
  title: 'Unreleased/DetailTitle',
  component: DetailTitle,
  parameters: {
    jest: ['DetailTitle.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <DetailTitle {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithoutSupportUrl: Story<Props> = Template.bind({});
export const TitleOnly: Story<Props> = Template.bind({});

Default.args = {
  title: 'Crowdfunding title',
  supportingName: 'Helpo',
  supportingUrl: 'https://community.testesolidar.com/pt/npo/detail/30-helpo/',
  goBackUrl: '#',
};

TitleOnly.args = {
  title: 'Crowdfunding title',
};

WithoutSupportUrl.args = {
  title: 'Crowdfunding title',
  supportingName: 'Joel Calheiros',
  goBackUrl: '#',
};
