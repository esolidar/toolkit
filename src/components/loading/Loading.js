import React from 'react';
import { isIE } from 'react-device-detect';
import PropTypes from 'prop-types';

const Loading = ({ loadingClass, message }) => (
  <div className={loadingClass}>
    {isIE
      ? (<div className="ie-loader" />) : (
        <div>
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
};
