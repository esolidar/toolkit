/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import NotificationsBell from '../NotificationsBell';

describe('NotificationsBell component', () => {
  it('renders NotificationsBell correctly', () => {
    const component = shallow(<NotificationsBell notifications={[]} markAllAsReadFunc={() => {}} markAsReadFunc={() => {}} handleScrollFunc={() => {}} loadMoreFunc={() => {}} />);
    expect(component).toHaveLength(1);
  });
});
