import React from 'react';
import { render, screen } from '../../../../__customQueries__/test-utils';
import HtmlEditor from '../index';
import '@testing-library/jest-dom';

test('HtmlEditor contains mui class if prop is true', async () => {
  render(<HtmlEditor muiStyle={true} />);
  const wrapper = screen.getByLabelText('rdw-wrapper');
  expect(wrapper).toHaveClass('rdw-editor-wrapper-mui');
});

test('HtmlEditor contains error class if prop is true', async () => {
  render(<HtmlEditor error={true} />);
  const wrapper = screen.getByLabelText('rdw-wrapper');
  expect(wrapper).toHaveClass('rdw-editor-wrapper-error');
});

test('HtmlEditor contains columns button if prop is true', async () => {
  render(<HtmlEditor showColumnsBtn={true} />);
  const wrapper = screen.getByTestId('dropdown-btn');
  expect(wrapper).toBeInTheDocument();
});

test('HtmlEditor contains helper text if prop is defined', async () => {
  render(<HtmlEditor helperText="helperText" />);
  const wrapper = screen.getByLabelText('html-helper-text');
  expect(wrapper).toBeInTheDocument();
});
