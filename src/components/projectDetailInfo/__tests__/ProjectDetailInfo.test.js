/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow, mount } from 'enzyme';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { IntlProvider } from 'react-intl';
import ProjectDetailInfo from '../index';
import project from '../../../../__mocks__/project';

describe('ProjectDetailInfo component', () => {
  it('renders ProjectDetailInfo correctly', () => {
    const component = shallow(<ProjectDetailInfo project={project} lang="en" />);
    expect(component).toHaveLength(1);
  });

  it('renders ProjectDetailInfo correctly without prject', () => {
    const component = shallow(<ProjectDetailInfo project={{}} lang="en" />);
    expect(component).toHaveLength(1);
    expect(component.find('div')).toHaveLength(1);
  });

  it('should show the correct amount of Question component', () => {
    const component = shallow(<ProjectDetailInfo project={project} lang="en" />);
    expect(component.find('Question').length).toBe(project.form.length);
  });

  it('should show private icon one time', () => {
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <ProjectDetailInfo project={project} lang="en" />
      </IntlProvider>
    );
    expect(component.find('PrivateIcon').length).toBe(2);
  });

  it('should show checkboxField if showRequestInfoView === true', () => {
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <ProjectDetailInfo project={project} showRequestInfoView={true} lang="en" />
      </IntlProvider>
    );
    expect(component.find('CheckboxField').length).toBe(7);
  });

  it('should show TextareaField if question is selected', () => {
    const component = mount(
      <IntlProvider locale="en" messages={translation}>
        <ProjectDetailInfo project={project} showRequestInfoView={true} lang="en" />
      </IntlProvider>
    );
    expect(component.find('TextareaField').length).toBe(6);
  });
});
