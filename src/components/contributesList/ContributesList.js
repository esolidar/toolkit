import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';

const ContributesList = ({
  contributesList,
  loadingContributesList,
  loadingContributes,
  total,
  showMoreContributes,
}) => (
  <div className="col-sm-12">
    <div className="row">
      <div className="box" style={{ width: '100%' }}>
        <h3 className="control-label">
          <FormattedMessage
            id="crowdfunding.last.donations.list"
            defaultMessage="Latest donations"
          />
        </h3>
        {loadingContributesList
              && (
              <div className="loading-contributes-list">
                <Loading />
              </div>
              )}
        {!loadingContributesList
              && (
              <ContributesList
                contributes={contributesList}
                loadingContributes={loadingContributes}
                contributesListTotal={total}
                showMoreContributes={showMoreContributes}
              />
              )}
      </div>
    </div>
  </div>
);

ContributesList.propTypes = {
  contributesList: PropTypes.array.isRequired,
  loadingContributesList: PropTypes.bool,
  loadingContributes: PropTypes.bool,
  total: PropTypes.number,
  showMoreContributes: PropTypes.func,
};

export default ContributesList;
