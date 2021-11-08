import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

const InputLabel = ({
  field,
  label,
  showOptionalLabel,
  cssClass = '',
  style,
  help,
  fontWeight = 600,
}) => {
  const cssStyle = { ...style, fontWeight };

  return (
    <>
      <label htmlFor={field} className={classnames('control-label', cssClass)} style={cssStyle}>
        {label}
        &nbsp;
        {showOptionalLabel && (
          <span className="label-optional">
            (<FormattedMessage id="optional" />)
          </span>
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
};

export default InputLabel;
