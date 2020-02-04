/* global expect */
/* global jest */

import React from 'react';
import { shallow } from 'enzyme';
import HtmlEditor from '../HtmlEditor';

describe('HtmlEditor component', () => {
  it('renders HtmlEditor correctly', () => {
    const component = shallow(<HtmlEditor html="" columns={2} submitTextHtml={jest.fn()} cancelTextHtml={jest.fn()} changeColumns={jest.fn()} />);
    expect(component).toHaveLength(1);
  });
});
