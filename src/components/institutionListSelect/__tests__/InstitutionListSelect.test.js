import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import React from 'react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  ListFooter as ListFooterStory,
} from '../InstitutionListSelect.stories';

const Default = composeStory(DefaultStory, Meta);
const ListFooter = composeStory(ListFooterStory, Meta);

it('renders InstitutionListSelect default', () => {
  const { getByTestId, getAllByClass, getByClass } = render(<Default />);

  expect(getByClass(/institutions-list/)).toBeInTheDocument();
  expect(getByClass('input-label-component__label size-lg')).toBeInTheDocument();
  expect(getByClass('select-field__input')).toBeInTheDocument();
  expect(getByClass(/search-institutions/)).toBeInTheDocument();
  expect(getAllByClass('institution-row')).toHaveLength(2);
  expect(getByTestId('pagination')).toBeInTheDocument();
});

it('renders InstitutionListSelect with listFooter', () => {
  const { getAllByClass, getByClass } = render(<ListFooter />);

  expect(getByClass(/institutions-list/)).toBeInTheDocument();
  expect(getByClass('input-label-component__label size-lg')).toBeInTheDocument();
  expect(getByClass('select-field__input')).toBeInTheDocument();
  expect(getByClass(/search-institutions/)).toBeInTheDocument();
  expect(getAllByClass('institution-row')).toHaveLength(2);
  expect(getByClass('component-list-footer')).toBeInTheDocument();
  expect(getByClass('component-list-footer-results')).toBeInTheDocument();
});
