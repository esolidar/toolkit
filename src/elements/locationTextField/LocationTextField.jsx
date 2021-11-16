/* global google */

import React from 'react';
import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';
import classnames from 'classnames';
import InputLabel from '../inputLabel';
import Icon from '../../components/icon';

const TextField = ({
  field,
  id,
  label,
  error,
  placeholder,
  message,
  disabled,
  help,
  required,
  className,
  dataTestId,
  inputRef,
  children,
  info,
  showOptionalLabel,
  leftIcon,
  rightIcon,
  password,
  onSuggestSelect,
  onSuggestNoResults,
  local,
  latitude,
  longitude,
  size,
  onBlur,
  onChange,
}) => (
  <div
    className={classnames(
      'locationTextField',
      { 'form-group': !password },
      { 'has-error': error || message },
      { required },
      className
    )}
  >
    {label && (
      <InputLabel
        field={id || field}
        label={label}
        showOptionalLabel={showOptionalLabel}
        help={help}
      />
    )}
    {!children && (
      <div className={classnames(`size-${size}`, 'input')}>
        {leftIcon?.show && (
          <Icon
            iconClass={`icon left ${leftIcon?.name}`}
            onClick={leftIcon?.onClick}
            style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
            dataTestId="input-left-icon"
          />
        )}
        <Geosuggest
          data-testid={dataTestId}
          placeholder={placeholder}
          onSuggestSelect={onSuggestSelect}
          onSuggestNoResults={onSuggestNoResults}
          initialValue={local}
          location={new google.maps.LatLng(latitude, longitude)}
          radius="20"
          className={classnames({ 'left-icon': leftIcon })}
          disabled={disabled}
          ref={inputRef}
          onBlur={onBlur}
          onChange={onChange}
        />
        {rightIcon?.show && (
          <Icon
            iconClass={`icon right ${rightIcon?.name}`}
            onClick={rightIcon?.onClick}
            style={{ cursor: rightIcon?.onClick ? 'pointer' : 'default' }}
            dataTestId="input-right-icon"
          />
        )}
      </div>
    )}
    {children && children}
    {info && <span className="footer-label-info">{info}</span>}
    {error && <span className="help-block">{error}</span>}
    {message && <span className="help-block">{message}</span>}
  </div>
);

TextField.propTypes = {
  dataTestId: PropTypes.string,
  info: PropTypes.string,
  field: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  placeholder: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputRef: PropTypes.object,
  children: PropTypes.node,
  showOptionalLabel: PropTypes.bool,
  password: PropTypes.bool,
  leftIcon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
  }),
  rightIcon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
  }),
  onSuggestSelect: PropTypes.func,
  onSuggestNoResults: PropTypes.func,
  local: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  size: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  children: null,
  showOptionalLabel: false,
  size: 'lg',
};

export default TextField;
