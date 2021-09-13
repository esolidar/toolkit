import { Story, Meta } from '@storybook/react';
import ProfileAvatar from './ProfileAvatar';
import Props from './ProfileAvatar.types';

export default {
  title: 'Components/ProfileAvatar',
  component: ProfileAvatar,
  parameters: {
    jest: ['ProfileAvatar.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ProfileAvatar {...args} />;

export const Default: Story<Props> = Template.bind({});
export const WithLink: Story<Props> = Template.bind({});
export const WithoutThumb: Story<Props> = Template.bind({});
export const WithoutName: Story<Props> = Template.bind({});

Default.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
  name: 'Joel F. Calheiros',
};

WithLink.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
  name: 'Joel F. Calheiros',
  href: 'https://www.esolidar.com/',
};

WithoutThumb.args = {
  name: 'Joel F. Calheiros',
};

WithoutName.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
};
