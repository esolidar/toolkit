import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaulHeader } from '../HeaderCompany.stories';

const Default = composeStory(DefaulHeader, Meta);

it('renders header company component', () => {
  const { getAllByClass } = render(<Default />);

  expect(getAllByClass('header-company-component')).toBeTruthy();
  expect(getAllByClass('header-company-component__header-bg')).toBeTruthy();
});
