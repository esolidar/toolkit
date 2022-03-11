import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../RadioField.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders CheckboxField default component', () => {
  const { getByClass, getAllByClass } = render(<Default />);

  expect(getByClass(/radio-inline/)).toBeTruthy();
  expect(getAllByClass('form-group')).toHaveLength(1);
});
