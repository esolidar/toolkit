import React from 'react';
import { FormattedMessage } from 'react-intl';
import isEmpty from 'lodash/isEmpty';

export default function validateAuctionForm(data) {
  const errors = {};
  debugger;
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
      <FormattedMessage
        id="user.register.error.required"
        defaultMessage="This field is required"
      />
    );
  }

  if (isEmpty(data.bid_start)) {
    errors.bid_start = (
      <FormattedMessage
        id="user.register.error.required"
        defaultMessage="This field is required"
      />
    );
  }

  if (isEmpty(data.dateLimit)) {
    errors.dateLimit = (
      <FormattedMessage
        id="user.register.error.required"
        defaultMessage="This field is required"
      />
    );
  }

  if (isEmpty(data.dateStart)) {
    errors.dateStart = (
      <FormattedMessage
        id="user.register.error.required"
        defaultMessage="This field is required"
      />
    );
  }

  if (isEmpty(data.description)) {
    errors.description = (
      <FormattedMessage
        id="user.register.error.required"
        defaultMessage="This field is required"
      />
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
    if (data.private_code.length < 6) {
      errors.private_code = (
        <FormattedMessage
          id="user.register.error.length6characteres"
          defaultMessage="Enter at least 6 characters"
        />
      );
    }
  }

  if (data.showInstitutions && !data.showProjects) {
    if (isEmpty(data.user_id)) {
      errors.user_id = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
    }
  }

  if (data.showInstitutions && data.showProjects) {
    if (isEmpty(data.user_id) || data.projectIds.length === 0) {
      errors.user_id = (
        <FormattedMessage
          id="user.register.error.required"
          defaultMessage="This field is required"
        />
      );
    }
    if (!isEmpty(data.user_id) || data.projectIds.length > 1) {
      errors.user_id = (
        <FormattedMessage
          id="user.register.error.select.only.one"
          defaultMessage="'You can not select a cause and a project, please select only one.'"
        />
      );
      errors.projectIds = (
        <FormattedMessage
          id="user.register.error.select.only.one"
          defaultMessage="'You can not select a cause and a project, please select only one.'"
        />
      );
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
