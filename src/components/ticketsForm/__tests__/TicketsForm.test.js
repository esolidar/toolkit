/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import TicketsForm from '../index';

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
  uploadedFiles: [],
  files: [],
};

describe('TicketsForm component', () => {
  it('renders TicketsForm correctly', () => {
    const component = shallow(<TicketsForm {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders with add Files Button', () => {
    const component = shallow(<TicketsForm {...props} showAddFilesButtton={true} />);

    expect(
      component.find('Button').findWhere(n => n.prop('extraClass') === 'dark-full float-left')
    ).toHaveLength(1);
  });

  it('renders TicketsForm with uploadedFiles', () => {
    const component = shallow(
      <TicketsForm
        {...props}
        uploadedFiles={[{ name: 2, file: { file: 'lorem_ipsum', name: 'file name' } }]}
      />
    );
    expect(component.find('.control-label').text()).toEqual('Files');
    expect(component.find('.attachments-row')).toHaveLength(1);
  });

  it('renders TicketsForm with Features Options', () => {
    const component = shallow(<TicketsForm {...props} showFeaturesOptions={true} />);
    expect(component.find('.noPadding')).toHaveLength(1);
  });

  it('renders TicketsForm with Feature Auctions', () => {
    const component = shallow(
      <TicketsForm {...props} showFeaturesOptions={true} featureDefault="2" />
    );
    expect(component.find('SelectField')).toHaveLength(4);
    expect(component.find('SelectField').findWhere(n => n.prop('field') === 'type')).toHaveLength(
      1
    );
    expect(
      component.find('SelectField').findWhere(n => n.prop('field') === 'feature_id')
    ).toHaveLength(1);
    expect(component.find('.control-label').text()).toEqual('Auctions');
    expect(component.find('AsyncPaginate')).toHaveLength(1);
  });

  it('renders TicketsForm with Feature Crowdfunding', () => {
    const component = shallow(
      <TicketsForm {...props} showFeaturesOptions={true} featureDefault="4" />
    );

    expect(component.find('SelectField')).toHaveLength(4);
    expect(component.find('SelectField').findWhere(n => n.prop('field') === 'type')).toHaveLength(
      1
    );
    expect(
      component.find('SelectField').findWhere(n => n.prop('field') === 'feature_id')
    ).toHaveLength(1);
    expect(component.find('.control-label').text()).toEqual('Crowdfunding');
    expect(component.find('AsyncPaginate')).toHaveLength(1);
  });

  it('renders TicketsForm with assignedDefault', () => {
    const component = shallow(
      <TicketsForm
        {...props}
        showFeaturesOptions={true}
        assignedDefault={{ id: 2, label: 'user name' }}
      />
    );

    expect(component.find('.control-label').text()).toEqual('Assigned');
    expect(component.find('AsyncPaginate')).toHaveLength(1);
  });
});
