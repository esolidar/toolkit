/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import HtmlEditor from '../HtmlEditor';

describe('HtmlEditor component', () => {
  it('renders HtmlEditor correctly', () => {
    const component = shallow(<HtmlEditor />);
    expect(component).toHaveLength(1);
  });
});
