import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory } from '../ShortAnswer.stories';

const Default = composeStory(DefaultStory, Meta);

it('renders ShortAnswer component', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('esolidar-viewport size-lg')).toBeTruthy();
  expect(
    getByText(
      /Vestibulum ac luctus ipsum. Suspendisse scelerisque turpis ut urna porttitor aliquet. Praesent eget leo id magna volutpat lobortis quis in nibh./
    )
  ).toBeInTheDocument();
  expect(getByClass('form-group')).toBeTruthy();
});
