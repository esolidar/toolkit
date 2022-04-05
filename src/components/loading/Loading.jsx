import React from 'react';
import { isIE } from 'react-device-detect';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Loading = ({ loadingClass, message, curtain, size, white }) => (
  <div className={classnames('loadingWrapper', loadingClass, { curtain })}>
    {isIE ? (
      <div className="ie-loader" />
    ) : (
      <div className={classnames('Loading', `loader-${size}`)}>
        <div className={classnames('loader', { white })} />
        <div className="loader-message">{message}</div>
      </div>
    )}
  </div>
);

export default Loading;

Loading.propTypes = {
  loadingClass: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  curtain: PropTypes.bool,
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl']),
  white: PropTypes.bool,
};

Loading.defaultProps = {
  curtain: false,
  size: 'md',
};
