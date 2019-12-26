import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({ iconClass }) => (
  <i className={iconClass} />
);

Icon.propTypes = {
  iconClass: PropTypes.string,
};

export default Icon;
