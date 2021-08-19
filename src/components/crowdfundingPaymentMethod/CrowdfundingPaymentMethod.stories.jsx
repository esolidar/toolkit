import React from 'react';
import CrowdfundingPaymentMethod from './CrowdfundingPaymentMethod';

export default {
  title: 'Components/Crowdfundings/CrowdfundingPaymentMethod',
  component: CrowdfundingPaymentMethod,
};

const Template = args => <CrowdfundingPaymentMethod {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CrowdfundingPaymentMethod.test.js'],
};
Default.args = {
  utrust: 1,
  paypal: 1,
  stripe: 1,
  sibsMbway: 1,
  sibsCc: 1,
  cdnStaticUrl: 'https://static.esolidar.com',
};
