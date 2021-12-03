import '@testing-library/jest-dom';
import { useIntl } from 'react-intl';
import getStatus from '.';

test('isArray function', () => {
  const intl = useIntl();

  expect(getStatus('draft', intl.formatMessage)).toBe('Draft');
});
