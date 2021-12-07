import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Icon from '../../components/icon';
import Tooltip from '../tooltip';

const InputLabel = ({
  field,
  label,
  showOptionalLabel,
  cssClass = '',
  style,
  help,
  fontWeight = 600,
  required = false,
  requiredText,
}) => {
  const cssStyle = { ...style, fontWeight };

  return (
    <>
      <label
        htmlFor={field}
        className={classnames('control-label', 'd-flex', cssClass)}
        style={cssStyle}
      >
        {label}
        &nbsp;
        {showOptionalLabel && (
          <span className="label-optional">
            (<FormattedMessage id="optional" />)
          </span>
        )}
        {required && (
          <Tooltip
            bodyChildClassName="ml-auto"
            tooltipBodyChild={<Icon iconClass="icon-httpslock" />}
            overlay={<span>{requiredText}</span>}
            displayNone={!requiredText}
          />
        )}
      </label>
      {help && <p className="help">{help}</p>}
    </>
  );
};

InputLabel.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string.isRequired,
  showOptionalLabel: PropTypes.bool,
  cssClass: PropTypes.string,
  style: PropTypes.object,
  help: PropTypes.string,
  fontWeight: PropTypes.number,
  required: PropTypes.bool,
  requiredText: PropTypes.string,
};

export default InputLabel;
