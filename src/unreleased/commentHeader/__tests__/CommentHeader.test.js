import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../CommentHeader.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders commentHeader component', () => {
  const { getByClass, getByText, getByAltText } = render(<Default />);

  expect(getByClass('profile-avatar')).toBeInTheDocument();
  expect(getByText('Joel F. Calheiros')).toBeInTheDocument();
  expect(getByAltText('Joel F. Calheiros')).toBeInTheDocument();
  expect(getByClass('profile-avatar__thumb thumb-lg')).toBeInTheDocument();
  expect(getByText('14 days ago')).toBeInTheDocument();
  expect(getByClass('icon-chevron-down')).toBeInTheDocument();
});
