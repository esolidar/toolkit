/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const onClickFunc = jest.fn();

describe('Button component', () => {
  it('renders Button correctly', () => {
    const component = shallow(<Button />);
    expect(component).toHaveLength(1);
  });

  it('renders Button with prop extraClass', () => {
    const component = shallow(<Button extraClass="danger" />);
    expect(component.props().className).toEqual('btn-esolidar btn-danger ');
  });

  it('renders Button with prop onClick', () => {
    const component = shallow(<Button extraClass="danger" onClick={onClickFunc} />);
    expect(component.props().type).toEqual('button');
  });

  it('renders Button with prop href', () => {
    const component = shallow(<Button extraClass="danger" target="_blank" href="www.google.pt" />);
    expect(component.props().href).toEqual('www.google.pt'); expect(component.props().href).toEqual('www.google.pt');
  });

  it('renders Button with prop link', () => {
    const component = shallow(<Button extraClass="danger" to="login" />);
    expect(component.props().to).toEqual('login');
  });

  it('renders Button classes from className prop', () => {
    const component = shallow(<Button extraClass="danger" to="login" className="test new-class" />);
    expect(component.find('.test').length).toBe(1);
    expect(component.find('.new-class').length).toBe(1);
  });

  it('renders Button icon prop', () => {
    const component = shallow(<Button extraClass="danger" to="login" icon={<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />} />);
    expect(component.find('FontAwesomeIcon').length).toBe(1);
  });
});
