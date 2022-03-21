import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../HtmlEditor.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders HtmlEditor with default props', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('rdw-editor-wrapper')).toBeInTheDocument();
  expect(getByClass('form-group htmlEditor-lg')).toBeInTheDocument();
  expect(getByClass('rdw-inline-wrapper')).toBeInTheDocument();
});
