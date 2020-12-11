import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';
import CrowdfundingContributesList from './CrowdfundingContributesList';

const CrowdfundingContributesListBox = ({
  contributesList,
  loadingContributesList,
  loadingContributes,
  total,
  showMoreContributes,
  env,
  currency,
}) => (
  <div className="col-sm-12">
    <div className="row">
      <div className="box" style={{ width: '100%', 'margin-top': '75px' }}>
        <p className="control-label mb-4">
          <FormattedMessage
            id="crowdfunding.last.donations.list"
            defaultMessage="Latest donations"
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
              <CrowdfundingContributesList
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

CrowdfundingContributesListBox.propTypes = {
  contributesList: PropTypes.array,
  loadingContributesList: PropTypes.bool,
  loadingContributes: PropTypes.bool,
  total: PropTypes.number,
  showMoreContributes: PropTypes.func,
  currency: PropTypes.string,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

export default CrowdfundingContributesListBox;
