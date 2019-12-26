import React from 'react';
import { browserName } from 'react-device-detect';
import PropTypes from 'prop-types';
import './Loading.scss';

const Loading = ({ loadingClass, message, style }) => (
  <div className={loadingClass}>
    {browserName === 'IE'
      && <div className="ie-loader" />}
    {browserName !== 'IE'
      && (
        <div>
          <div className="loader" style={{ ...style }} />
          <div className="loader-message">{message}</div>
        </div>
      )}
  </div>
);

export default Loading;

Loading.propTypes = {
  loadingClass: PropTypes.string,
  message: PropTypes.string,
  /** To change loader color, just use the borderTopColor property. */
  style: PropTypes.object,
};
