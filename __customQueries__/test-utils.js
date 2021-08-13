import React from 'react';
import { render, queries } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import * as queryById from './queryById';
import * as queryByClass from './queryByClass';

// eslint-disable-next-line import/no-dynamic-require
const messages = require(process.env.PUBLIC_I18N_PATH || '@esolidar/i18n/projects/toolkit/en');

const customRender = (ui, options) =>
  render(
    <IntlProvider locale="en" messages={messages}>
      {ui}
    </IntlProvider>,
    { queries: { ...queries, ...queryByClass, ...queryById }, ...options }
  );

export * from '@testing-library/react';
export { customRender as render };
