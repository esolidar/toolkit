import React from 'react';
import { render, queries } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import * as queryById from './queryById';
import * as queryByClass from './queryByClass';

const messages = Object.assign(
  require('@esolidar/i18n/projects/toolkit/en')
  // require('@esolidar/i18n/projects/admin/en'),
  // require('@esolidar/i18n/projects/business/en'),
  // require('@esolidar/i18n/projects/esolidar/en'),
  // require('@esolidar/i18n/projects/whitelabel/en')
);

const customRender = (ui, options) =>
  render(
    <IntlProvider locale="en" messages={messages}>
      {ui}
    </IntlProvider>,
    { queries: { ...queries, ...queryByClass, ...queryById }, ...options }
  );

export * from '@testing-library/react';
export { customRender as render };
