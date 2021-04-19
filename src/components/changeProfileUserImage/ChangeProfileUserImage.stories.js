import ChangeProfileUserImage from './ChangeProfileUserImage';

export default {
  title: 'Components/ChangeProfileUserImage',
  component: ChangeProfileUserImage,
};

const Template = args => <ChangeProfileUserImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // color: {
  //   primaryColor: '#ddd',
  // },
  thumb: 'https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485',
  errors: {},
  onDrop: () => {},
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
};
