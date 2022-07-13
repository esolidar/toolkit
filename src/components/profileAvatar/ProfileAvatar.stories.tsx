import { Story, Meta } from '@storybook/react';
import ProfileAvatar from './ProfileAvatar';
import Icon from '../../elements/icon';
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
export const WithDate: Story<Props> = Template.bind({});
export const WithLink: Story<Props> = Template.bind({});
export const WithDefaultThumb: Story<Props> = Template.bind({});
export const WithoutName: Story<Props> = Template.bind({});
export const WithButton: Story<Props> = Template.bind({});

Default.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
  name: 'Joel F. Calheiros',
};

WithDate.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
  name: 'Joel F. Calheiros',
  date: '2022-06-21 15:20:47',
};

WithLink.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
  name: 'Joel F. Calheiros',
  href: 'https://www.esolidar.com/',
};

WithDefaultThumb.args = {
  name: 'Joel F. Calheiros',
};

WithoutName.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
};

WithButton.args = {
  thumb: 'https://cdn.testesolidar.com/users/9/1624275842-THUMB.jpg',
  name: 'Joel F. Calheiros',
  buttonText: 'View program details',
  buttonUrl: 'https://www.esolidar.com/',
  isNameBold: true,
  buttonIconRight: <Icon name="ExternalLink" size="xs" />,
};
