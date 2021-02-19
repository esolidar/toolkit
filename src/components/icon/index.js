import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass, style }) => <i className={iconClass} style={style} />;

Icon.propTypes = {
  iconClass: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
