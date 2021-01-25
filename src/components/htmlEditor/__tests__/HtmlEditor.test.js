/* global expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import HtmlEditor from '../HtmlEditor';
import '@testing-library/jest-dom';

test('HtmlEditor contains mui class if prop is true', async () => {
  render(<IntlProvider locale="en"><HtmlEditor muiStyle={true} /></IntlProvider>);
  const wrapper = screen.getByLabelText('rdw-wrapper');
  expect(wrapper).toHaveClass('rdw-editor-wrapper-mui');
});

test('HtmlEditor contains error class if prop is true', async () => {
  render(<IntlProvider locale="en"><HtmlEditor error={true} /></IntlProvider>);
  const wrapper = screen.getByLabelText('rdw-wrapper');
  expect(wrapper).toHaveClass('rdw-editor-wrapper-error');
});

test('HtmlEditor contains columns button if prop is true', async () => {
  render(<IntlProvider locale="en"><HtmlEditor showColumnsBtn={true} /></IntlProvider>);
  const wrapper = screen.getByTestId('dropdown-btn');
  expect(wrapper).toBeInTheDocument();
});

test('HtmlEditor contains helper text if prop is defined', async () => {
  render(<IntlProvider locale="en"><HtmlEditor helperText="helperText" /></IntlProvider>);
  const wrapper = screen.getByLabelText('html-helper-text');
  expect(wrapper).toBeInTheDocument();
});
