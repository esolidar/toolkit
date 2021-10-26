import React from 'react';
import { FormattedMessage } from 'react-intl';
import isEmpty from '../../utils/isEmpty';
import isDefined from '../../utils/isDefined';
import isValidRegex from '../../utils/isValidRegex';
import { youtubeUrl } from '../../constants/regex';

export default function validateAuctionForm(data) {
  const errors = {};

  if (isDefined(data.video) && data.video !== '' && !isValidRegex(youtubeUrl, data.video)) {
    errors.video = <FormattedMessage id="user.register.error.video" />;
  }

  if (!data.isValidBankAccount && data.isMyProjet) {
    errors.bankAccount = <FormattedMessage id="user.register.error.bank.account" />;
  }

  if (data.images.length === 0) {
    errors.images = <FormattedMessage id="user.register.error.images.required" />;
  }

  if (isEmpty(data.title)) {
    errors.title = <FormattedMessage id="required" />;
  }

  if (isEmpty(data.bid_start)) {
    errors.bid_start = <FormattedMessage id="required" />;
  }

  if (isEmpty(data.bid_interval)) {
    errors.bid_interval = <FormattedMessage id="required" />;
  }

  if (isEmpty(data.bid_max_interval)) {
    errors.bid_max_interval = <FormattedMessage id="required" />;
  }

  if (data.dateLimit === undefined) {
    errors.dateLimit = <FormattedMessage id="required" />;
  }

  if (data.dateStart === undefined) {
    errors.dateStart = <FormattedMessage id="required" />;
  }

  if (isEmpty(data.description)) {
    errors.description = <FormattedMessage id="required" />;
  }

  if (data.showBrands) {
    if (!data.brand_id) {
      errors.brand_id = <FormattedMessage id="required" />;
    }
  }

  if (data.private === '1') {
    if (isEmpty(data.private_code)) {
      errors.private_code = <FormattedMessage id="required" />;
    }
    if (data.private_code && data.private_code.length < 6) {
      errors.private_code = <FormattedMessage id="user.register.error.length6characteres" />;
    }
  }

  if (data.showInstitutions && !data.showProjects) {
    if (isEmpty(data.user_id.toString())) {
      errors.user_id = <FormattedMessage id="required" />;
    }
  }

  if (data.showInstitutions && data.showProjects) {
    if (!data.beneficiary) {
      errors.beneficiary = <FormattedMessage id="required" />;
    } else {
      if (!+data.user_id && data.projectIds.length === 0) {
        errors.user_id = <FormattedMessage id="required" />;
        errors.projectIds = <FormattedMessage id="required" />;
      }
      if (!!+data.user_id && data.projectIds.length > 0) {
        errors.user_id = <FormattedMessage id="user.register.error.select.only.one" />;
        errors.projectIds = <FormattedMessage id="user.register.error.select.only.one" />;
      }
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
