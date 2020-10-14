import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { FormattedNumber, FormattedMessage } from 'react-intl';
// import env from '../../../../../../config/configEnv';

const ContributeRow = ({ contribute, env }) => (
  <div className="contribute-row-box">
    <div className="contribute-thumb">
      {contribute.hidden === 1
          && (
          <img
            src={`${env.cdn_static_url}/frontend/assets/anonymous-user.svg`}
            alt="anonymous"
          />
          )}
      {contribute.hidden === 0
          && (
          <img
            src={contribute.contributor.thumbs.thumb}
            alt="User"
          />
          )}
    </div>
    <div>
      <span className="contribute-row-date">
        <Moment fromNow utc ago>{contribute.created_at}</Moment>
      </span>
      <span className="contribute-row-text">
        <div>
          {contribute.hidden === 0
              && <div className="user">{contribute.contributor.name}</div>}
          {contribute.hidden === 1
              && (
              <div className="user">
                <FormattedMessage
                  id="crowdfunding.anonymous"
                  defaultMessage="Anonymous user"
                />
              </div>
              )}
          <FormattedNumber
            value={contribute.payment_product.amount}
            style="currency"
            currency={contribute.payment_product.currency.small}
          />
          <p className="message">
            {contribute.message}
          </p>
        </div>
      </span>
    </div>
  </div>
);

export default ContributeRow;

ContributeRow.propTypes = {
  contribute: PropTypes.object,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};
