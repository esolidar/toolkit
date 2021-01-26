import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';
import ContributesList from './ContributesList';

const ContributesListBox = ({
  isAuction,
  contributesList,
  loadingContributesList,
  loadingContributes,
  total,
  showMoreContributes,
  env,
  currency,
  primaryColor,
}) => (
  <div className="col-sm-12">
    <div className="row">
      <div className="box" style={{ width: '100%' }}>
        <p className="control-label mb-4" style={{ color: primaryColor }}>
          {!isAuction && (
            <FormattedMessage
              id="crowdfunding.last.donations.list"
              defaultMessage="Latest donations"
            />
          )}
          {isAuction && (
            <FormattedMessage
              id="auction.last.bid"
              defaultMessage="Last Bid"
            />
          )}
        </p>
        {loadingContributesList
          && (
            <div className="loading-contributes-list">
              <Loading />
            </div>
          )}
        {!loadingContributesList
          && (
            <ContributesList
              contributesListTotal={total}
              contributes={contributesList}
              loadingContributes={loadingContributes}
              showMoreContributes={showMoreContributes}
              currency={currency}
              env={env}
            />
          )}
      </div>
    </div>
  </div>
);

ContributesListBox.propTypes = {
  isAuction: PropTypes.bool,
  contributesList: PropTypes.array,
  loadingContributesList: PropTypes.bool,
  loadingContributes: PropTypes.bool,
  total: PropTypes.number,
  showMoreContributes: PropTypes.func,
  currency: PropTypes.string,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
  primaryColor: PropTypes.string,
};

ContributesListBox.defaultProps = {
  isAuction: false,
};

export default ContributesListBox;
