import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';
import Icon from '../../icon';
import Badge from '../../badge';

const onClickFunc = jest.fn();

describe('Button component', () => {
  it('renders Button correctly', () => {
    const component = shallow(<Button />);
    expect(component).toHaveLength(1);
  });

  it('renders Button with prop extraClass', () => {
    const component = shallow(<Button extraClass="danger" />);
    expect(component.props().className).toEqual('btn-esolidar btn-danger btn-md');
  });

  it('renders Button with prop onClick', () => {
    const component = shallow(<Button extraClass="danger" onClick={onClickFunc} />);
    expect(component.props().type).toEqual('button');
  });

  it('renders Button with prop href', () => {
    const component = shallow(<Button extraClass="danger" target="_blank" href="www.google.pt" />);
    expect(component.props().href).toEqual('www.google.pt');
    expect(component.props().href).toEqual('www.google.pt');
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
    const component = shallow(
      <Button extraClass="danger" to="login" icon={<Icon name="Auction" />} />
    );
    console.log(component.debug());
    expect(component.find('Icon').prop('name')).toEqual('Auction');
  });

  it('renders Button classes from fullWidth prop', () => {
    const component = shallow(<Button extraClass="danger" to="login" fullWidth={true} />);
    expect(component.find('.full-width').length).toBe(1);
  });

  it('renders Button classes from disabled prop', () => {
    const component = shallow(<Button extraClass="danger" to="login" disabled={true} />);
    expect(component.find('.disabled').length).toBe(1);
  });

  it('renders Button classes from size prop', () => {
    const component = shallow(<Button extraClass="danger" to="login" size="lg" />);
    expect(component.find('.btn-lg').length).toBe(1);
  });

  it('renders Button with loading', () => {
    const component = shallow(
      <Button extraClass="info-full" withLoading={true} isLoading={true} />
    );
    expect(component.find('Loading').prop('loadingClass')).toBe('small-loading d-block');
    expect(component.find('Loading').prop('white')).toBe(true);
  });

  it('renders Button with iconLeft', () => {
    const component = shallow(
      <Button extraClass="info-full" iconLeft={<Icon name="ArrowLeft" />} />
    );
    expect(component.find('.btn-esolidar__icon-left').length).toBe(1);
    expect(component.find('Icon').prop('name')).toEqual('ArrowLeft');
  });

  it('renders Button with iconRight', () => {
    const component = shallow(
      <Button extraClass="info-full" iconRight={<Icon name="ArrowLeft" />} />
    );
    expect(component.find('.btn-esolidar__icon-right').length).toBe(1);
    expect(component.find('Icon').prop('name')).toEqual('ArrowLeft');
  });

  it('renders Button with badge', () => {
    const component = shallow(
      <Button extraClass="info-full" badge={<Badge text="badgeText" size="xs" />} />
    );
    expect(component.find('.btn-esolidar__badge').length).toBe(1);
    expect(component.find('Badge').prop('text')).toBe('badgeText');
  });
});
