import '@testing-library/jest-dom';
import { FormattedMessage } from 'react-intl';
import { validations } from '../index';

const data = {
  video: '',
  isValidBankAccount: false,
  isMyProjet: false,
  images: {
    length: 0,
  },
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

test('All validatios pass', () => {
  const filledData = {
    ...data,
    images: {
      length: 1,
    },
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

  expect(validations(filledData)).toEqual({
    errors: {},
    isValid: true,
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
