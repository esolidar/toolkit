import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Admin as AdminStory,
  Loading as LoadingStory,
} from '../CardProjectDetail.stories';

const Default = composeStory(DefaultStory, Meta);
const Admin = composeStory(AdminStory, Meta);
const Loading = composeStory(LoadingStory, Meta);

it('renders CardProjectDetail Default', () => {
  const { getByTestId, getByText, getAllByTestId } = render(<Default />);

  expect(getByTestId('cardProjectDetail')).toBeInTheDocument();
  expect(getByTestId('badge-component')).toBeInTheDocument();
  expect(getByText('New')).toBeInTheDocument();
  expect(getByText('Sustainable Development Goals')).toBeInTheDocument();
  expect(
    getByText(
      'This project supports the following UN SDGs to achieve a better and more sustainable future for all'
    )
  ).toBeInTheDocument();
  expect(getAllByTestId('ods-image')).toHaveLength(5);
  expect(getByTestId('profile-avatar')).toBeInTheDocument();
  expect(getByText('View program details')).toBeInTheDocument();
});

it('renders CardProjectDetail Admin', () => {
  const { getByClass, getByTestId, getByText, getAllByTestId } = render(<Admin />);

  expect(getByTestId('cardProjectDetail')).toBeInTheDocument();
  expect(getByText('Sustainable Development Goals')).toBeInTheDocument();
  expect(
    getByText(
      'This project supports the following UN SDGs to achieve a better and more sustainable future for all'
    )
  ).toBeInTheDocument();
  expect(getAllByTestId('ods-image')).toHaveLength(9);

  expect(getByClass('card-project-detail__review-section active')).toBeInTheDocument();
  expect(getByClass('card-project-detail__review-section--rating')).toBeInTheDocument();
  expect(getByText('4 / 5')).toBeInTheDocument();
  expect(getByClass(/esolidar-select /)).toBeInTheDocument();
  expect(getByText('Approved')).toBeInTheDocument();

  expect(getByTestId('profile-avatar')).toBeInTheDocument();
  expect(getByText('View program details')).toBeInTheDocument();
});

it('renders CardProjectDetail Loading', () => {
  const { getByClass, getAllByClass } = render(<Loading />);

  expect(getByClass('card-project-detail')).toBeTruthy();
  expect(getAllByClass(/react-loading-skeleton/)).toHaveLength(19);
});
