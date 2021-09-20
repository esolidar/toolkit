import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  PublicZeroRaised as PublicZero,
  Private,
  PrivateZeroRaised as PrivateZero,
} from '../../crowdfunding/CardCrowdfunding.stories';
import crowdfunding from '../../../../../__mocks__/crowdfunding';
import campaign from '../../../../../__mocks__/campaign';

const Default = composeStory(DefaultStory, Meta);
const PrivateTemplate = composeStory(Private, Meta);
const PublicZeroRaised = composeStory(PublicZero, Meta);
const PrivateZeroRaised = composeStory(PrivateZero, Meta);

it('renders Crowdfunding public', () => {
  const { getAllByClass, getByClass } = render(<Default />);

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component__image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component__body')).toHaveLength(1);
  expect(getAllByClass('card-component__title')).toHaveLength(1);
  expect(getByClass('card-component__title')).toHaveTextContent(crowdfunding.title_en);
  expect(getAllByClass('card-component__body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component__support')).toHaveLength(1);
});

it('renders Crowdfunding private', () => {
  const { queryByTestId, getAllByClass, getByClass } = render(<PrivateTemplate />);

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component__image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component__body')).toHaveLength(1);
  expect(getAllByClass('card-component__title')).toHaveLength(1);
  expect(getByClass('card-component__title')).toHaveTextContent(campaign.title);
  expect(getAllByClass('card-component__body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component__support')).toHaveLength(1);
  expect(queryByTestId('supporting-name')).toBeTruthy();
});

it('renders Crowdfunding public with 0 raised', () => {
  const { getByClass } = render(<PublicZeroRaised />);

  expect(getByClass('raised-value')).toHaveTextContent('€0');
});

it('renders Crowdfunding private with 0 raised', () => {
  const { getByClass } = render(<PrivateZeroRaised />);

  expect(getByClass('raised-value')).toHaveTextContent('€0');
});
