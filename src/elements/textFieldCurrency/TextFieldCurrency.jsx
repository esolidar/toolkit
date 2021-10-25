import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import removeAllButLast from '../../utils/removeAllButLast';
import isDefined from '../../utils/isDefined';
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

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.updateState(
        {
          formattedValue: this.props.intl.formatNumber(this.props.value, {
            style: 'currency',
            currency: this.state.prefix,
            minimumFractionDigits: this.props.decimalScale,
            maximumFractionDigits: this.props.decimalScale,
          }),
          value: this.props.value
            ? removeAllButLast(this.props.value.replace(/[^\d,.]/g, '').replace(',', '.'), '.')
            : '',
        },
        () => {
          const el = document.getElementById(this.props.id);
          if (isDefined(el))
            el.value = this.props.intl.formatNumber(this.props.value, {
              style: 'currency',
              currency: this.state.prefix,
              minimumFractionDigits: this.props.decimalScale,
              maximumFractionDigits: this.props.decimalScale,
            });
        }
      );
    }
  }

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

    if (isDefined(value) && value > 0)
      el.value = this.props.intl.formatNumber(value, {
        style: 'currency',
        currency: prefix,
        minimumFractionDigits: this.props.decimalScale,
        maximumFractionDigits: this.props.decimalScale,
      });

    this.setState(
      {
        value: value ? Number(value).toFixed(this.props.decimalScale) : '',
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

  updateState = (state, callback) => {
    this.setState(state, callback);
  };

  render() {
    const { value, formattedValue } = this.state;
    const { label, placeholder, className, disabled, error, message, id } = this.props;

    const inputProps = {
      label,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      error,
      value: value ? formattedValue : null,
      placeholder,
      disabled,
      className,
      message,
      id,
    };

    return <TextField {...inputProps} />;
  }
}

TextFieldCurrency.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  prefix: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  intl: PropTypes.object,
  error: PropTypes.string,
  message: PropTypes.string,
  decimalScale: PropTypes.number,
  id: PropTypes.string,
};

TextFieldCurrency.defaultProps = {
  decimalScale: 2,
  value: null,
};

export default injectIntl(TextFieldCurrency);
