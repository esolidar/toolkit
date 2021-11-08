/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import BoxInfo from './BoxInfo';
import Props from './BoxInfo.types';

export default {
  title: 'Unreleased/BoxInfo',
  component: BoxInfo,
  parameters: {
    jest: ['BoxInfo.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '750px' }}>
    <BoxInfo {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  text: 'Accelerate projects that promote innovative solutions in solving social and environmental problems and needs',
  buttonText: 'Create program',
  buttonClass: 'dark',
  handleClickButton: () => {},
};
