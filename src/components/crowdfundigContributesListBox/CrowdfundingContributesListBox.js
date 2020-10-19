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
}) => (
  <div className="col-sm-12">
    <div className="row">
      <div className="box" style={{ width: '100%' }}>
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
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

export default CrowdfundingContributesListBox;
