/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import Props from './Breadcrumbs.types';

export default {
  title: 'Elements/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: '100%' }}>
    <Breadcrumbs {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  breadcrumbs: [
    {
      title: 'Title 1',
      handleClick: () => {},
    },
    {
      title: 'Title 2',
      handleClick: () => {},
    },
    {
      title: 'Title 3',
      handleClick: () => {},
    },
  ],
};
