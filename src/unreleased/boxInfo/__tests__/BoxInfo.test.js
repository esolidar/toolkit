import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../BoxInfo.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders BoxInfo default component', () => {
  const { getByClass, getAllByClass } = render(<Default />);

  expect(getByClass('esolidar-breadcrumbs')).toBeTruthy();
  expect(getAllByClass('esolidar-breadcrumbs__item')).toHaveLength(3);
});
