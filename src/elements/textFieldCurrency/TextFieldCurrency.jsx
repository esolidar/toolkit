import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { removeAllButLast } from '../../utils/removeAllButLast';
import TextField from '../textField';

class TextFieldCurrency extends Component {
  state = {
    value: this.props.value,
    prefix: this.props.prefix,
    formattedValue: this.props.intl.formatNumber(this.props.value, {
      style: 'currency',
      currency: this.props.prefix,
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
    const { value, prefix } = this.state;

    el.value = this.props.intl.formatNumber(value, {
      style: 'currency',
      currency: prefix,
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
    const { label, placeholder, className, disabled, error, message } = this.props;

    const inputProps = {
      label,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      error,
      value: value ? formattedValue : '',
      placeholder,
      disabled,
      className,
      message,
    };

    return <TextField {...inputProps} />;
  }
}

TextFieldCurrency.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  prefix: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  intl: PropTypes.object,
  error: PropTypes.string,
  message: PropTypes.string,
  decimalScale: PropTypes.number,
};

TextFieldCurrency.defaultProps = {
  decimalScale: 0,
  value: '',
};

export default injectIntl(TextFieldCurrency);
