import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import AuctionContributesRow from './AuctionContributesRow';

const AuctionListBid = ({
  contributesListTotal,
  contributes,
  loadingContributes,
  showMoreContributes,
  env,
}) => {
  const renderContributes = () => {
    if (contributes && contributes.length) {
      return contributes.map((contribute) => (
        <div key={contribute.id}>
          <AuctionContributesRow
            contribute={contribute}
            env={env}
          />
        </div>
      ));
    }
    return (
      <div className="no-contributions">
        <FormattedMessage
          id="auction.no-contributions"
          defaultMessage="No contributions"
        />
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
                id="auction.more"
                defaultMessage="See more"
              />
            )}
            {loadingContributes
              && (
                <FormattedMessage
                  id="auction.loading-text"
                  defaultMessage="Loading ..."
                />
              )}
          </button>
        </div>
      )}
    </div>
  );
};

AuctionListBid.propTypes = {
  contributesListTotal: PropTypes.number,
  contributes: PropTypes.array,
  loadingContributes: PropTypes.bool,
  showMoreContributes: PropTypes.func,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

export default AuctionListBid;
