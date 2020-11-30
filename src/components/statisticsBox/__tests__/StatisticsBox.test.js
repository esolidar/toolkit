/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import StatisticsBox from '../StatisticsBox';

const propFeatures = [
  { title: 'Raised', statistics: '$279.47', subtitle: '0% growth last quarter' },
  { title: 'Auctions', statistics: '4', subtitle: '0% growth last quarter' },
  { title: 'Bids', statistics: '152', subtitle: '0% growth last quarter' },
];

const propFooter = [
  {
    title: 'Raised', iconClass: 'icon-icon-manage-employees', statistics: '$279.47', subtitle: '0% growth last quarter',
  },
  {
    title: 'Auctions', statistics: '4', subtitle: '0% growth last quarter',
  },
  {
    title: 'Bids', iconClass: 'icon-ic-donations', statistics: '152', subtitle: '0% growth last quarter',
  },
];

describe('StatisticsBox component', () => {
  it('renders StatisticsBoxv correctly', () => {
    const component = shallow(<StatisticsBox features={propFeatures} />);
    expect(component).toHaveLength(1);
  });

  it('StatisticsBox component with 3 features', () => {
    const component = shallow(<StatisticsBox features={propFeatures} />);
    expect(component.find('.stats-box')).toHaveLength(3);
  });

  it('StatisticsBox component without footer', () => {
    const component = shallow(<StatisticsBox features={propFeatures} />);
    expect(component.find('.stats-bottom')).toHaveLength(0);
  });

  it('StatisticsBox component with 3 footer lines', () => {
    const component = shallow(<StatisticsBox features={propFeatures} footer={propFooter} />);
    expect(component.find('[data-testid="footer-row"]')).toHaveLength(3);
  });

  it('StatisticsBox component with 3 footer lines and 2 Icons', () => {
    const component = shallow(<StatisticsBox features={propFeatures} footer={propFooter} />);
    expect(component.find('Icon')).toHaveLength(2);
  });
});
