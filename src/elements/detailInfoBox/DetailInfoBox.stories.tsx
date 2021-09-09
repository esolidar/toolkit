import { Story, Meta } from '@storybook/react';
import DetailInfoBox from './DetailInfoBox';
import Props from './DetailInfoBox.types';

export default {
  title: 'Unreleased/DetailInfoBox',
  component: DetailInfoBox,
  parameters: {
    jest: ['DetailInfoBox.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <DetailInfoBox {...args} />;

export const Default: Story<Props> = Template.bind({});
export const WithoutHeader: Story<Props> = Template.bind({});
export const WithoutBody: Story<Props> = Template.bind({});
export const WithoutOrganized: Story<Props> = Template.bind({});

Default.args = {
  headerChildren: <div>This header is customizable!</div>,
  bodyChildren: <div>This body is customizable!</div>,
  organizedBy: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
  },
  shareNetwork: { title: 'teste' },
};

WithoutHeader.args = {
  bodyChildren: <div>This body is customizable!</div>,
  organizedBy: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
  },
  shareNetwork: { title: 'teste' },
};

WithoutBody.args = {
  headerChildren: <div>This header is customizable!</div>,
  organizedBy: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
  },
  shareNetwork: { title: 'teste' },
};

WithoutOrganized.args = {
  headerChildren: <div>This header is customizable!</div>,
  bodyChildren: <div>This body is customizable!</div>,
  shareNetwork: { title: 'teste' },
};
