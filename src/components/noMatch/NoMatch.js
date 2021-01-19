import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const NoMatch = ({
  color,
  link,
  linkText,
}) => (
  <>
    <div className="not-found-page mx-auto">
      <div className="text-center">
        <div
          data-testid="error-404"
          className="error-404"
          style={{ color }}
        >
          404
        </div>
      </div>
      <div className="div-message">
        <div
          className="message-404"
          data-testid="message-404"
          style={{ color }}
        >
          <FormattedMessage
            id="error-404-message"
            defaultMessage="Sorry, the page you are looking for could not be found!"
          />
        </div>
      </div>
      <div className="div-link-homepage">
        <a
          className="link-homepage"
          data-testid="link-homepage"
          href={link}
        >
          {linkText}
        </a>
      </div>
    </div>
  </>
);

NoMatch.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default NoMatch;
