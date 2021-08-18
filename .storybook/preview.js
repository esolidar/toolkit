import 'bootstrap/dist/css/bootstrap.css';
// import '!style-loader!css-loader!sass-loader!../src/index.scss';

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
};
