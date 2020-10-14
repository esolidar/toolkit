import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ContributeRow from './ContributeRow';

const ContributesList = ({
  contributesListTotal,
  contributes,
  loadingContributes,
  showMoreContributes,
  env,
}) => {
  const renderContributes = () => {
    if (contributes.length > 0) {
      return contributes.map((contribute) => (
        <div key={contribute.id}>
          <ContributeRow
            contribute={contribute}
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
      {(contributesListTotal > contributes.length) && (
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
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};
