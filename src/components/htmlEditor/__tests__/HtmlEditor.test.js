import React from 'react';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import '@testing-library/jest-dom';
import Meta, {
  Default as DefaultStory,
  WithInputLabel as WithInputLabelStory,
} from '../HtmlEditor.stories';

const Default = composeStory(DefaultStory, Meta);
const WithInputLabel = composeStory(WithInputLabelStory, Meta);

test('HtmlEditor contains mui class if prop is true', async () => {
  const { getByLabelText } = render(<Default muiStyle />);
  const wrapper = getByLabelText('rdw-wrapper');
  expect(wrapper).toHaveClass('rdw-editor-wrapper-mui');
});

test('HtmlEditor contains error class if prop is true', async () => {
  const { getByLabelText } = render(<Default error />);
  const wrapper = getByLabelText('rdw-wrapper');
  expect(wrapper).toHaveClass('rdw-editor-wrapper-error');
});

test('HtmlEditor contains columns button if prop is true', async () => {
  const { getByTestId } = render(<Default showColumnsBtn />);
  const wrapper = getByTestId('dropdown-btn');
  expect(wrapper).toBeInTheDocument();
});

test('HtmlEditor contains helper text if prop is defined', async () => {
  const { getByLabelText } = render(<Default helperText="helperText" />);
  const wrapper = getByLabelText('html-helper-text');
  expect(wrapper).toBeInTheDocument();
});

test('HtmlEditor contains input label', async () => {
  const { getByText } = render(<WithInputLabel />);
  const wrapper = getByText('Description');
  expect(wrapper).toBeInTheDocument();
});
