import DescriptionDetail from './DescriptionDetail';

export default {
  title: 'Components/DescriptionDetail',
  component: DescriptionDetail,
};

const Template = args => <DescriptionDetail {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['DescriptionDetail.test.js'],
};
Default.args = {
  title: 'Description',
  description: 'Test Description',
  showmoreDesc: false,
  showMoreDescButton: false,
};
