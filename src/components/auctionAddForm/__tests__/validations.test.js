import '@testing-library/jest-dom';
import { FormattedMessage } from 'react-intl';
import { validations } from '../index';

const data = {
  video: '',
  isValidBankAccount: false,
  isMyProjet: false,
  images: [],
  title: '',
  bid_start: '',
  bid_interval: '',
  bid_max_interval: '',
  dateLimit: '',
  dateStart: '',
  description: '',
  showBrands: true,
  brand_id: undefined,
  private: '0',
  private_code: '',
  showInstitutions: true,
  showProjects: true,
  user_id: '',
  beneficiary: 'Projects',
  projectIds: '',
};

const filledData = {
  ...data,
  images: [
    {
      id: 1,
    },
  ],
  title: 'Auction Title',
  bid_start: '1',
  bid_interval: '1',
  bid_max_interval: '100',
  dateLimit: '2021-05-09',
  dateStart: '2021-05-07',
  description: 'Auction Description',
  showBrands: true,
  brand_id: 1,
  private: '0',
  showInstitutions: true,
  showProjects: false,
  user_id: 19,
  beneficiary: '',
};

const errors = {
  bid_interval: <FormattedMessage id="user.register.error.required" />,
  bid_max_interval: <FormattedMessage id="user.register.error.required" />,
  bid_start: <FormattedMessage id="user.register.error.required" />,
  brand_id: <FormattedMessage id="user.register.error.required" />,
  description: <FormattedMessage id="user.register.error.required" />,
  images: <FormattedMessage id="user.register.error.images.required" />,
  title: <FormattedMessage id="user.register.error.required" />,
  user_id: <FormattedMessage id="user.register.error.required" />,
  projectIds: <FormattedMessage id="user.register.error.required" />,
};

test('All validations pass', () => {
  expect(validations(filledData)).toEqual({
    errors: {},
    isValid: true,
  });
});

test('Youtube field error', () => {
  const youtubeData = {
    ...filledData,
    video: 'test',
  };
  const errorYoutube = {
    video: <FormattedMessage id="user.register.error.video" />,
  };

  expect(validations(youtubeData)).toEqual({
    errors: errorYoutube,
    isValid: false,
  });
});

test('Date Start and Date limit field error', () => {
  const datesData = {
    ...filledData,
    isValidBankAccount: false,
    isMyProjet: true,
  };
  const errorDates = {
    bankAccount: <FormattedMessage id="user.register.error.bank.account" />,
  };

  expect(validations(datesData)).toEqual({
    errors: errorDates,
    isValid: false,
  });
});

test('Date Start and Date limit field error', () => {
  const datesData = {
    ...filledData,
    dateLimit: undefined,
    dateStart: undefined,
  };
  const errorDates = {
    dateLimit: <FormattedMessage id="user.register.error.required" />,
    dateStart: <FormattedMessage id="user.register.error.required" />,
  };

  expect(validations(datesData)).toEqual({
    errors: errorDates,
    isValid: false,
  });
});

test('Private code empty field error', () => {
  const datesData = {
    ...filledData,
    private: '1',
    private_code: '',
  };
  const errorPrivateCode = {
    private_code: <FormattedMessage id="user.register.error.required" />,
  };

  expect(validations(datesData)).toEqual({
    errors: errorPrivateCode,
    isValid: false,
  });
});

test('Private code field error', () => {
  const datesData = {
    ...filledData,
    private: '1',
    private_code: '0000',
  };
  const errorPrivateCode = {
    private_code: <FormattedMessage id="user.register.error.length6characteres" />,
  };

  expect(validations(datesData)).toEqual({
    errors: errorPrivateCode,
    isValid: false,
  });
});

test('Private code field error', () => {
  const userIdData = {
    ...filledData,
    user_id: '',
  };
  const errorUserId = {
    user_id: <FormattedMessage id="user.register.error.required" />,
  };

  expect(validations(userIdData)).toEqual({
    errors: errorUserId,
    isValid: false,
  });
});

test('Without Projects field error', () => {
  const userIdData = {
    ...filledData,
    showProjects: true,
    beneficiary: 'Projects',
    projectIds: [
      {
        id: 1,
      },
    ],
  };

  const errorProjectId = {
    user_id: <FormattedMessage id="user.register.error.select.only.one" />,
    projectIds: <FormattedMessage id="user.register.error.select.only.one" />,
  };

  expect(validations(userIdData)).toEqual({
    errors: errorProjectId,
    isValid: false,
  });
});

test('Show required fields', () => {
  expect(validations(data)).toEqual({
    errors,
    isValid: false,
  });
});

test('Show required field beneficiary', () => {
  const dataBeneficiary = {
    ...data,
    beneficiary: '',
  };

  delete errors.user_id;
  delete errors.projectIds;

  expect(validations(dataBeneficiary)).toEqual({
    errors: {
      ...errors,
      beneficiary: <FormattedMessage id="user.register.error.required" />,
    },
    isValid: false,
  });
});
