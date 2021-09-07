/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass, style, dataTestId, onClick }) => (
  <i className={iconClass} style={style} data-testid={dataTestId} onClick={onClick} />
);

Icon.propTypes = {
  iconClass: PropTypes.string,
  style: PropTypes.object,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
