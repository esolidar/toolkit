import React from 'react';
import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import { render } from '../../../../../__customQueries__/test-utils';
import Meta, {
  PublicTitlePt as PublicPt,
  PublicTitleEn as PublicEn,
  PublicZeroRaised as PublicZero,
  Private,
  PrivateZeroRaised as PrivateZero,
} from '../../crowdfunfing/CardCrowdfunding.stories';
import crowdfunding from '../../../../../__mocks__/crowdfunding';
import campaign from '../../../../../__mocks__/campaign';

const DefaultPT = composeStory(PublicPt, Meta);
const DefaultEn = composeStory(PublicEn, Meta);
const PrivateTemplate = composeStory(Private, Meta);
const PublicZeroRaised = composeStory(PublicZero, Meta);
const PrivateZeroRaised = composeStory(PrivateZero, Meta);

it('renders Crowdfunding public with title PT', () => {
  const { getAllByClass, getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <DefaultPT />
    </IntlProvider>
  );

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component-image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component-body')).toHaveLength(1);
  expect(getAllByClass('card-component-title')).toHaveLength(1);
  expect(getByClass('card-component-title')).toHaveTextContent(crowdfunding.title);
  expect(getAllByClass('card-component-body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component')).toHaveLength(1);
  expect(getAllByClass('card-component-support')).toHaveLength(1);
});

it('renders Crowdfunding public with title En', () => {
  const { getAllByClass, getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <DefaultEn />
    </IntlProvider>
  );

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component-image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component-body')).toHaveLength(1);
  expect(getAllByClass('card-component-title')).toHaveLength(1);
  expect(getByClass('card-component-title')).toHaveTextContent(crowdfunding.title_en);
  expect(getAllByClass('card-component-body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component')).toHaveLength(1);
  expect(getAllByClass('card-component-support')).toHaveLength(1);
});

it('renders Crowdfunding private', () => {
  const { queryByTestId, getAllByClass, getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <PrivateTemplate />
    </IntlProvider>
  );

  expect(getAllByClass('card-component')).toBeTruthy();
  expect(getAllByClass('card-component-image')).toHaveLength(1);
  expect(getAllByClass('bg-image')).toHaveLength(1);
  expect(getAllByClass('card-component-body')).toHaveLength(1);
  expect(getAllByClass('card-component-title')).toHaveLength(1);
  expect(getByClass('card-component-title')).toHaveTextContent(campaign.title);
  expect(getAllByClass('card-component-body-middle')).toHaveLength(1);
  expect(getAllByClass('countdown-component')).toHaveLength(1);
  expect(getAllByClass('card-component-support')).toHaveLength(1);
  expect(queryByTestId('supporting-name')).toBeTruthy();
});

it('renders Crowdfunding public with 0 raised', () => {
  const { getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <PublicZeroRaised />
    </IntlProvider>
  );

  expect(getByClass('raised-value')).toHaveTextContent('€0');
});

it('renders Crowdfunding private with 0 raised', () => {
  const { getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <PrivateZeroRaised />
    </IntlProvider>
  );

  expect(getByClass('raised-value')).toHaveTextContent('€0');
});
