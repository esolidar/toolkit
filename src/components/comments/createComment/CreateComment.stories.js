import CreateComment from './CreateComment';

export default {
  title: 'Components/Comments/CreateComment',
  component: CreateComment,
};

const Template = args => <CreateComment {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CreateComment.test.js'],
};
Default.args = {
  env: 'https://static.testesolidar.com',
  user: {
    id: 9,
  },
  commen: '',
  thumb: 'https://cdn.testesolidar.com/users/9/1591351190-THUMB.jpg',
};
