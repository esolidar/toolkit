import CrowdfundingProgressBar from './CrowdfundingProgressBar';

export default {
  title: 'Components/Crowdfundings/CrowdfundingProgressBar',
  component: CrowdfundingProgressBar,
};

const Template = args => <CrowdfundingProgressBar {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CrowdfundingProgressBar.test.js'],
};
Default.args = {
  contributesSum: 7,
  goal: 9,
};
