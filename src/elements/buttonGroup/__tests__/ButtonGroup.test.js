import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '../index';

const buttonList = [
  {
    isActive: true,
    onClick: () => {},
    text: 'Activo',
  },
  {
    isActive: false,
    onClick: () => {},
    text: 'Inactivo',
  },
];

describe('ButtonGroup component', () => {
  it('renders ButtonGroup correctly', () => {
    const component = shallow(<ButtonGroup buttonList={buttonList} />);
    expect(component).toHaveLength(1);
  });

  it('renders the correct number of buttons', () => {
    const component = shallow(<ButtonGroup buttonList={buttonList} />);
    expect(component.find('Button').length).toBe(buttonList.length);
  });

  it('renders Button classes from className prop', () => {
    const component = shallow(<ButtonGroup buttonList={buttonList} className="test" />);
    expect(component.find('.test').length).toBe(1);
  });

  it('renders Button classes from size prop', () => {
    const component = shallow(<ButtonGroup buttonList={buttonList} size="lg" />);
    expect(component.find('ButtonGroup').props().size).toBe('lg');
  });
});
