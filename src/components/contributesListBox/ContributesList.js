import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ContributeRow from './ContributeRow';

const ContributesList = ({
  contributesListTotal,
  contributes,
  loadingContributes,
  showMoreContributes,
  currency,
  env,
  isAuction,
}) => {
  const renderContributes = () => {
    if (contributes && contributes.length) {
      return contributes.map((contribute) => (
        <div key={contribute.id}>
          <ContributeRow
            contribute={contribute}
            currency={currency}
            env={env}
          />
        </div>
      ));
    }
    return (
      <div className="no-contributions">
        {!isAuction && (
          <FormattedMessage
            id="crowdfunding.no-contributions"
            defaultMessage="No contributions"
          />
        )}
        {isAuction && (
          <FormattedMessage
            id="auctions.no-bids"
            defaultMessage="No bids"
          />
        )}

      </div>
    );
  };

  return (
    <div>
      {renderContributes()}
      {(contributes && (contributesListTotal > contributes.length)) && (
        <div className="text-center">
          <button className="see-more-contributors" type="button" onClick={showMoreContributes}>
            {!loadingContributes && (
              <FormattedMessage
                id="crowdfunding.more"
                defaultMessage="See more"
              />
            )}
            {loadingContributes
              && (
                <FormattedMessage
                  id="crowdfunding.loading-text"
                  defaultMessage="Loading ..."
                />
              )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ContributesList;

ContributesList.propTypes = {
  contributesListTotal: PropTypes.number,
  contributes: PropTypes.array,
  loadingContributes: PropTypes.bool,
  showMoreContributes: PropTypes.func,
  currency: PropTypes.string,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
  isAuction: PropTypes.bool,
};
