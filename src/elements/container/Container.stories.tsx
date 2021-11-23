/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Container from './Container';
import Props from './Container.types';

export default {
  title: 'Elements/Container',
  component: Container,
  parameters: {
    jest: ['Card.test.tsx'],
  },
  argTypes: {
    borderSize: {
      options: [0, 1, 2],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: '100%' }}>
    <Container {...args}>
      <div>Content here</div>
    </Container>
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  rounded: true,
  shadow: true,
  background: true,
  borderSize: 2,
};
