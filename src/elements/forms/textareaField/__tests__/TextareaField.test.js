import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../TextareaField.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Textarea Form default component', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('text-area-field form-group')).toBeTruthy();
  expect(getByClass('form-control')).toBeInTheDocument();
});
