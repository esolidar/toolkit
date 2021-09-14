/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import ListElement from './ListElement';
import Props from './ListElement.types';
import Company from '../../../__mocks__/company';

export default {
  title: 'Elements/ListElement',
  component: ListElement,
  parameters: {
    jest: ['ListElement.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ListElement {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Minimal: Story<Props> = Template.bind({});

Default.args = {
  onClick: () => {
    alert('you clicked');
  },
  name: Company.name,
  email: Company.email,
  imageSrc: Company?.thumbs?.thumb,
};

Minimal.args = {
  onClick: () => {
    alert('you clicked');
  },
  name: Company.name,
  imageSrc: Company?.thumbs?.thumb,
};
