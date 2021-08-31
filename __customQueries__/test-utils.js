/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { render, queries } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import * as queryById from './queryById';
import * as queryByClass from './queryByClass';

const toolkit = require('@esolidar/i18n/projects/toolkit/en');

const project = require(process.env.PUBLIC_I18N_PATH || '');
const messages = {
  ...toolkit,
  ...project,
};

const customRender = (ui, options) =>
  render(
    <IntlProvider locale="en" messages={messages}>
      {ui}
    </IntlProvider>,
    { queries: { ...queries, ...queryByClass, ...queryById }, ...options }
  );

export * from '@testing-library/react';
export { customRender as render };
