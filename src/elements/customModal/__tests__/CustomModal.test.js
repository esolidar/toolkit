/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import CustomModal from '../CustomModal';

const props = {
  bodyChildren: <p>bodyChildren</p>,
  show: true,
  title: 'Title',
};

describe('CustomModal component', () => {
  it('renders "CustomModal" correctly', () => {
    const component = shallow(<CustomModal {...props} />);
    expect(component.find('[data-testid="modal"]').length).toBe(1);
    expect(component.find('[data-testid="header"]').length).toBe(1);
    expect(component.find('[data-testid="title"]').length).toBe(1);
    expect(component.find('[data-testid="body"]').length).toBe(1);
  });

  it('renders subtitle if prop "subtitle" is defined', () => {
    const component = shallow(<CustomModal {...props} subtitle="subtitle" />);
    expect(component.find('[data-testid="subtitle"]').length).toBe(1);
  });

  it('renders footer if prop "actionsChildren" is defined', () => {
    const component = shallow(<CustomModal {...props} actionsChildren={<p>Footer</p>} />);
    expect(component.find('[data-testid="footer"]').length).toBe(1);
  });

  it('sets backdrop if prop "backdrop" is defined', () => {
    const component = shallow(<CustomModal {...props} backdrop={false} />);
    expect(component.find('[data-testid="modal"]').props().backdrop).toEqual(false);
  });

  it('sets size if prop "size" is defined', () => {
    const component = shallow(<CustomModal {...props} size="xl" />);
    expect(component.find('[data-testid="modal"]').props().size).toEqual('xl');
  });

  it('sets scrollable if prop "scrollable" is defined', () => {
    const component = shallow(<CustomModal {...props} scrollable={false} />);
    expect(component.find('[data-testid="modal"]').props().scrollable).toEqual(false);
  });

  it('sets show if prop "show" is defined', () => {
    const component = shallow(<CustomModal {...props} show={true} />);
    expect(component.find('[data-testid="modal"]').props().show).toEqual(true);
  });

  it('renders closeButton if prop "onHide" is defined', () => {
    const component = shallow(<CustomModal {...props} onHide={() => { }} />);
    expect(component.find('[data-testid="header"]').props().closeButton).toEqual(true);
  });
});
