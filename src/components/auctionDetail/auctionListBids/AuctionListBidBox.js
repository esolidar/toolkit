import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loading from '../../loading/Loading';
import AuctionListBid from './AuctionListBid';

const AuctionListBidBox = ({
  contributesList,
  loadingContributesList,
  loadingContributes,
  total,
  showMoreContributes,
  env,
}) => (
  <div className="col-sm-12">
    <div className="row">
      <div className="box" style={{ width: '100%', 'margin-top': '43px' }}>
        <p className="control-label mb-4">
          <FormattedMessage
            id="auction.last.list.bids"
            defaultMessage="Last Bids"
          />
        </p>
        {loadingContributesList
              && (
              <div className="loading-contributes-list">
                <Loading />
              </div>
              )}
        {!loadingContributesList
              && (
              <AuctionListBid
                contributesListTotal={total}
                contributes={contributesList}
                loadingContributes={loadingContributes}
                showMoreContributes={showMoreContributes}
                env={env}
              />
              )}
      </div>
    </div>
  </div>
);

AuctionListBidBox.propTypes = {
  contributesList: PropTypes.array,
  loadingContributesList: PropTypes.bool,
  loadingContributes: PropTypes.bool,
  total: PropTypes.number,
  showMoreContributes: PropTypes.func,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

export default AuctionListBidBox;
