import NoMatch from './NoMatch';

export default {
  title: 'Components/NoMatch',
  component: NoMatch,
};

const Template = args => <NoMatch {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['NoMatch.test.js'],
};
Default.args = {
  color: '#d1d1d1',
};
