import React from 'react';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '!style-loader!css-loader!sass-loader!../src/index.scss';
import '!style-loader!css-loader!sass-loader!../src/assets/sass/_storybook-body.scss';

import '@storybook/addon-console';
import 'storybook-addon-intl/register';
import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { jsxDecorator } from 'storybook-addon-jsx';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { SUPPORTED_LOCALES, DEFAULT_LOCALE, MESSAGES } from '../src/constants/locales';
import results from '../.jest-test-results.json';

setIntlConfig({
  locales: Object.values(SUPPORTED_LOCALES),
  defaultLocale: DEFAULT_LOCALE,
  getMessages: locale => MESSAGES[locale],
});

addDecorator(withIntl);
addDecorator(jsxDecorator);

addDecorator(
  withTests({
    results,
  })
);

const ROOT_URL = 'https://apidev.testesolidar.com/v1/';

const data = {
  email: 'pedro@esolidar.com',
  password: '123456',
};

axios
  .post(`${ROOT_URL}auth`, data)
  .then(function (response) {
    const { data } = response.data;

    window.localStorage.setItem('token', data.token);
    window.localStorage.setItem('user', JSON.stringify(data.user));
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#1c1c1c' },
    light: { ...themes.normal },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  themes: {
    list: [{ name: 'Whitelabel client', class: 'whitelabel-client-theme' }],
  },
  fixtures: {
    auth: {
      admin: JSON.stringify({ token: window.localStorage.getItem('token') }),
      member: {
        token: window.localStorage.getItem('token'),
        name: JSON.parse(window.localStorage.getItem('user')).name,
        email: JSON.parse(window.localStorage.getItem('user')).email,
        isAdmin: Boolean(JSON.parse(window.localStorage.getItem('user')).is_admin),
      },
    },
  },
};

export const decorators = [
  Story => (
    <>
      <ReactTooltip className="tooltip-component" />
      <Story />
    </>
  ),
];
