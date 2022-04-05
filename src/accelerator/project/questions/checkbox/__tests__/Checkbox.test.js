import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Checkbox.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Success default component open', () => {
  const { getByClass, getByText, getAllByClass } = render(<Default />);

  expect(getByClass('page-content-checkbox')).toBeTruthy();
  expect(getByText('Cras fermentum semper euismod.')).toBeInTheDocument();
  expect(
    getByText(
      'Cras fermentum semper euismod. Quisque libero ipsum, dapibus quis blandit eget, finibus at erat. Suspendisse sit amet venenatis tellus. Sed tempus, leo vel tempus malesuada'
    )
  ).toBeInTheDocument();
  expect(getAllByClass('form-group')).toHaveLength(6);
});
