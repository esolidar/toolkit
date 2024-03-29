import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../Breadcrumbs.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders Container default component', () => {
  const { getByClass, getAllByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-breadcrumbs')).toBeTruthy();
  expect(getAllByClass(/esolidar-breadcrumbs__button/)).toHaveLength(3);
  expect(getAllByClass('icon-component')).toHaveLength(2);
  expect(getAllByClass(/esolidar-breadcrumbs__button/)).toHaveLength(3);
  expect(getByText('Accelerator')).toBeInTheDocument();
  expect(getByText('Lorem ipsum')).toBeInTheDocument();
  expect(getByText('Lorem ipsum dolor si...')).toBeInTheDocument();
});
