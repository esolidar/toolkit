import React from 'react';
import '@testing-library/jest-dom';
import translation from '@esolidar/i18n/projects/toolkit/en';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ValidateTelephone from '../index';

const propsWithoutValidatePhone = {
  localStorage: {
    lang: 'pt',
    user: JSON.stringify({
      id: '51792',
    }),
  },
  validatePhone: {
    code: 200,
    data: {
      phone: {
        user_id: 1,
        phone: '+351919552199',
        code: 1955,
        twilio_sid: 'SM88bee75b4d214539a7f1db2828ac3ed3',
        dateAdded: '2020-12-28 12:40:19',
        updatedDate: '2020-12-28 12:40:19',
        id: 146,
      },
    },
  },
  confirmPhone: {},
};

const user = {
  phones: [
    {
      code: '6121',
      phone: '+351919552199',
      user_id: 51792,
      verified: 1,
    },
  ],
};

beforeAll(() => {
  localStorage.setItem('user', JSON.stringify(user));
});

test('should render component ValidateTelephone and verify if exist input', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <ValidateTelephone {...propsWithoutValidatePhone} />
    </IntlProvider>
  );

  expect(screen.getByPlaceholderText('+1 (702) 123-4567')).toBeInTheDocument();
});

test('Should exist Validate button, insert phone number and appear box confirm code', () => {
  render(
    <IntlProvider locale="en" messages={translation}>
      <ValidateTelephone {...propsWithoutValidatePhone} />
    </IntlProvider>
  );

  const searchInput = screen.getByText(/Verify/i);
  expect(screen.getByText(/Verify/i)).toBeInTheDocument();
  expect(searchInput.value).toBe('');
  fireEvent.change(searchInput, { target: { value: '919552199' } });
  expect(screen.getByText(/Insert your validation code/i)).toBeInTheDocument();
  expect(screen.getByText(/Verify/i)).toBeInTheDocument();
});
