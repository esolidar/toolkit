import React from 'react';
import PropTypes from 'prop-types';
import isDefined from '../../utils/isDefined';

const BoxInfo = ({ button, className, style, text }) => (
  <div className={`box box-info ${className}`} style={style}>
    <p className={`text ${isDefined(button) ? 'small' : ''}`}>{text}</p>
    {button}
  </div>
);

BoxInfo.propTypes = {
  button: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

BoxInfo.defaultProps = {
  className: '',
};

export default BoxInfo;
