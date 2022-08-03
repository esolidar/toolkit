import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../SelectColor.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders selectColor with default props', () => {
  const { getByClass, getByTestId } = render(<Default />);

  expect(getByClass('size-lg form-group selectColor')).toBeInTheDocument();
  expect(getByClass('form-group selectColor__input')).toBeInTheDocument();
  expect(getByClass('icon left')).toBeInTheDocument();
  expect(getByClass('previewColor')).toBeInTheDocument();
  expect(getByTestId('input-right-icon')).toBeInTheDocument();
});
