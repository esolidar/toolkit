/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Viewport from './Viewport';
import Props from './Viewport.types';

export default {
  title: 'Components/Viewport',
  component: Viewport,
  parameters: {
    jest: ['Viewport.test.js'],
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: '100%' }}>
    <Viewport {...args}>
      <div>Content here</div>
    </Viewport>
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {};
