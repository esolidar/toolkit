import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const InputLabel = ({ field, label, showOptionalLabel, cssClass = '', style, help }) => (
  <>
    <label htmlFor={field} className={`control-label ${cssClass}`} style={style}>
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

InputLabel.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string.isRequired,
  showOptionalLabel: PropTypes.bool,
  cssClass: PropTypes.string,
  style: PropTypes.object,
  help: PropTypes.string,
};

export default InputLabel;
