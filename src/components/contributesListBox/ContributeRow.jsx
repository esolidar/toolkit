import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { FormattedNumber, FormattedMessage } from 'react-intl';

const ContributeRow = ({ contribute, env, currency }) => {
  const contributorThumb = contribute.contributor ? contribute.contributor.thumbs.thumb : null;
  const userThumb =
    contribute.user && contribute.hidden === 0 ? contribute.user.thumbs.thumb : null;
  const contributorName = contribute.contributor ? contribute.contributor.name : null;
  const userName = contribute.user ? contribute.user.name : null;

  const row = {
    hidden: contribute.hidden,
    thumb: contribute.contributor ? contributorThumb : userThumb,
    name: contribute.contributor ? contributorName : userName,
    date: contribute.created_at,
    value: contribute.payment_product ? contribute.payment_product.amount : contribute.value,
    currency: contribute.payment_product ? contribute.payment_product.currency.small : currency,
    message: contribute.message,
  };

  return (
    <div className={contribute.blink ? 'contribute-row-box blink' : 'contribute-row-box'}>
      <div className="contribute-thumb">
        {contribute.hidden === 1 && (
          <img src={`${env.cdn_static_url}/frontend/assets/anonymous-user.svg`} alt="anonymous" />
        )}
        {contribute.hidden === 0 && <img src={row.thumb} alt={row.name} />}
      </div>
      <div>
        <span className="contribute-row-date">
          <Moment fromNow utc ago>
            {contribute.created_at || contribute.dateAdded}
          </Moment>
        </span>
        <span className="contribute-row-text">
          <div>
            {contribute.hidden === 0 && <div className="user">{row.name}</div>}
            {contribute.hidden === 1 && (
              <div className="user">
                <FormattedMessage id="crowdfunding.anonymous" defaultMessage="Anonymous user" />
              </div>
            )}
            <FormattedNumber value={row.value} style="currency" currency={row.currency} />
            {row.message && <p className="message">{row.message}</p>}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ContributeRow;

ContributeRow.propTypes = {
  contribute: PropTypes.object,
  currency: PropTypes.string,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};
