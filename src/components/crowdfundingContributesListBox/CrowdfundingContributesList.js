import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CrowdfundigContributeRow from './CrowdfundingContributeRow';

const CrowdfundigContributesList = ({
  contributesListTotal,
  contributes,
  loadingContributes,
  showMoreContributes,
  currency,
  env,
}) => {
  const renderContributes = () => {
    if (contributes && contributes.length) {
      return contributes.map((contribute) => (
        <div key={contribute.id}>
          <CrowdfundigContributeRow
            contribute={contribute}
            currency={currency}
            env={env}
          />
        </div>
      ));
    }
    return (
      <div className="no-contributions">
        <FormattedMessage
          id="crowdfunding.no-contributions"
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

export default CrowdfundigContributesList;

CrowdfundigContributesList.propTypes = {
  contributesListTotal: PropTypes.number,
  contributes: PropTypes.array,
  loadingContributes: PropTypes.bool,
  showMoreContributes: PropTypes.func,
  currency: PropTypes.string,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};
