import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
};

const Template = args => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  loadingClass: '',
  message: 'Lorem Ipsum',
  curtain: false,
};
