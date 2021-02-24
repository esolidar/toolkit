import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as Sentry from '@sentry/browser';
import Button from '../../elements/button';

class ErrorBoundary extends Component {
  state = {
    hasError: true,
    error: true,
  };

  componentDidCatch(error, info) {
    Sentry.withScope(scope => {
      scope.setExtras(info);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });

    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    const { hasError, error } = this.state;
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
          <h3 style={{ color: this.props.color.primaryColor }}>
            <div className="icon">
              <img
                src={`${this.props.env.cdn_static_url}/whitelabel-frontend/assets/disconnected-400.png`}
                alt="Warning"
              />
            </div>
            <FormattedMessage id="error.boundary" defaultMessage="Something went wrong." />
          </h3>
          {this.props.showDesc && (
            <div>
              {error && (
                <p style={{ color: this.props.color.primaryColor }}>
                  <Button
                    extraClass="danger"
                    onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}
                  >
                    <FormattedMessage
                      id="error.boundary.message"
                      defaultMessage="If the problem persists, please contact us {email}"
                      values={{
                        email: <a href={`mailto:${email}`}>{email}</a>,
                      }}
                    />
                  </Button>
                </p>
              )}
            </div>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  cssClass: PropTypes.string,
  showDesc: PropTypes.bool,
  color: PropTypes.object,
  env: PropTypes.object,
};

ErrorBoundary.defaultProps = {
  cssClass: '',
  showDesc: true,
};

export default ErrorBoundary;
