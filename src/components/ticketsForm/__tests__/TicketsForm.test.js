/* eslint-disable react/jsx-props-no-spreading */
/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import TicketsForm from '../TicketsForm';

const props = {
  onSubmit: () => {},
  onChange: () => {},
  errors: {},
  statusDefault: '',
  status: [],
  priorityDefault: '',
  priority: [],
  openModalFiles: () => {},
  isLoading: false,
  hideText: false,
  editTicket: {},
  intl: {},
};

describe('TicketsForm component', () => {
  it('renders TicketsForm correctly', () => {
    const component = shallow(<TicketsForm {...props} />);
    expect(component).toHaveLength(1);
  });
});
