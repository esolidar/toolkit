import React from 'react';
import { isIE } from 'react-device-detect';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Loading = ({ loadingClass, message, curtain }) => (
  <div className={classnames(loadingClass, { curtain })}>
    {isIE ? (
      <div className="ie-loader" />
    ) : (
      <div className="Loading">
        <div className="loader" />
        <div className="loader-message">{message}</div>
      </div>
    )}
  </div>
);

export default Loading;

Loading.propTypes = {
  loadingClass: PropTypes.string,
  message: PropTypes.string,
  curtain: PropTypes.bool,
};

Loading.defaultProps = {
  curtain: false,
};
