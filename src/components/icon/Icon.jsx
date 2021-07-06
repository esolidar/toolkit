import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconClass, style, dataTestId }) => (
  <i className={iconClass} style={style} data-testid={dataTestId} />
);

Icon.propTypes = {
  iconClass: PropTypes.string,
  style: PropTypes.object,
  dataTestId: PropTypes.string,
};

export default Icon;
