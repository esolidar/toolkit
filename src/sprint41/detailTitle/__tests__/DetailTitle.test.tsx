import React from 'react';
import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultDetailTitle,
  TitleOnly as DefaultTitleOnly,
  WithoutSupportUrl as DefaultWithoutSupportUrl,
} from '../DetailTitle.stories';

const Default = composeStory(DefaultDetailTitle, Meta);
const TitleOnly = composeStory(DefaultTitleOnly, Meta);
const WithoutSupportUrl = composeStory(DefaultWithoutSupportUrl, Meta);

it('renders Detail Title default component', () => {
  const { getAllByClass, getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <Default />
    </IntlProvider>
  );

  expect(getAllByClass('component-detail-title')).toBeTruthy();
  expect(getAllByClass('detail-title-back')).toBeTruthy();
  expect(getAllByClass('icon-cheveron-left')).toBeTruthy();

  expect(getAllByClass('detail-title-h1')).toHaveLength(1);
  expect(getByClass('detail-title-h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('detail-title-supporting')).toHaveLength(1);
  expect(getAllByClass('detail-title-supporting-href')).toHaveLength(1);
  expect(getByClass('detail-title-supporting-href')).toHaveTextContent('Helpo');
});

it('renders simple Detail Title', () => {
  const { getAllByClass, getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <TitleOnly />
    </IntlProvider>
  );

  expect(getAllByClass('component-detail-title')).toBeTruthy();
  expect(getAllByClass('detail-title-h1')).toHaveLength(1);
  expect(getByClass('detail-title-h1')).toHaveTextContent('Crowdfunding title');
});

it('renders Detail Title default component', () => {
  const { getAllByClass, getByClass } = render(
    <IntlProvider locale="en" messages={translation}>
      <WithoutSupportUrl />
    </IntlProvider>
  );

  expect(getAllByClass('component-detail-title')).toBeTruthy();
  expect(getAllByClass('detail-title-back')).toBeTruthy();
  expect(getAllByClass('icon-cheveron-left')).toBeTruthy();

  expect(getAllByClass('detail-title-h1')).toHaveLength(1);
  expect(getByClass('detail-title-h1')).toHaveTextContent('Crowdfunding title');
  expect(getAllByClass('detail-title-supporting')).toBeTruthy();
  expect(getByClass('detail-title-supporting-name')).toHaveTextContent('Joel Calheiros');
});
