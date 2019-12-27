import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass }) => (
  <i className={iconClass} />
);

Icon.propTypes = {
  iconClass: PropTypes.string,
};

export default Icon;
