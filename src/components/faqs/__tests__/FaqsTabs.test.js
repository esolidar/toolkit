import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FaqTabs from '../FaqsTabs';

configure({ adapter: new Adapter() });

const changeType = jest.fn();
const tabs = [
  {
    type: 'general',
    text: 'General Questions',
  },
  {
    type: 'charities',
    text: 'For Charities',
  },
  {
    type: 'users',
    text: 'For Users',
  },
];

describe('FaqsTabs component', () => {
  it('renders the Tabs component', () => {
    const component = shallow(<FaqTabs tabs={tabs} type={tabs[0].type} changeType={() => {}} />);
    expect(component).toHaveLength(1);
  });

  it('expect length Tabs', () => {
    const component = shallow(<FaqTabs tabs={tabs} type={tabs[0].type} changeType={() => {}} />);
    expect(component.find('.tab').length).toBe(tabs.length);
  });

  it('expect Tab Users active', () => {
    const component = shallow(<FaqTabs tabs={tabs} type="users" changeType={() => {}} />);
    expect(component.find('.tab.active').length).toBe(1);
  });

  it('expect Tab type is tab.type === type', () => {
    const component = shallow(<FaqTabs tabs={tabs} type={tabs[2].type} changeType={changeType} />);
    expect(component.find('.tab').at(2).hasClass('active')).toBe(true);
  });
});
