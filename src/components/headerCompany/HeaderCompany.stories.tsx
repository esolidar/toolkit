import React from 'react';
import { Story, Meta } from '@storybook/react';
import HeaderCompany from './HeaderCompany';
import Props from './HeaderCompany.types';
import company from '../../../__mocks__/company';

export default {
  title: 'Components/Header/HeaderCompany',
  component: HeaderCompany,
  parameters: {
    jest: ['HeaderCompany.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5" style={{ maxWidth: '1290px', margin: '0 auto' }}>
    <HeaderCompany {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithoutCover: Story<Props> = Template.bind({});

Default.args = {
  company,
  cdnStaticUrl: 'https://static.esolidar.com',
};

const companyWithoutCover = { ...company };
companyWithoutCover.cover_image = null;

WithoutCover.args = {
  company: companyWithoutCover,
  cdnStaticUrl: 'https://static.esolidar.com',
};
