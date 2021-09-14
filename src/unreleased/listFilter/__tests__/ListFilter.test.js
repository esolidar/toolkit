import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, WithSpace as WithSpaceStory } from '../ListFilter.stories';

const Default = composeStory(DefaultStory, Meta);
const WithSpace = composeStory(WithSpaceStory, Meta);

it('renders ListFilter default', () => {
  const { queryByClass, getByTestId } = render(<Default />);
  expect(getByTestId('list-filter')).toBeInTheDocument();
  expect(getByTestId('text-field')).toBeInTheDocument();
  expect(queryByClass('list-filter__space')).not.toBeInTheDocument();
  expect(getByTestId('select-field')).toBeInTheDocument();
});

it('renders ListFilter with space', () => {
  const { getByClass, getByTestId } = render(<WithSpace />);
  expect(getByTestId('list-filter')).toBeInTheDocument();
  expect(getByTestId('text-field')).toBeInTheDocument();
  expect(getByClass('list-filter__space')).toBeInTheDocument();
  expect(getByTestId('select-field')).toBeInTheDocument();
});
