/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import WizardPaginator from './WizardPaginator';
import Props from './WizardPaginator.types';

export default {
  title: 'Components/Wizard/WizardPaginator',
  component: WizardPaginator,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: '100%' }}>
    <WizardPaginator {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  pages: [
    {
      title: 'General details',
      status: 'done',
      active: false,
    },
    {
      title: 'Categories ',
      status: 'not-done',
      active: true,
    },
    {
      title: 'Skills & Interests',
      status: 'not-done',
      active: false,
    },
    {
      title: 'Application form',
      status: 'not-done',
      active: false,
    },
  ],
  cdnStaticUrl: 'https://static.esolidar.com',
};
