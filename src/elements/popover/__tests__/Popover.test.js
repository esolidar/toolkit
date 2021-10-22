import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render, fireEvent } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultStory, WithHeader as WithHeaderStory } from '../Popover.stories';

const Default = composeStory(DefaultStory, Meta);
const WithHeader = composeStory(WithHeaderStory, Meta);

it('renders Popover default', () => {
  const { getByTestId, getByText, getByClass } = render(<Default />);

  expect(getByClass(/popoverOverlayTrigger/)).toBeInTheDocument();
  expect(getByText('Joel Calheiros')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Joel Calheiros'));
  expect(getByTestId('popoverComponent')).toBeInTheDocument();
  expect(getByTestId('popoverComponent-body')).toBeInTheDocument();
  expect(getByText('name@email.com')).toBeInTheDocument();
  expect(getByText('Tel. +351 345 354 234')).toBeInTheDocument();
});

it('renders Popover WithHeader', () => {
  const { getByTestId, getByText, getByClass } = render(<WithHeader />);

  expect(getByClass(/popoverOverlayTrigger/)).toBeInTheDocument();
  expect(getByText('Joel Calheiros')).toBeInTheDocument();
  fireEvent.mouseOver(getByText('Joel Calheiros'));
  expect(getByTestId('popoverComponent')).toBeInTheDocument();
  expect(getByTestId('popoverComponent-header')).toBeInTheDocument();
  expect(getByTestId('popoverComponent-body')).toBeInTheDocument();
  expect(getByTestId('profile-avatar')).toBeInTheDocument();
});
