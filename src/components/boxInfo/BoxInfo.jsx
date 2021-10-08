import React from 'react';
import PropTypes from 'prop-types';
import isDefined from '../../utils/isDefined';

const BoxInfo = ({ button, className, style, text }) => (
  <div className={`box box-info ${className}`} style={style}>
    <div className="box-info__div-text">
      <p className={`box-info__text ${isDefined(button) ? 'small' : ''}`}>{text}</p>
    </div>
    <div className="box-info__button">{button}</div>
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
