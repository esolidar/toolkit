import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useIntl, FormattedMessage } from 'react-intl';
import Tooltip from '../tooltip';
import Badge from '../badge';

const InputLabel = ({
  field,
  label,
  showOptionalLabel,
  className = '',
  style,
  help,
  fontWeight = 600,
  isPrivate = false,
  privateText,
  size = 'lg',
}) => {
  const intl = useIntl();
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
        {isPrivate && (
          <Tooltip
            tooltipBodyChild={<Badge text={intl.formatMessage({ id: 'toolkit.private' })} />}
            overlay={<span>{privateText}</span>}
            displayNone={!privateText}
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
  isPrivate: PropTypes.bool,
  privateText: PropTypes.string,
  size: PropTypes.string,
};

export default InputLabel;
