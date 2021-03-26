import React from 'react';
import { FormattedMessage } from 'react-intl';
import isEmpty from '../../utils/isEmpty';

export default function validateAuctionForm(data) {
  const errors = {};

  if (!data.isValidBankAccount && data.isMyProjet) {
    errors.bankAccount = (
      <FormattedMessage
        id="user.register.error.bank.account"
        defaultMessage="Please add either a national or international bank account"
      />
    );
  }

  if (data.images.length === 0) {
    errors.images = (
      <FormattedMessage
        id="user.register.error.images.required"
        defaultMessage="You must upload at least one image"
      />
    );
  }

  if (isEmpty(data.title)) {
    errors.title = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (isEmpty(data.bid_start)) {
    errors.bid_start = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (isEmpty(data.bid_interval)) {
    errors.bid_interval = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (isEmpty(data.bid_max_interval)) {
    errors.bid_max_interval = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (data.dateLimit === undefined) {
    errors.dateLimit = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (data.dateStart === undefined) {
    errors.dateStart = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (isEmpty(data.description)) {
    errors.description = (
      <FormattedMessage id="user.register.error.required" defaultMessage="This field is required" />
    );
  }

  if (data.showBrands) {
    if (!data.brand_id) {
      errors.brand_id = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
    }
  }

  if (data.private === '1') {
    if (isEmpty(data.private_code)) {
      errors.private_code = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
    }
    if (data.private_code && data.private_code.length < 6) {
      errors.private_code = (
        <FormattedMessage
          id="user.register.error.length6characteres"
          defaultMessage="Enter at least 6 characters"
        />
      );
    }
  }

  if (data.showInstitutions && !data.showProjects) {
    if (isEmpty(data.user_id.toString())) {
      errors.user_id = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
    }
  }

  if (data.showInstitutions && data.showProjects) {
    if (!+data.user_id && data.projectIds.length === 0) {
      errors.user_id = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
      errors.projectIds = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
    }
    if (!!+data.user_id && data.projectIds.length > 0) {
      errors.user_id = (
        <FormattedMessage
          id="user.register.error.select.only.one"
          defaultMessage="You can not select a cause and a project, please select only one."
        />
      );
      errors.projectIds = (
        <FormattedMessage
          id="user.register.error.select.only.one"
          defaultMessage="You can not select a cause and a project, please select only one."
        />
      );
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
