/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardProject from './CardProject';
import Props from './CardProject.types';
import project from '../../../../__mocks__/project';

export default {
  title: 'Unreleased/Card/project',
  component: CardProject,
  parameters: {
    jest: ['Card.test.tsx'],
  },
  argTypes: {
    currency: {
      options: ['EUR', 'USD', 'BRL', 'GBP'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '325px' }}>
    <CardProject {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  project,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};
