/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import CardProject from './CardProject';
import Props from './CardProject.types';
import project from '../../../../__mocks__/project';

export default {
  title: 'Unreleased/Card/CardProject',
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
export const WithoutStatus: Story<Props> = Template.bind({});
export const WithKebakMenu: Story<Props> = Template.bind({});
export const Draft: Story<Props> = Template.bind({});

Default.args = {
  project,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
};

WithoutStatus.args = {
  project,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
  showStatus: false,
};

WithKebakMenu.args = {
  project,
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
  showStatus: false,
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'Edit2',
      onClick: () => {
        alert('Clicked edit');
      },
      show: true,
      text: 'Edit',
    },
    {
      id: 1,
      leftIcon: 'Trash',
      onClick: () => {
        alert('Clicked delete');
      },
      show: true,
      text: 'Delete',
    },
  ],
};

Draft.args = {
  project: {
    images: [],
    ods: [],
    title: '',
    status: 'DRAFT',
    user: project.user,
  },
  clickThumb: () => alert('clicked'),
  communityUrl: 'https://community.testesolidar.com/',
  currency: 'EUR',
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'Edit2',
      onClick: () => {
        alert('Clicked edit');
      },
      show: true,
      text: 'Edit',
    },
    {
      id: 1,
      leftIcon: 'Trash',
      onClick: () => {
        alert('Clicked delete');
      },
      show: true,
      text: 'Delete',
    },
  ],
};
