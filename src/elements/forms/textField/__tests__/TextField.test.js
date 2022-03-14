import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../TextField.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders TextField Form default component', () => {
  const { getByClass } = render(<Default />);

  expect(getByClass('form-group')).toBeTruthy();
  expect(getByClass('form-control')).toBeInTheDocument();
});
