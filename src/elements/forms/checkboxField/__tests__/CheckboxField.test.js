import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../CheckboxField.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders CheckboxField default component', () => {
  const { getByClass, getByText, getAllByClass, getByTestId } = render(<Default />);

  expect(getByClass(/checkbox-inline/)).toBeTruthy();
  expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
  expect(getByText('This field is required')).toBeInTheDocument();
  expect(getByTestId('checkbox-field')).toBeInTheDocument();
  expect(getAllByClass('form-group')).toHaveLength(1);
});
