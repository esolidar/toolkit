/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-localstorage-mock';
import translateMessage from '../translateMessage';

describe('translateMessage component', () => {
  it('renders translateMessage correctly', () => {
    const component = shallow(
      <span
        title={translateMessage({
          id: 'forCompanies',
          defaultMessage: 'For Companies',
        })}
      />,
    );
    expect(component).toHaveLength(1);
  });

  it('renders translateMessage test missing translate ID', () => {
    const component = shallow(
      <span
        title={translateMessage({
          id: 'forCompaniesDonExist',
          defaultMessage: 'For Companies',
          currentLang: 'pt',
        })}
      />,
    );
    expect(component.props().title).toEqual('For Companies');
  });

  it('renders translateMessage test translation key with currentLang br', () => {
    const component = shallow(
      <span title={translateMessage({
        id: 'forCompanies',
        defaultMessage: 'For Companies',
        currentLang: 'br',
      })}
      />,
    );
    expect(component.props().title).toEqual('Para Empresas');
  });

  it('renders translateMessage test translation key with no lang', () => {
    localStorage.clear();
    const component = shallow(
      <span
        title={translateMessage({
          id: 'forCompanies',
          defaultMessage: 'For Companies',
        })}
      />,
    );
    expect(component.props().title).toEqual('For Companies');
  });

  it('renders translateMessage test translation key with localStorage lang', () => {
    localStorage.setItem('lang', 'pt');
    const component = shallow(
      <span title={translateMessage({
        id: 'forCompanies',
        defaultMessage: 'For Companies',
      })}
      />,
    );
    expect(component.props().title).toEqual('Para Empresas');
  });
});
