import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const InputLabel = ({ field, label, showOptionalLabel, cssClass, style }) => (
  <label htmlFor={field} className={`control-label ${cssClass}`} style={style}>
    {label}
    {showOptionalLabel && (
      <span className="label-optional">
        (<FormattedMessage id="optional" />)
      </span>
    )}
  </label>
);

InputLabel.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string.isRequired,
  showOptionalLabel: PropTypes.bool,
  cssClass: PropTypes.string,
  style: PropTypes.object,
};

export default InputLabel;
