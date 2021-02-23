import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
// import * as Sentry from '@sentry/browser';
// import '../../../less/buttons.less';
// import env from '../../../config/configEnv';

const ErrorBoundary = ({ cssClass, color, env }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  let email = '';

  switch (localStorage.lang) {
    case 'pt':
      email = 'ajuda@esolidar.com';
      break;
    case 'br':
      email = 'meajuda@esolidar.com';
      break;
    case 'en':
      email = 'help@esolidar.com';
      break;
    default:
      email = 'help@esolidar.com';
      break;
  }

  if (hasError) {
    return (
      <div className={`boundary ${this.props.cssClass}`}>
        <h3 style={{ color: color.primaryColor }}>
          <div className="icon">
            <img
              src={`${env.cdn_static_url}/whitelabel-frontend/assets/disconnected-400.png`}
              alt="Warning"
            />
          </div>
          <FormattedMessage id="error.boundary" defaultMessage="Something went wrong." />
        </h3>
        {this.props.showDesc && (
          <div>
            {error && (
              <p style={{ color: color.primaryColor }}>
                <button
                  className="btn-error-boundary"
                  onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}
                >
                  <FormattedMessage
                    id="error.boundary.message"
                    defaultMessage="If the problem persists, please contact us {email}"
                    values={{
                      email: <a href={`mailto:${email}`}>{email}</a>,
                    }}
                  />
                </button>
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
  return this.props.children;
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  cssClass: PropTypes.string,
  showDesc: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
  cssClass: '',
  showDesc: true,
};

export default ErrorBoundary;
