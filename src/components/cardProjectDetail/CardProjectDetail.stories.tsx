import { Story, Meta } from '@storybook/react';
import CardProjectDetail from './CardProjectDetail';
import Props from './CardProjectDetail.types';
import sdgList from '../../../__mocks__/sdgList';

export default {
  title: 'Components/projects/CardProjectDetail',
  component: CardProjectDetail,
  argTypes: {
    status: {
      options: ['DRAFT', 'PENDING', 'IN_REVIEW', 'REVIEWED', 'REJECTED', 'APPROVED', 'COMPLETED'],
      control: { type: 'select' },
    },
  },
  parameters: {
    jest: ['CardProjectDetail.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CardProjectDetail {...args} />;

export const Default: Story<Props> = Template.bind({});
export const Admin: Story<Props> = Template.bind({});
export const Loading: Story<Props> = Template.bind({});

Default.args = {
  status: 'PENDING',
  odsList: sdgList.data.slice(0, 5),
  organizedBy: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    buttonUrl: 'https://www.esolidar.com/',
  },
  rating: 0,
};

Admin.args = {
  status: 'APPROVED',
  odsList: sdgList.data.slice(0, 9),
  organizedBy: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    buttonUrl: 'https://www.esolidar.com/',
  },
  rating: 4,
  isAdmin: true,
};

Loading.args = {
  status: 'PENDING',
  organizedBy: {
    thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
    name: 'Joel F. Calheiros',
    buttonUrl: 'https://www.esolidar.com/',
  },
  rating: 0,
  isLoading: true,
};
