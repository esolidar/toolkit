import React from 'react';
import StatisticsBox from './StatisticsBox';

export default {
  title: 'Components/StatisticsBox',
  component: StatisticsBox,
};

const Template = args => <StatisticsBox {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['StatisticsBox.test.js'],
};
Default.args = {
  features: [
    { title: 'Raised', statistics: '$279.47', subtitle: '0% growth last quarter' },
    { title: 'Auctions', statistics: '4', subtitle: '0% growth last quarter' },
    { title: 'Bids', statistics: '152', subtitle: '0% growth last quarter' },
  ],
  footer: [
    {
      title: 'Raised',
      iconClass: 'icon-icon-manage-employees',
      statistics: '$279.47',
      subtitle: '0% growth last quarter',
    },
    {
      title: 'Auctions',
      iconClass: 'icon-ic-charities-benefited',
      statistics: '4',
      subtitle: '0% growth last quarter',
    },
    {
      title: 'Bids',
      iconClass: 'icon-ic-donations',
      statistics: '152',
      subtitle: '0% growth last quarter',
    },
  ],
};
