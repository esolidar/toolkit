/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as Sentry from '@sentry/browser';

const LOAD_LIMIT = 0;
class ErrorBoundary extends Component {
  state = {
    hasError: this.props.showError,
    countReload: +localStorage.getItem('countReload') || 0,
    reload: true,
    forceReload: false,
  };

  componentDidCatch(error, info) {
    if (this.state.countReload < LOAD_LIMIT && this.state.reload) {
      localStorage.setItem('countReload', this.state.countReload + 1);
      window.location.reload();
    }

    if (this.state.countReload > LOAD_LIMIT) {
      localStorage.removeItem('countReload');
      this.updateState({ reload: false, countReload: 0 });
    }

    Sentry.withScope(scope => {
      scope.setExtras(info);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });

    this.setState({ hasError: true, forceReload: false });
  }

  handleReloadPage = () => {
    localStorage.setItem('countReload', 2);
    this.updateState({ reload: false, forceReload: true, hasError: false });
  };

  updateState = state => {
    this.setState(state);
  };

  render() {
    const { hasError } = this.state;
    const { className, color } = this.props;

    if (hasError) {
      return (
        <div className={`boundary ${className}`}>
          <div className="icon">
            <p data-testid="errorBoundary-emoji">⚠️</p>
          </div>
          <h3 data-testid="errorBoundary-title">
            <FormattedMessage
              id="error.boundary"
              defaultMessage="There was an error during loading"
            />
          </h3>
          <div className="link">
            <a
              className="retry-link"
              onClick={this.handleReloadPage}
              style={{ color: color.primaryColor }}
              data-testid="errorBoundary-link"
            >
              <FormattedMessage id="error.boundary.retry" defaultMessage="Retry" />
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  color: PropTypes.object,
  showError: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
  className: '',
  showError: false,
  color: {
    primaryColor: '#5AC3E1',
  },
};

export default ErrorBoundary;
