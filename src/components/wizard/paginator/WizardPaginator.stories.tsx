/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import WizardPaginator from './WizardPaginator';
import Props from './WizardPaginator.types';
import PAGES from '../../../constants/pages';

const pages = {
  published: false,
  active: 'generalDetails',
  edited: [],
  done: ['skillsAndInterests', 'applicationForm'],
};

export default {
  title: 'Components/Wizard/WizardPaginator',
  component: WizardPaginator,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [paginator, setPaginator] = useState(pages);

  const handleChangeTab = newPage => {
    const newPaginator = { ...paginator };
    newPaginator.active = PAGES[newPage];

    setPaginator(newPaginator);
  };

  return (
    <div style={{ width: '100%' }}>
      <WizardPaginator pages={paginator} {...args} handleChangeTab={handleChangeTab} />
    </div>
  );
};

export const Default: Story<Props> = Template.bind({});
export const Published: Story<Props> = Template.bind({});
export const Old: Story<Props> = Template.bind({});

Default.args = {};

Published.args = {
  pages: {
    published: true,
    active: 'locationTime',
    edited: ['generalDetails', 'categories'],
    done: ['locationTime', 'categories'],
  },
};

Old.args = {
  handleChangeTab: () => {},
  pages: [
    {
      title: 'General details',
      status: 'done',
      active: false,
    },
    {
      title: 'Location & Time',
      status: 'not-done',
      active: true,
    },
    {
      title: 'Categories',
      status: 'not-done',
      active: true,
    },
    {
      title: 'Skills & Interests',
      status: 'done',
      active: false,
    },
    {
      title: 'Application form',
      status: 'not-done',
      active: false,
    },
  ],
};
