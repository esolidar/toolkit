/* eslint-disable global-require */

import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

function nodeWithIntlProp(node, { intl }) {
  return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, setLocale) {
  const messages = require('@esolidar/i18n/projects/toolkit/en');
  const intlProvider = new IntlProvider({ locale: setLocale, messages }, {});
  const { intl } = intlProvider.getChildContext();
  return shallow(nodeWithIntlProp(node, { intl }), {
    context: { intl },
  });
}

export function mountWithIntl(node, setLocale) {
  const messages = require('@esolidar/i18n/projects/toolkit/en');
  const intlProvider = new IntlProvider({ locale: setLocale, messages }, {});
  const { intl } = intlProvider.getChildContext();

  return mount(nodeWithIntlProp(node, { intl }), {
    context: { intl },
    childContextTypes: { intl: intlShape },
  });
}
