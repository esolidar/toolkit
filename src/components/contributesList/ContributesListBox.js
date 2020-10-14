import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';
import ContributesList from './ContributesList';

const ContributesListBox = ({
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
                env={env}
              />
              )}
      </div>
    </div>
  </div>
);

ContributesListBox.propTypes = {
  contributesList: PropTypes.array.isRequired,
  loadingContributesList: PropTypes.bool,
  loadingContributes: PropTypes.bool,
  total: PropTypes.number,
  showMoreContributes: PropTypes.func,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

export default ContributesListBox;
