import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, WithHeader as WithHeaderStory } from '../Popover.stories';

const Default = composeStory(DefaultStory, Meta);
const WithHeader = composeStory(WithHeaderStory, Meta);

it('renders Popover default', () => {
  const { getByTestId, getByText, getByClass, getById } = render(<Default />);

  expect(getByClass(/popover-component-trigger/)).toBeInTheDocument();
  expect(getByText('Joel Calheiros')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Joel Calheiros'));
  expect(getById('bootstrap-popover')).toBeInTheDocument();
  expect(getByTestId('bootstrap-popover-body')).toBeInTheDocument();
  expect(getByText('name@email.com')).toBeInTheDocument();
  expect(getByText('Tel. +351 345 354 234')).toBeInTheDocument();
});

it('renders Popover WithHeader', () => {
  const { getByTestId, getByText, getByClass, getById } = render(<WithHeader />);

  expect(getByClass(/popover-component-trigger/)).toBeInTheDocument();
  expect(getByText('Joel Calheiros')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Joel Calheiros'));
  expect(getById('bootstrap-popover')).toBeInTheDocument();
  expect(getByTestId('bootstrap-popover-header')).toBeInTheDocument();
  expect(getByTestId('bootstrap-popover-body')).toBeInTheDocument();
  expect(getByTestId('profile-avatar')).toBeInTheDocument();
});
