/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
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
  intl: {},
  uploadedFiles: [],
  files: [],
};

describe('TicketsForm component', () => {
  it('renders TicketsForm correctly', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <TicketsForm {...props} />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();
    expect(component).toHaveLength(1);
  });

  it('renders with add Files Button', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <TicketsForm {...props} showAddFilesButtton={true} />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(
      component.find('Button').findWhere(n => n.prop('extraClass') === 'dark-full float-left')
    ).toHaveLength(1);
  });

  it('renders TicketsForm with uploadedFiles', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <TicketsForm
          {...props}
          uploadedFiles={[{ name: 2, file: { file: 'lorem_ipsum', name: 'file name' } }]}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('.control-label').text()).toEqual('Files');
    expect(component.find('.attachments-row')).toHaveLength(1);
  });

  it('renders TicketsForm with Features Options', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <TicketsForm {...props} showFeaturesOptions={true} />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();
    expect(component.find('.noPadding')).toHaveLength(1);
  });

  it('renders TicketsForm with Feature Auctions', () => {
    const component = shallow(
      <IntlProvider locale="en">
        <TicketsForm {...props} showFeaturesOptions={true} featureDefault="2" />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

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
      <IntlProvider locale="en">
        <TicketsForm {...props} showFeaturesOptions={true} featureDefault="4" />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

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
      <IntlProvider locale="en">
        <TicketsForm
          {...props}
          showFeaturesOptions={true}
          assignedDefault={{ id: 2, label: 'user name' }}
        />
      </IntlProvider>
    )
      .dive()
      .dive()
      .shallow()
      .dive();

    expect(component.find('.control-label').text()).toEqual('Assigned to');
    expect(component.find('AsyncPaginate')).toHaveLength(1);
  });
});
