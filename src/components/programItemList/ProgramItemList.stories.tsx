import { Story, Meta } from '@storybook/react';
import React from 'react';
import ProgramItemList from './ProgramItemList';
import Props from './ProgramItemList.types';

export default {
  title: 'Components/ProgramItemList',
  component: ProgramItemList,
  parameters: {
    jest: ['ProgramItemList.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <ProgramItemList {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Draft: Story<Props> = Template.bind({});

Default.args = {
  id: 1,
  image: 'some-image.png',
  title: 'Some title',
  summary: 'Some description text',
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'ExternalLink',
      onClick: () => {},
      show: true,
      text: 'Option',
    },
  ],
  isLive: true,
  isDraft: false,
  handleClickItem: () => {},
};

Draft.args = {
  id: 1,
  image: 'some-image.png',
  title: '',
  summary: '',
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'ExternalLink',
      onClick: () => {},
      show: true,
      text: 'Option',
    },
  ],
  isLive: false,
  isDraft: true,
  handleClickItem: () => {},
};
