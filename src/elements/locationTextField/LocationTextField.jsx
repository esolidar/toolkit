/* global google */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';
import classnames from 'classnames';
import InputLabel from '../inputLabel';
import Icon from '../icon';

const TextField = ({
  field,
  id,
  label,
  error,
  placeholder,
  message,
  messageNoResult,
  disabled,
  help,
  required,
  className,
  dataTestId,
  children,
  info,
  showOptionalLabel,
  leftIcon,
  password,
  onSuggestSelect,
  local,
  latitude,
  longitude,
  size,
  onBlur,
  onChange,
}) => {
  const [showNoResult, setShowNoResult] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(local);

  const geosuggestEl = useRef(null);

  const onSuggestNoResults = text => {
    if (text !== '' && text.length > 3) {
      setShowNoResult(true);
    }
  };

  const onUpdateSuggests = suggests => {
    if (suggests.length && showNoResult) {
      setShowNoResult(false);
    }
  };

  const handleShowDeleteButton = value => {
    if (value) setShowDeleteButton(true);
    else setShowDeleteButton(false);
  };

  const renderSuggestItem = item => {
    const [firstAddress, ...rest] = item.description.split(/[,/-]/);
    const restAddress = rest.join(',');

    return (
      <div className="item">
        <Icon
          name="MapPin"
          className="map-pin"
          onClick={leftIcon?.onClick}
          style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
          dataTestId="MapPin"
          size="sm"
        />
        <span className="item-bold">
          {firstAddress} <span className="not-bold">{restAddress}</span>
        </span>
      </div>
    );
  };

  return (
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
          size={size}
        />
      )}
      {!children && (
        <div className={classnames(`size-${size}`, 'input')}>
          {leftIcon?.show && (
            <Icon
              name={leftIcon?.name}
              className="icon-left"
              onClick={leftIcon?.onClick}
              style={{ cursor: leftIcon?.onClick ? 'pointer' : 'default' }}
              dataTestId="input-left-icon"
              size="sm"
            />
          )}
          <Geosuggest
            ref={geosuggestEl}
            data-testid={dataTestId}
            placeholder={placeholder}
            onSuggestSelect={() => {
              setShowNoResult(false);
              onSuggestSelect();
            }}
            onSuggestNoResults={onSuggestNoResults}
            initialValue={local}
            location={new google.maps.LatLng(latitude, longitude)}
            radius="20"
            className={classnames({ 'left-icon': leftIcon })}
            disabled={disabled}
            onBlur={onBlur}
            onChange={e => {
              onChange(e);
              handleShowDeleteButton(e);
            }}
            onUpdateSuggests={onUpdateSuggests}
            minLength={3}
            renderSuggestItem={renderSuggestItem}
            autoComplete="off"
          />
          {showDeleteButton && (
            <div className="item-delete-address">
              <Icon
                name="DeleteCircleBold"
                className="delete-circle-bold"
                onClick={() => {
                  geosuggestEl.current.clear();
                  setShowDeleteButton(false);
                  setShowNoResult(false);
                }}
                // style={{ cursor: rightIcon?.onClick ? 'pointer' : 'default' }}
                dataTestId="input-right-icon"
                size="sm"
              />
            </div>
          )}
          {showNoResult && (
            <div className="geosuggest__suggests-not-found">
              <div className="geosuggest__item">{messageNoResult}</div>
            </div>
          )}
        </div>
      )}
      {children && children}
      {info && <span className="footer-label-info">{info}</span>}
      {error && <div className="help-block">{error}</div>}
      {message && <div className="help-block">{message}</div>}
    </div>
  );
};

TextField.propTypes = {
  dataTestId: PropTypes.string,
  info: PropTypes.string,
  field: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  placeholder: PropTypes.string,
  message: PropTypes.string,
  messageNoResult: PropTypes.string,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
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
