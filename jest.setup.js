/* eslint-disable global-require */
/* eslint-disable func-names */

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const intlProvider = new reactIntl.IntlProvider(
    {
      locale: 'en',
      messages: require('@esolidar/i18n/projects/toolkit/en'),
    },
    {}
  );
  return {
    ...reactIntl,
    useIntl: () => {
      return intlProvider.state.intl;
    },
  };
});
