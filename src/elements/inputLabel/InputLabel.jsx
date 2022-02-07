import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Icon from '../icon';
import Tooltip from '../tooltip';

const InputLabel = ({
  field,
  label,
  showOptionalLabel,
  className = '',
  style,
  help,
  fontWeight = 600,
  required = false,
  requiredText,
  size = 'lg',
}) => {
  const cssStyle = { ...style, fontWeight };

  return (
    <div className="input-label-component">
      <div className={classnames('input-label-component__label', `size-${size}`, className)}>
        <label htmlFor={field} className="control-label" style={cssStyle}>
          {label}
        </label>
        {showOptionalLabel && (
          <span className="label-optional">
            (<FormattedMessage id="optional" />)
          </span>
        )}
        {required && (
          <Tooltip
            tooltipBodyChild={<Icon name="LockBold" size="sm" />}
            overlay={<span>{requiredText}</span>}
            displayNone={!requiredText}
          />
        )}
      </div>
      {help && <p className={classnames('help', `size-${size}`)}>{help}</p>}
    </div>
  );
};

InputLabel.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string.isRequired,
  showOptionalLabel: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  help: PropTypes.string,
  fontWeight: PropTypes.number,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
  size: PropTypes.string,
};

export default InputLabel;
