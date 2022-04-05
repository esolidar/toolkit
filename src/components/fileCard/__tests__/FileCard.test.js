import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultStory,
  Disabled as DisabledStory,
  WithDateUploaded as WithDateUploadedStory,
  WithDescription as WithDescriptionStory,
  WithBadges as WithBadgesStory,
  WithOptions as WithOptionsStory,
} from '../FileCard.stories';

const Default = composeStory(DefaultStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const WithDateUploaded = composeStory(WithDateUploadedStory, Meta);
const WithDescription = composeStory(WithDescriptionStory, Meta);
const WithBadges = composeStory(WithBadgesStory, Meta);
const WithOptions = composeStory(WithOptionsStory, Meta);

it('renders FileCard Default', () => {
  const { getByClass, getByText } = render(<Default />);

  expect(getByClass('file-card')).toBeTruthy();
  expect(getByClass('esolidar-preview')).toBeTruthy();
  expect(getByClass('file-card__body-title')).toBeTruthy();
  expect(getByText('esolidar - Ajudando a ajudar.pdf')).toBeInTheDocument();
  expect(getByClass('file-card__body-helper')).toBeTruthy();
  expect(getByText('15.28 Kb')).toBeInTheDocument();
});

it('renders FileCard Disabled', () => {
  const { getByClass } = render(<Disabled />);

  expect(getByClass('file-card disabled')).toBeTruthy();
});

it('renders FileCard With DateUploaded', () => {
  const { getByClass, getByText } = render(<WithDateUploaded />);

  expect(getByClass('file-card__body-helper')).toBeTruthy();
  expect(getByText('Uploaded on 2022-03-25 12:00:01 - 15.28 Kb')).toBeInTheDocument();
});

it('renders FileCard With Description', () => {
  const { getByClass, getByText } = render(<WithDescription />);

  expect(getByClass('file-card__body-subtitle')).toBeTruthy();
  expect(getByText('Donec eleifend erat a nibh faucibus.')).toBeInTheDocument();
});

it('renders FileCard With Badges', () => {
  const { getByText, queryAllByTestId } = render(<WithBadges />);

  expect(queryAllByTestId('badge-component')).toHaveLength(2);
  expect(getByText('Failed')).toBeInTheDocument();
  expect(getByText('Private')).toBeInTheDocument();
});

it('renders FileCard With Options', () => {
  const { getByClass, queryAllByClass } = render(<WithOptions />);

  expect(getByClass('file-card__buttons')).toBeInTheDocument();
  expect(queryAllByClass(/btn-esolidar /)).toHaveLength(2);
  expect(getByClass(/esolidar-dropdown /)).toBeInTheDocument();
});
