import React from 'react';
import { render, queries } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import * as queryById from './queryById';
import * as queryByClass from './queryByClass';

const toolkit = require('@esolidar/i18n/projects/toolkit/en');
const admin = require('@esolidar/i18n/projects/admin/en');
const business = require('@esolidar/i18n/projects/business/en');
const esolidar = require('@esolidar/i18n/projects/esolidar/en');
const whitelabel = require('@esolidar/i18n/projects/whitelabel/en');

const messages = {
  toolkit,
  admin,
  business,
  esolidar,
  whitelabel,
};

const customRender = (ui, options) =>
  render(
    <IntlProvider locale="en" messages={messages[process.env.PUBLIC_TOOLKIT_i18N]}>
      {ui}
    </IntlProvider>,
    { queries: { ...queries, ...queryByClass, ...queryById }, ...options }
  );

export * from '@testing-library/react';
export { customRender as render };
