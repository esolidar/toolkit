/* global expect */

import React from 'react';
import '@testing-library/jest-dom';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ValidateTelephone from '../ValidateTelephone';

const propsWithoutValidatePhone = {
  localStorage: {
    lang: 'pt',
    user: {
      id: '51792',
    },
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
  confirmPhone: {
  },
};

const propsWithValidatePhone = {
  localStorage: {
    lang: 'pt',
    user: {
      id: '51792',
      phones: [
        {
          code: '6121',
          dateAdded: '2020-09-30 11:10:45',
          id: 134,
          main: 1,
          phone: '+351919552199',
          user_id: 51792,
          verified: 1,
        },
      ],
    },
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
  confirmPhone: {
    code: 200,
    data: {
      confirm: true,
      phone: {
        id: 147,
        user_id: 1,
        phone: '+351919552199',
        code: '2869',
        main: 0,
        twilio_sid: 'SMeab42f2f139e44be90289f3aea71b4e3',
        verified: 1,
        updatedDate: '2020-12-28 12:54:29',
        dateAdded: '2020-12-28 12:54:09',
      },
    },
  },
};

test('should render component ValidateTelephone and verify if exist input', () => {
  render(<IntlProvider locale="en"><ValidateTelephone {...propsWithoutValidatePhone} /></IntlProvider>);

  expect(screen.getByPlaceholderText('+1 (702) 123-4567')).toBeInTheDocument();
});

test('Should exist Validate button, insert phone number and appear box confirm code', () => {
  render(<IntlProvider locale="en"><ValidateTelephone {...propsWithoutValidatePhone} /></IntlProvider>);

  const searchInput = screen.getByText(/Verify/i);
  expect(screen.getByText(/Verify/i)).toBeInTheDocument();
  expect(searchInput.value).toBe('');
  fireEvent.change(searchInput, { target: { value: '919552199' } });
  expect(screen.getByText(/Insert your validation code/i)).toBeInTheDocument();
  expect(screen.getByText(/Verify/i)).toBeInTheDocument();
});

test('should phone number verified', () => {
  render(<IntlProvider locale="en"><ValidateTelephone {...propsWithValidatePhone} /></IntlProvider>);

  expect(screen.getByTestId('verified-number')).toBeInTheDocument();
});
