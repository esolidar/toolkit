import { Story, Meta } from '@storybook/react';
import ChangeProfileUserImage from './ChangeProfileUserImage';
import { Props } from './ChangeProfileUserImage.types';

export default {
  title: 'Components/ChangeProfileUserImage',
  component: ChangeProfileUserImage,
  parameters: {
    jest: ['ChangeProfileUserImage.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ChangeProfileUserImage {...args} />;

export const Default = Template.bind({});
export const NoProfilePicture = Template.bind({});

Default.args = {
  thumb: 'https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485',
  errors: {},
  onDrop: () => {},
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
};

NoProfilePicture.args = {
  thumb: 'https://static.testesolidar.com/frontend/assets/no-image/upload.svg',
  errors: {},
  onDrop: () => {},
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
    cdnStatic: 'https://static.testesolidar.com',
  },
};
