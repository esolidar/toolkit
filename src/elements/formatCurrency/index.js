import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { removeAllButLast } from '../../utils/removeAllButLast';

class FormatCurrency extends Component {
  state = {
    value: this.props.value,
    currency: this.props.currency,
    formattedValue: this.props.intl.formatNumber(this.props.value, {
      style: 'currency',
      currency: this.props.currency,
    }),
  };

  onChange = e => {
    e.persist();
    const el = e.target;
    const inputValue = el.value;

    this.setState({
      value: inputValue
        ? removeAllButLast(inputValue.replace(/[^\d,.]/g, '').replace(',', '.'), '.')
        : '',
      formattedValue: el.value,
    });
  };

  onFocus = e => {
    e.persist();
    const el = e.target;
    const { value } = this.state;

    el.value = value;
  };

  onKeyDown = e => {
    e.persist();
    const el = e.target;
    const inputValue = el.value;
    const regex = /^[0-9]+(\.,){1}[0-9]+$/;

    if (!regex.test(inputValue)) {
      el.value = removeAllButLast(inputValue.replace(/[^\d,.]/g, '').replace(',', '.'), '.');
      return false;
    }
    el.value = removeAllButLast(inputValue.replace(/[^\d,.]/g, '').replace(',', '.'), '.');
    return true;
  };

  onBlur = e => {
    const el = e.target;
    const { value, currency } = this.state;

    el.value = this.props.intl.formatNumber(value, {
      style: 'currency',
      currency,
    });

    this.setState(
      {
        value: value ? Number(value).toFixed(2) : '',
        formattedValue: el.value,
      },
      () => {
        const valueObj = {
          formattedValue: this.state.formattedValue,
          value: this.state.value,
          floatValue: parseFloat(this.state.value),
        };

        this.props.onChange(valueObj);
      }
    );
  };

  render() {
    const { value, formattedValue } = this.state;
    const { placeholder, className, disabled, error, message } = this.props;

    const inputProps = {
      value: value ? formattedValue : '',
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      placeholder,
      disabled,
      className,
      error,
      message,
    };

    return <input {...inputProps} />;
  }
}

FormatCurrency.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  intl: intlShape,
  error: PropTypes.string,
  message: PropTypes.string,
};

export default injectIntl(FormatCurrency);
