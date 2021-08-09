import React from 'react';
import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { composeStory } from '@storybook/testing-react';
import { IntlProvider } from 'react-intl';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, { Default as DefaultDetailTitle } from '../ListFooter.stories';

const Default = composeStory(DefaultDetailTitle, Meta);

it('renders Detail Title default component', () => {
  const { getAllByClass, getByClass, getByTestId } = render(
    <IntlProvider locale="en" messages={translation}>
      <Default />
    </IntlProvider>
  );

  expect(getAllByClass('component-list-footer')).toBeTruthy();
  expect(getAllByClass('component-list-footer-results')).toBeTruthy();
  expect(getByClass('component-list-footer-results')).toHaveTextContent('25 Crowdfundings');

  expect(getByTestId('pagination')).toBeTruthy();
  expect(getByTestId('select')).toBeTruthy();
});
