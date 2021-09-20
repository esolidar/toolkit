import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Private as PrivateStory,
  NoBids as NoBidsStory,
  SupportingInstitution as SupportingInstitutionSrory,
} from '../../auction/CardAuction.stories';
import auction from '../../../../../__mocks__/auction';

const Default = composeStory(DefaultStory, Meta);
const Private = composeStory(PrivateStory, Meta);
const NoBids = composeStory(NoBidsStory, Meta);
const SupportingInstitution = composeStory(SupportingInstitutionSrory, Meta);

it('renders Auction public', () => {
  const { getAllByClass, getByClass, getByTestId } = render(<Default />);

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component__image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component__body')).toHaveLength(1);
  expect(getAllByClass('card-component__title')).toHaveLength(1);
  expect(getByClass('card-component__title')).toHaveTextContent(auction.title_en);
  expect(getAllByClass('card-component__body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component__support')).toHaveLength(1);
  expect(getByTestId('supporting-url')).toHaveAttribute(
    'href',
    'en/projects/detail/72-projecto-do-pedro'
  );
});

it('renders Auction private', () => {
  const { getByTestId, getAllByClass, getByClass } = render(<Private />);

  expect(getByTestId('badge-component')).toHaveTextContent('Private');
  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component__image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component__body')).toHaveLength(1);
  expect(getAllByClass('card-component__title')).toHaveLength(1);
  expect(getByClass('card-component__title')).toHaveTextContent(auction.title_en);
  expect(getAllByClass('card-component__body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component__support')).toHaveLength(1);
});

it('renders Auction no bids', () => {
  const { getAllByClass, getByClass } = render(<NoBids />);

  expect(getByClass('card-auction-subtitle')).toHaveTextContent('Starting Bid');
  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component__image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component__body')).toHaveLength(1);
  expect(getAllByClass('card-component__title')).toHaveLength(1);
  expect(getByClass('card-component__title')).toHaveTextContent(auction.title_en);
  expect(getAllByClass('card-component__body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component__support')).toHaveLength(1);
});

it('renders Auction no Supporting Institution', () => {
  const { getByTestId, getAllByClass, getByClass } = render(<SupportingInstitution />);

  expect(getByTestId('supporting-url')).toHaveAttribute(
    'href',
    'https://community.testesolidar.com/npo/detail/30-helpo'
  );
  expect(getByClass('card-auction-subtitle')).toHaveTextContent('Last bid of 10');
  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component__image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component__body')).toHaveLength(1);
  expect(getAllByClass('card-component__title')).toHaveLength(1);
  expect(getByClass('card-component__title')).toHaveTextContent(auction.title_en);
  expect(getAllByClass('card-component__body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component border')).toHaveLength(1);
  expect(getAllByClass('card-component__support')).toHaveLength(1);
});
